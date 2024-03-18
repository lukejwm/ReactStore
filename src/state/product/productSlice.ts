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
    updateProduct: (state, action: PayloadAction<Product>) => {
      const { name, ...updatedProduct } = action.payload;
      const index = state.productList.findIndex((p) => p.name === name);
      if (index !== -1) {
        state.productList[index] = {
          ...state.productList[index],
          ...updatedProduct,
        };
      }
    },
  },
});

export const { setCategory, addNewProduct, updateProduct } =
  productSlice.actions;
export default productSlice.reducer;
