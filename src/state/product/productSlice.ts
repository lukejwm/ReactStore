import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../domain/product";

interface ProductState {
  product: Product;
}

const initialState: ProductState = {
  product: {} as Product,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
  },
});

export const { addNewProduct } = productSlice.actions;
export default productSlice.reducer;
