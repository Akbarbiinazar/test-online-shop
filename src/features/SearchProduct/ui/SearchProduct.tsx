import { Input } from '@/shared/ui/Input/Input';
import { BiSearch } from 'react-icons/bi';

import styles from './SearchProducts.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks';
import React, { useCallback } from 'react';
import { setSearchTerm } from '@/entities/products/slices/products';

import debounce from 'lodash.debounce';

export const SearchProduct = () => {
  const dispatch = useAppDispatch();

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      dispatch(setSearchTerm(value));
    }, 250),
    [dispatch]
  );

  // TODO: debounce search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className={styles['search']}>
      <Input
        type="text"
        placeholder="Search"
        className={styles['search__input']}
        rightIcon={BiSearch}
        onChange={handleSearch}
      />
    </div>
  );
};
