import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../domain/product";
import Category from "../../domain/category";
import products from "../../domain/store-data";

interface ProductState {
  productList: Product[];
  selectedCategory: Category | null;
}

const initialState: ProductState = {
  productList: products,
  selectedCategory: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category | null>) => {
      state.selectedCategory = action.payload;
    },
    addNewProduct: (state, action: PayloadAction<Product>) => {
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };
    },
  },
});

export const { setCategory, addNewProduct } = productSlice.actions;
export default productSlice.reducer;
