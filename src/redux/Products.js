import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from 'react-router-dom';




const dummy_items = await fetch("https://dummyjson.com/products").then(
    (res) =>
        res.json()
);





export const productSlice = createSlice({
    name: "products",
    initialState: dummy_items,
    reducers: {
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload];
        },
        editProduct: (state, action) => {
            state.products.map((product) => {
                if (product.id == action.payload.id) {

                    product.title = action.payload.title,
                        product.description = action.payload.description,
                        product.price = action.payload.price;
                }
            });
        },
        deleteProduct: (state, action) => {
            state.products = [...state.products.filter(function (product) {
                return product.id !== action.payload;
            })];
        },
    }
});
export const { deleteProduct } = productSlice.actions;
export const { addProduct } = productSlice.actions;
export const { editProduct } = productSlice.actions;
export default productSlice.reducer;