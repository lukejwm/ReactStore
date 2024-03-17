import Category from "./category";

interface Product {
  name: string;
  description: string;
  isPerishable: boolean;
  expiryDate: Date;
  category: Category;
  price: number;
  onSpecial: boolean;
}

export default Product;
