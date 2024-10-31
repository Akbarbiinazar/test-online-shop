'use client';
import { ProductCard } from '@/features/Product';

import styles from './ProductList.module.scss';
import { Breadcrumbs } from '@/shared/ui/BreadCrumbs/NextBreadCrumbs';
import Text from '@/shared/ui/Text';
import { PriceSortSelect } from '@/features/PriceSortSelect';
import { useAppSelector } from '@/shared/lib/hooks';
import { useMemo, useState } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { useFetchProducts } from '@/features/Product/model/use-fetch-products';

export const ProductList = () => {
  const [sortOption, setSortOption] = useState<string>('');

  const { isLoading, error } = useFetchProducts();

  const { products, searchTerm, selectedCategories } = useAppSelector(
    state => state.products
  );

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearchTerm = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      return matchesSearchTerm && matchesCategory;
    });
  }, [products, searchTerm, selectedCategories]);

  const sortedProducts = useMemo(() => {
    const productsToSort = [...filteredProducts];
    return productsToSort.sort((a, b) => {
      if (sortOption === 'ascend') {
        return a.price - b.price;
      } else if (sortOption === 'descend') {
        return b.price - a.price;
      }
      return 0;
    });
  }, [filteredProducts, sortOption]);

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  return (
    <div className={styles['products']}>
      <Breadcrumbs />

      <Text as="h2" size="xl">
        Catalog
      </Text>

      <PriceSortSelect onSortChange={handleSortChange} />

      {error && <div>{error}</div>}

      <div className={styles['products__list']}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className={styles.skeleton} />
            ))
          : sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};
