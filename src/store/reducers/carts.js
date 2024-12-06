import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
    name: 'carts',
    initialState: {
        data: [] // Список товаров в корзине
    },
    reducers: {
        addCart: (state, action) => {
            // Добавление товара в корзину или увеличение количества
            if (state.data.some(item => item.id === action.payload)) {
                state.data = state.data.map(item =>
                    item.id === action.payload ? { ...item, count: item.count + 1 } : item
                );
            } else {
                state.data.push({ id: action.payload, count: 1 });
            }
        },
        removeCart: (state, action) => {
            // Уменьшение количества товара или его удаление из корзины
            const item = state.data.find(item => item.id === action.payload);
            if (item) {
                if (item.count > 1) {
                    state.data = state.data.map(item =>
                        item.id === action.payload ? { ...item, count: item.count - 1 } : item
                    );
                } else {
                    state.data = state.data.filter(item => item.id !== action.payload);
                }
            }
        },
        updateCartItem: (state, action) => {
            // Обновление количества товара
            state.data = state.data.map(item =>
                item.id === action.payload.id ? { ...item, count: action.payload.count } : item
            );
        },
        clearCart: (state) => {
            // Очистка корзины
            state.data = [];
        }
    },
});

export const { addCart, removeCart, updateCartItem, clearCart } = cartsSlice.actions;
export default cartsSlice.reducer;
