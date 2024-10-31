'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';
import styles from './NextBreadCrumbs.module.scss';

export const Breadcrumbs = ({
  customCrumbName,
}: {
  customCrumbName?: string;
}) => {
  const pathname = usePathname();

  const createBreadcrumbs = () => {
    const pathParts = pathname.split('/').filter(part => part);

    return pathParts.map((part, index) => {
      const href = '/' + pathParts.slice(0, index + 1).join('/');
      const label =
        index === pathParts.length - 1 && customCrumbName
          ? customCrumbName
          : part.charAt(0).toUpperCase() + part.slice(1);

      return { label, href };
    });
  };

  const breadcrumbs = createBreadcrumbs();

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbs__list}>
        <li className={styles.breadcrumbs__item}>
          <Link href="/" className={styles.breadcrumbs__link}>
            Main
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={index}
            className={`${styles.breadcrumbs__item} ${
              index === breadcrumbs.length - 1
                ? styles['breadcrumbs__item--last']
                : ''
            }`}
          >
            <IoIosArrowForward />
            <Link href={breadcrumb.href} className={styles.breadcrumbs__link}>
              {breadcrumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
