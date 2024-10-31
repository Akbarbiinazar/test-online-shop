import React from 'react';
import styles from './page.module.scss';
import Container from '@/shared/ui/container/Container';
import { FavoriteList } from '@/widgets/FavoriteList';

export default function FavoritesPage() {
  return (
    <section className={styles['favourite']}>
      <Container>
        <h1 className={styles['favourite__title']}>Favourite</h1>

        <FavoriteList />
      </Container>
    </section>
  );
}
