'use server';

import { Product } from './types';
// TODO: create a generic, DRY body logic

export async function getProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
export async function getProduct(id: number) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Product = await response.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
