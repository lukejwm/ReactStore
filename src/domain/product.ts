import Category from "./category";

interface Product {
  id: number;
  name: string;
  description: string;
  isPerishable: boolean;
  expiryDate: Date;
  category: Category;
  price: number;
  onSpecial: boolean;
}

export default Product;
