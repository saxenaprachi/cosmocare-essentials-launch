import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, GripVertical, Upload, X, Edit2, Save } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';

interface Category {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  display_order: number;
}

interface ProductImage {
  id: string;
  category_id: string;
  storage_path: string;
  alt_text: string | null;
  display_order: number;
  url?: string;
}

const ProductsAdmin = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [images, setImages] = useState<Record<string, ProductImage[]>>({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<string | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const { toast } = useToast();

  const fetchData = useCallback(async () => {
    try {
      const { data: categoriesData, error: catError } = await supabase
        .from('product_categories')
        .select('*')
        .order('display_order');

      if (catError) throw catError;
      setCategories(categoriesData || []);

      const { data: imagesData, error: imgError } = await supabase
        .from('product_images')
        .select('*')
        .order('display_order');

      if (imgError) throw imgError;

      // Group images by category and add public URLs
      const groupedImages: Record<string, ProductImage[]> = {};
      for (const img of imagesData || []) {
        const { data: { publicUrl } } = supabase.storage
          .from('product-images')
          .getPublicUrl(img.storage_path);

        const imageWithUrl = { ...img, url: publicUrl };

        if (!groupedImages[img.category_id]) {
          groupedImages[img.category_id] = [];
        }
        groupedImages[img.category_id].push(imageWithUrl);
      }
      setImages(groupedImages);
    } catch (err) {
      console.error('Error fetching data:', err);
      toast({
        title: 'Error',
        description: 'Failed to load product data',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleImageUpload = async (categoryId: string, files: FileList) => {
    if (!files.length) return;
    setUploading(categoryId);

    try {
      const currentImages = images[categoryId] || [];
      let maxOrder = currentImages.reduce((max, img) => Math.max(max, img.display_order), 0);

      for (const file of Array.from(files)) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${categoryId}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from('product-images')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        maxOrder++;
        const { error: insertError } = await supabase
          .from('product_images')
          .insert({
            category_id: categoryId,
            storage_path: fileName,
            alt_text: file.name.split('.')[0],
            display_order: maxOrder,
          });

        if (insertError) throw insertError;
      }

      toast({
        title: 'Success',
        description: `${files.length} image(s) uploaded successfully`,
      });
      fetchData();
    } catch (err) {
      console.error('Error uploading image:', err);
      toast({
        title: 'Error',
        description: 'Failed to upload image',
        variant: 'destructive',
      });
    } finally {
      setUploading(null);
    }
  };

  const handleDeleteImage = async (image: ProductImage) => {
    try {
      const { error: storageError } = await supabase.storage
        .from('product-images')
        .remove([image.storage_path]);

      if (storageError) throw storageError;

      const { error: dbError } = await supabase
        .from('product_images')
        .delete()
        .eq('id', image.id);

      if (dbError) throw dbError;

      toast({
        title: 'Success',
        description: 'Image deleted successfully',
      });
      fetchData();
    } catch (err) {
      console.error('Error deleting image:', err);
      toast({
        title: 'Error',
        description: 'Failed to delete image',
        variant: 'destructive',
      });
    }
  };

  const handleUpdateCategory = async () => {
    if (!editingCategory) return;

    try {
      const { error } = await supabase
        .from('product_categories')
        .update({
          title: editingCategory.title,
          description: editingCategory.description,
        })
        .eq('id', editingCategory.id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Category updated successfully',
      });
      setEditingCategory(null);
      fetchData();
    } catch (err) {
      console.error('Error updating category:', err);
      toast({
        title: 'Error',
        description: 'Failed to update category',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl text-foreground">Product Management</h1>
        <p className="text-muted-foreground mt-1">
          Manage your product categories and images
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingCategory(category)}
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Category</DialogTitle>
                        </DialogHeader>
                        {editingCategory && (
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-medium">Title</label>
                              <Input
                                value={editingCategory.title}
                                onChange={(e) =>
                                  setEditingCategory({
                                    ...editingCategory,
                                    title: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Description</label>
                              <Textarea
                                value={editingCategory.description || ''}
                                onChange={(e) =>
                                  setEditingCategory({
                                    ...editingCategory,
                                    description: e.target.value,
                                  })
                                }
                                rows={3}
                              />
                            </div>
                          </div>
                        )}
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <Button onClick={handleUpdateCategory}>
                              <Save className="w-4 h-4 mr-2" />
                              Save Changes
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {category.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files) {
                          handleImageUpload(category.id, e.target.files);
                        }
                      }}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={uploading === category.id}
                      asChild
                    >
                      <span>
                        <Upload className="w-4 h-4 mr-2" />
                        {uploading === category.id ? 'Uploading...' : 'Upload Images'}
                      </span>
                    </Button>
                  </label>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  <AnimatePresence>
                    {(images[category.id] || []).map((image) => (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative group aspect-square rounded-lg overflow-hidden border border-border"
                      >
                        <img
                          src={image.url}
                          alt={image.alt_text || 'Product image'}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="destructive"
                                size="sm"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Image</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete this image? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDeleteImage(image)}
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {(!images[category.id] || images[category.id].length === 0) && (
                    <div className="col-span-full text-center py-8 text-muted-foreground">
                      No images uploaded yet. Click "Upload Images" to add product photos.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAdmin;
