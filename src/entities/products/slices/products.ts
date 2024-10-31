'use client';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ProductsState } from './types';
import { getProducts } from '../api/use-list-products';

let initialFavorites: string[] = [];

if (typeof window !== 'undefined') {
  initialFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
}

const initialState: ProductsState = {
  products: [],
  searchTerm: '',
  selectedCategories: [],
  favorites: initialFavorites,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data = await getProducts();

    if ('error' in data) {
      throw new Error(data.error);
    }

    return data as ProductsState['products'];
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductsState['products']>) {
      state.products = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<string | number>) {
      const productId = action.payload.toString();
      const isFavorite = state.favorites.includes(productId);

      if (!isFavorite) {
        state.favorites.push(productId);
      }

      state.favorites = state.favorites.filter(
        (id: string | number) => id !== productId
      );

      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavourite(state, action: PayloadAction<string | number>) {
      const productId = action.payload.toString();

      state.favorites = state.favorites.filter(
        (id: string | number) => id !== productId
      );

      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    toggleCategory(state, action: PayloadAction<string>) {
      const category = action.payload;
      const index = state.selectedCategories.indexOf(category);

      if (index !== -1) {
        state.selectedCategories.splice(index, 1);
      } else {
        state.selectedCategories.push(category);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductsState['products']>) => {
          state.products = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load products';
      });
  },
});

export const {
  setProducts,
  setSearchTerm,
  toggleFavorite,
  toggleCategory,
  removeFavourite,
} = productsSlice.actions;
export default productsSlice.reducer;
