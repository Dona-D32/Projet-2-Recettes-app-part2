import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../store/favoritesSlice";

export default configureStore({
    reducer: {
        favorites: favoritesReducer,
    },
});