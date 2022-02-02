import { createSlice } from '@reduxjs/toolkit';

export const workSlice = createSlice({
    name: 'works',
    initialState: { value: []},
    reducers: {
        addWork: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addWork } = workSlice.actions;

export default workSlice.reducer;