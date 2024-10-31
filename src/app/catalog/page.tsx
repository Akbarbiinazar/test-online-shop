import Container from '@/shared/ui/container/Container';
import { Filters } from '@/widgets/Filters';
import { ProductList } from '@/widgets/ProductList';

export default function Catalog() {
  return (
    <Container>
      <div className="mt-5 flex justify-between w-full">
        <Filters />
        <ProductList />
      </div>
    </Container>
  );
}
