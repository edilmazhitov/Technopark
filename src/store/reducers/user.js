import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
    'post/registerUser',
    async (arg, { rejectWithValue }) => {
        try {
            const res = await axios.post('http://localhost:5000/register', arg);

            if (res.status !== 201) {
                throw new Error('Ошибка при регистрации');
            }

            return res.data.user;
        } catch (err) {
            console.error("Registration error:", err);
            return rejectWithValue(err.response ? err.response.data : err.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'post/loginUser',
    async (arg, { rejectWithValue }) => {
        try {
            const res = await axios.post('http://localhost:5000/login', arg);

            if (res.status !== 200) {
                throw new Error('Ошибка при входа');
            }

            return res.data.user;
        } catch (err) {
            console.error("Registration error:", err);
            return rejectWithValue(err.response ? err.response.data : err.message);
        }
    }
);

const user = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: 'idle',
        error: null
    },
    reducers: {
        logOut : (state,action) => {
            state.user = null
            state.status = 'idle'
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'success';
                state.user = action.payload;
            })
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'success';
                state.user = action.payload;
            });
    }
});
export const {logOut} = user.actions
export default user.reducer;
