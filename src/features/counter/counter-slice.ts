import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 

// Define the interface for the slice state
interface CounterState { 
    value: number;
}

// Initialize the state
const initialState: CounterState = {
    value: 0,
};

// Create the slice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            // It's safe to directly mutate state because of Immer
            state.value++;
        }
    },
});

// Export the actions for use in components or middleware
export const { incremented } = counterSlice.actions;

// Export the reducer to include in the Redux store
export default counterSlice.reducer;
