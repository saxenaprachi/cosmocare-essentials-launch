import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Image, FolderOpen, Plus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Stats {
  totalCategories: number;
  totalImages: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({ totalCategories: 0, totalImages: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [categoriesRes, imagesRes] = await Promise.all([
          supabase.from('product_categories').select('id', { count: 'exact' }),
          supabase.from('product_images').select('id', { count: 'exact' }),
        ]);

        setStats({
          totalCategories: categoriesRes.count || 0,
          totalImages: imagesRes.count || 0,
        });
      } catch (err) {
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Product Categories',
      value: stats.totalCategories,
      icon: FolderOpen,
      color: 'bg-primary/10 text-primary',
    },
    {
      title: 'Product Images',
      value: stats.totalImages,
      icon: Image,
      color: 'bg-accent/10 text-accent',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to your admin panel
          </p>
        </div>
        <Button asChild>
          <Link to="/cosmos-admin/products">
            <Plus className="w-4 h-4 mr-2" />
            Manage Products
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {loading ? (
                    <span className="animate-pulse">--</span>
                  ) : (
                    stat.value
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button variant="outline" asChild className="h-auto py-4">
            <Link to="/cosmos-admin/products" className="flex flex-col items-center gap-2">
              <Image className="w-6 h-6" />
              <span>Manage Product Images</span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto py-4">
            <Link to="/products" target="_blank" className="flex flex-col items-center gap-2">
              <FolderOpen className="w-6 h-6" />
              <span>View Products Page</span>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
