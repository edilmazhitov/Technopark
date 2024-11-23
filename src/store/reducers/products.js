import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
    'get/getAllProducts',
    async (arg, {rejectWithValue}) => {
        try {
            const res = await axios('http://localhost:5000/products')
            if (res.status !== 200) {
                throw new Error('Ошибка при получение продуктов')
            }
            return res.data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const products = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
        filter: {
            page: 1
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.status = 'loading'
                state.error = 'null'
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload
            })
    }
})

export default products.reducer