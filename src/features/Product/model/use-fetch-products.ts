import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks';
import { fetchProducts } from '@/entities/products/slices/products';
import { Product } from '@/entities/products/api/use-list-products/types';

export const useFetchProducts = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const action = await dispatch(fetchProducts());
        if (fetchProducts.fulfilled.match(action)) {
          setProducts(action.payload);
        } else {
          setError('Failed to fetch products.');
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [dispatch]);

  return { isLoading, products, error };
};
