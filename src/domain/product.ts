import Category from "./category";

interface Product {
  name: string;
  description: string;
  isPerishable: boolean;
  expiryDate?: string;
  category: Category | undefined;
  price: number;
  onSpecial: boolean;
  image: string;
}

export default Product;
