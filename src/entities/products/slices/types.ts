import { Product } from '../api/use-list-products/types';

export type ProductsState = {
  products: Product[];
  searchTerm: string;
  loading: boolean;
  selectedCategories: Array<string>;
  favorites: Product[] | any;
  error: any;
};
