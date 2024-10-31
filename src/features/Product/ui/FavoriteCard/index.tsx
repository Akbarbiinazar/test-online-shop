import Image from 'next/image';
import styles from './index.module.scss';
import { Product } from '@/entities/products/api/use-list-products/types';
import { useAppDispatch } from '@/shared/lib/hooks';
import { removeFavourite } from '@/entities/products/slices/products';

export const FavoriteProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const handleRemoveFavorite = () => {
    dispatch(removeFavourite(product.id));
  };
  return (
    <div className={styles['card']}>
      <div className={styles['card__inner']}>
        <Image
          alt="product card"
          src={`${product.image}`}
          width={134}
          height={178}
        />
        <div className={styles['card__content']}>
          <div className={styles['card__info']}>
            <p>{product.category}</p>
            <h3>{product.title}</h3>
          </div>
          <div className={styles['card__price']}>
            <p>{product.price}$</p>
            <span onClick={handleRemoveFavorite}>Remove</span>
          </div>
        </div>
      </div>
    </div>
  );
};
