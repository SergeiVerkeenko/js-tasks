import { createSlice } from '@reduxjs/toolkit'
const counterClice = createSlice({

    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = counterClice.actions
export default counterClice.reducer