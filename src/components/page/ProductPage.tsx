import Product from "../../domain/product";

interface ProductPageProps {
  children: Product;
}

const ProductPage = ({ children }: ProductPageProps) => {
  // Extract productId from the URL params
  const productName = children.name;

  // Fetch product details based on productId
  // You can fetch the product details from an API or use local data
  // For demonstration, I'm just displaying the productId
  return <h1>{productName}</h1>;
};

export default ProductPage;
