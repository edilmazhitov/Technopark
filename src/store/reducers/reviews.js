import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

// Получение всех отзывов
export const getAllReviews = createAsyncThunk(
    'get/getAllReviews',
    async (_, {rejectWithValue}) => {
        try {
            const res = await axios.get('http://localhost:5000/reviews');

            if (res.status !== 200) {
                throw new Error('Ошибка при получении');
            }
            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// Добавление нового отзыва
export const addAllReviews = createAsyncThunk(
    'post/addAllReviews',
    async (arg, {rejectWithValue}) => {
        try {
            const res = await axios.post('http://localhost:5000/reviews', arg);

            if (res.status !== 201) {
                throw new Error('Ошибка при создании отзыва');
            }

            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const reviews = createSlice({
    name: 'reviews',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // Получение всех отзывов
            .addCase(getAllReviews.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getAllReviews.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(getAllReviews.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            })
            // Добавление нового отзыва
            .addCase(addAllReviews.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(addAllReviews.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(addAllReviews.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = [...state.data, action.payload]; // Добавление нового отзыва
            });
    },
});

export default reviews.reducer;
