'use client';

import Text from '@/shared/ui/Text';
import React from 'react';
import { filterItemsType } from '../model/types';

import styles from './Filters.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks';
import { toggleCategory } from '@/entities/products/slices/products';
import { Input } from '@/shared/ui/Input/Input';

const filterItems: Array<filterItemsType> = [
  {
    title: "women's clothing",
    id: 1,
  },
  {
    title: "men's clothing",
    id: 2,
  },
  {
    title: 'electronics',
    id: 3,
  },
  {
    title: 'jewelery',
    id: 4,
  },
];

export const Filters = () => {
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (category: string) => {
    dispatch(toggleCategory(category));
  };
  return (
    <div className={styles['filters']}>
      <Text className="mb-6">Filters</Text>
      <div className={styles['filters__list']}>
        {filterItems.map(filterItem => (
          <div className={styles['filters__list_item']} key={filterItem.id}>
            <Input
              type="checkbox"
              className="w-5"
              onChange={() => handleCheckboxChange(filterItem.title)}
            />
            <Text size="sm" className="font-normal">
              {filterItem.title}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};
