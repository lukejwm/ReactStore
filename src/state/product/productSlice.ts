import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../domain/product";
import products from "../../domain/store-data";

interface ProductState {
  productList: Product[];
}

const initialState: ProductState = {
  productList: products,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<Product>) => {
      state.productList.concat(action.payload);
    },
  },
});

export const { addNewProduct } = productSlice.actions;
export default productSlice.reducer;
