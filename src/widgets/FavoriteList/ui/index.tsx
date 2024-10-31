'use client';
import { fetchProducts } from '@/entities/products/slices/products';
import styles from './index.module.scss';
import { FavoriteProductCard, ProductCard } from '@/features/Product';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { useEffect } from 'react';
import { useFetchProducts } from '@/features/Product/model/use-fetch-products';

export const FavoriteList = () => {
  const products = useAppSelector(state => state.products.products);
  const favorites = useAppSelector(state => state.products.favorites);

  const { isLoading, error } = useFetchProducts();

  const favoriteProducts = products.filter(product =>
    favorites.map(Number).includes(product.id)
  );

  return (
    <section className={styles['favorite']}>
      <div className={styles['favorites__inner']}>
        <h3 className={styles['favorite__title']}>
          {favoriteProducts.length} item(s)
        </h3>
        <div className={styles.favoriteList}>
          {favoriteProducts.length > 0 ? (
            favoriteProducts.map(product => (
              <FavoriteProductCard product={product} key={product.id} />
            ))
          ) : (
            <p>No favorite products added.</p>
          )}
        </div>
      </div>
    </section>
  );
};
