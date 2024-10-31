import Container from '@/shared/ui/container/Container';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <Container>
        <p>© ООО “Gushop” 2002—2019. All rights reserved</p>
      </Container>
    </footer>
  );
};
