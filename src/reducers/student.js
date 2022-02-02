import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({
    name: 'students',
    initialState: { value: []},
    reducers: {
        addStudent: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addStudent } = studentSlice.actions;

export default studentSlice.reducer;