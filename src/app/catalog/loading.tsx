import React from 'react';
import styles from './loading.module.scss';
import { Skeleton } from '@/components/ui/skeleton';
import Container from '@/shared/ui/container/Container';

export default function Loading() {
  const array = new Array(6).fill(null);

  return (
    <div className={styles.products}>
      <Container>
        <div className={styles.products__list}>
          {array.map((_, i) => (
            <div key={i} className={styles.card}>
              <Skeleton className="bg-zinc-700 rounded-lg h-72" />
              <div className={styles.card__wrapper}>
                <div className={styles.card__content}>
                  <div className={styles.card__content_descr}>
                    <Skeleton className="bg-zinc-600 h-4 w-24 mb-2" />
                    <Skeleton className="bg-zinc-600 h-4 w-32" />
                  </div>
                </div>
                <Skeleton className="bg-zinc-600 h-6 w-20 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
