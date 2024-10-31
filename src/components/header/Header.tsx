'use client';
import React from 'react';
import Container from '../../shared/ui/container/Container';
import styles from './Header.module.scss';
import Logo from '@/shared/assets/Logo/Logo';

import { BiHeart, BiSearch } from 'react-icons/bi';
import Text from '../../shared/ui/Text';
import Link from 'next/link';
import { SearchProduct } from '@/features/SearchProduct';
import useMediaQuery from '@/shared/lib/hooks';

type headerNavigationType = {
  title: string;
  href: string;
  id: number;
};

const headerNavigations: Array<headerNavigationType> = [
  {
    title: 'Main page',
    href: '/',
    id: 1,
  },
  {
    title: 'Delivery',
    href: '/',
    id: 2,
  },
  {
    title: 'Contact',
    href: '/',
    id: 3,
  },
  {
    title: 'Blog',
    href: '/',
    id: 4,
  },
];

export default function Header() {
  return (
    <div className={styles['header']}>
      <Container>
        <div className={styles['header__inner']}>
          <Logo />
          <SearchProduct />

          <Link href={`/favorites`}>
            <BiHeart className="w-5 w-full h-5 text-center" />
            <Text size="sm">Favorite</Text>
          </Link>
        </div>
        <nav className={styles['header__navigation']}>
          {headerNavigations.map(navigation => (
            <Link href={navigation.href} className="" key={navigation.id}>
              {navigation.title}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  );
}
