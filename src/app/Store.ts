import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice"; // Adjust the path as needed

export const Store = configureStore({
    reducer: {
        counter: counterReducer, // Add your slice reducer here
    },
});

// Optionally export the RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
