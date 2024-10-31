'use client';
import Text from '@/shared/ui/Text';

import { IoIosArrowDown } from 'react-icons/io';

export const PriceSortSelect = ({
  onSortChange,
}: {
  onSortChange: (sortOption: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="flex items-center">
      <Text className="mr-2">Price</Text>
      <div className="relative">
        <select
          onChange={handleChange}
          className="appearance-none bg-transparent text-gray-800 font-semibold px-3 py-2 rounded-md cursor-pointer"
          style={{ width: '30px', position: 'absolute', opacity: 0 }}
          defaultValue=""
        >
          <option value="ascend">Ascending</option>
          <option value="descend">Descending</option>
        </select>
        <IoIosArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};
