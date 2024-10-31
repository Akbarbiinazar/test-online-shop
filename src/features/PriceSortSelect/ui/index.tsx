'use client';
import Text from '@/shared/ui/Text';

import { IoIosArrowDown } from 'react-icons/io';

import style from './index.module.scss';

export const PriceSortSelect = ({
  onSortChange,
}: {
  onSortChange: (sortOption: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };

  return (
    <div className={style['price']}>
      <Text className="mr-2">Price</Text>
      <div className="relative">
        <select
          onChange={handleChange}
          className={style['price__select']}
          style={{ width: '30px', position: 'absolute', opacity: 0 }}
          defaultValue=""
        >
          <option value="ascend">Ascending</option>
          <option value="descend">Descending</option>
        </select>
        <IoIosArrowDown className={style['price__select_icon']} />
      </div>
    </div>
  );
};
