import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addOrderToServer = createAsyncThunk(
    "orders/addOrderToServer",
    async (order, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:5000/orders", order);
            return response.data; // Сервер возвращает добавленный заказ
        } catch (error) {
            return rejectWithValue(error.response?.data || "Ошибка при добавлении заказа");
        }
    }
);

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearOrders: (state) => {
            state.data = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addOrderToServer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addOrderToServer.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload);
            })
            .addCase(addOrderToServer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Ошибка при добавлении заказа";
            });
    },
});

export const { clearOrders } = ordersSlice.actions; 
export default ordersSlice.reducer;
