import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllReviews = createAsyncThunk(
    'get/getAllReviews',
    async (arg,{rejectWithValue}) => {
        try {
            const res = await axios('http://localhost:5000/reviews')

            if (res.status !== '200') {
                throw new Error('Ошибка при получении')
            }
            return res.data

        } catch (err) {
            return rejectWithValue(err.message)
        }

    }
)


const reviews = createSlice({
    name: 'reviews',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllReviews.pending, (state,action) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getAllReviews.rejected, (state,action) => {
                state.status = 'error'
                state.error = action.payload
            })
            .addCase(getAllReviews.fulfilled, (state,action) => {
                state.status = 'success'
                state.data = action.payload
            })
    }
})

export default reviews.reducer