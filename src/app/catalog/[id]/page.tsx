import { Product } from '@/entities/products/api/use-list-products/types';
import { ProductCardView } from '@/widgets/ProductCardView/ui';
import { getProduct } from '@/entities/products/api/use-list-products';
import Container from '@/shared/ui/container/Container';
import { Breadcrumbs } from '@/shared/ui/BreadCrumbs/NextBreadCrumbs';

interface Props {
  params: {
    id: string;
  };
}

const CatalogPage = async ({ params }: Props) => {
  const productId = Number(params.id);

  const product = await getProduct(productId);

  if (!product || 'error' in product) {
    return (
      <Container>
        <div>Product not found.</div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mt-8 flex flex-col gap-y-6">
        <Breadcrumbs customCrumbName={product.title} />
        <div className="catalog__product">
          <ProductCardView product={product} />
        </div>
      </div>
    </Container>
  );
};

export default CatalogPage;
