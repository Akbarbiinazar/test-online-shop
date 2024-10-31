import { Product } from '@/entities/products/api/use-list-products/types';
import styles from './index.module.scss';
import Image from 'next/image';
import Text from '@/shared/ui/Text';
import { BiHeart } from 'react-icons/bi';
import { Stars } from '@/shared/assets/svg/Stars';

export const ProductCardView = ({ product }: { product: Product }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card__inner']}>
        <Image
          alt="product image"
          src={product.image}
          width={192}
          height={256}
          loading="lazy"
        />
        <div className={styles['card__info']}>
          <div className={styles['card__info_top']}>
            <div className={styles['card__info_title']}>
              <Text as="h3" size="xl" className="font-extrabold">
                {product.title}
              </Text>
              <Text className="flex items-center gap-3">
                <Stars />
                (236 rated)
              </Text>
            </div>
            <button className={styles['card__info_btn']}>
              Add to favorite
              <BiHeart className="w-7 h-6" />
            </button>
          </div>
          <div className={styles['card__info_divider']}></div>

          <div className={styles['card__info_bottom']}>
            <div className={styles['card__info_description']}>
              <h3 className={styles['']}>Description</h3>
              <p>{product.description}</p>
            </div>
            <div className={styles['card__info_cta']}>
              <p>{product.price}$</p>
              {/* TODO: make reusable button */}
              <button className={styles['']}>Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
