import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

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
}

export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  images: string[];
}

export function useProductCategories() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      
      const { data: categoriesData, error: catError } = await supabase
        .from('product_categories')
        .select('*')
        .order('display_order');

      if (catError) throw catError;

      const { data: imagesData, error: imgError } = await supabase
        .from('product_images')
        .select('*')
        .order('display_order');

      if (imgError) throw imgError;

      // Group images by category and generate public URLs
      const imagesByCategory: Record<string, string[]> = {};
      
      for (const img of imagesData || []) {
        const { data: { publicUrl } } = supabase.storage
          .from('product-images')
          .getPublicUrl(img.storage_path);

        if (!imagesByCategory[img.category_id]) {
          imagesByCategory[img.category_id] = [];
        }
        imagesByCategory[img.category_id].push(publicUrl);
      }

      // Combine categories with their images
      const result: ProductCategory[] = (categoriesData || []).map((cat) => ({
        id: cat.slug,
        slug: cat.slug,
        title: cat.title,
        description: cat.description,
        images: imagesByCategory[cat.id] || [],
      }));

      setCategories(result);
      setError(null);
    } catch (err) {
      console.error('Error fetching product categories:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { categories, loading, error, refetch: fetchCategories };
}
