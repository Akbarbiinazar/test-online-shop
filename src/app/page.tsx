import Container from '@/shared/ui/container/Container';
import { Filters } from '@/widgets/Filters';
import { ProductList } from '@/widgets/ProductList';

export default function Home() {
  return (
    <Container>
      <div className="mt-5 flex gap-20 w-full">
        <Filters />
        <ProductList />
      </div>
    </Container>
  );
}
