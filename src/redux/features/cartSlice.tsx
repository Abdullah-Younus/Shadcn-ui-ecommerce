import { Product } from "@/utils/ProductTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
    items: Array<Product> | any;
    totalAmount: number;
    totalQuantity: number;
}

const initialState: CartState = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state: CartState, action: PayloadAction<{ product: Product; quantity: number }>) {
            const newItem = action.payload.product;
            const existingItem = state.items.find((item:any) => item._id === newItem._id);
            state.totalQuantity = state.totalQuantity + action.payload.quantity;
            state.totalAmount = state.totalAmount + action.payload.quantity * action.payload.product.price;

            if (!existingItem) {
                const totalPrice = newItem.price * action.payload.quantity;
                state.items.push({
                    ...newItem,
                    quantity: action.payload.quantity,
                    totalPrice,
                });
            } else {
                const totalPrice = existingItem.totalPrice + existingItem.price * action.payload.quantity;
                existingItem.quantity += action.payload.quantity;
                existingItem.totalPrice = totalPrice;

            }
        },
        removeProduct(state: CartState, action: PayloadAction<string>) {
            const productId = action.payload;
            state.items = state.items.filter((eachItem:any) => eachItem._id !== productId);
            state.totalQuantity = state.items.reduce((total:any, item:any) => total + item.quantity, 0);
            state.totalAmount = state.items.reduce((total:any, item:any) => total + item.totalPrice, 0);
        },
        decreamentCartProduct(state: CartState, action: PayloadAction<string>) {
            const Product = action.payload;
            const existingItem = state.items.find((item:any) => item._id === Product);

            state.totalQuantity--;

            state.totalAmount = state.totalAmount - existingItem?.price!;

            if(existingItem?.quantity === 1){
                state.items = state.items.filter((item:any)=>item._id !== Product)
            }else {
                existingItem!.quantity--;
                existingItem!.totalPrice = existingItem!.totalPrice - existingItem?.price!;
            }
        }
    }
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
