import { useState } from "react";
import Category from "../../domain/category";

interface ProductFormState {
  productName: string;
  productDescription: string;
  productCategory: Category | undefined;
  isPerishable: boolean;
  expiryDate: Date | undefined;
  productPrice: number;
  isOnSpecial: boolean;
}

const useProductForm = (): [
  ProductFormState,
  (state: Partial<ProductFormState>) => void
] => {
  const [state, setState] = useState<ProductFormState>({
    productName: "",
    productDescription: "",
    productCategory: undefined,
    isPerishable: false,
    expiryDate: undefined,
    productPrice: 0.0,
    isOnSpecial: false,
  });

  const setFormState = (updatedState: Partial<ProductFormState>) => {
    setState((prevState) => ({
      ...prevState,
      ...updatedState,
    }));
  };

  return [state, setFormState];
};

export default useProductForm;
