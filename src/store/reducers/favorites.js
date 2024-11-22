import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        data: [],
    },
    reducers: {
        toggleFavorites: (state, action) => {
            if (state.data.includes(action.payload)) {
                state.data = state.data.filter((id) => id !== action.payload);
            } else {
                state.data = [...state.data, action.payload]
            }
        },
    },
});

export const { toggleFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
