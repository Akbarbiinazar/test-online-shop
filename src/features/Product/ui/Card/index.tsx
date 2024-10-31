import Image from 'next/image';
import styles from './index.module.scss';
import { Product } from '@/entities/products/api/use-list-products/types';
import { BiHeart } from 'react-icons/bi';
import Text from '@/shared/ui/Text';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { toggleFavorite } from '@/entities/products/slices/products';

export const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.products.favorites);
  const isFavorite = favorites.includes(product.id.toString());
  console.log(isFavorite);
  console.log(favorites);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(product.id));
  };

  return (
    <Link href={`/catalog/${product.id}`} passHref>
      <div className={styles['card']}>
        <div className={styles['card__wrapper']}>
          <div className={styles['card__content']}>
            <div className={styles['card__content_descr']}>
              <Text as="span" size="sm" className={styles['card__category']}>
                {product.category}
              </Text>
              <Text as="h3" size="sm" className={styles['card__title']}>
                {product.title}
              </Text>
            </div>
            <BiHeart
              className={`favorite__icon ${
                isFavorite ? 'favorite__icon--active' : ''
              }`}
              onClick={handleFavoriteClick}
            />
          </div>
          {/* TODO: find out why do images has one setted width, but different height */}
          <Image
            alt="product image"
            src={`${product.image}`}
            width={156}
            height={223}
            loading="lazy"
            className="object-cover"
          />

          <Text className={styles['card__price']}>{product.price}$</Text>
        </div>
      </div>
    </Link>
  );
};
