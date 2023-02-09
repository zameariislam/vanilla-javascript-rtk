

const { createSlice } = require("@reduxjs/toolkit");
const { counterActions } = require("../counter/counterSlice");


const initialState = {
    count: 0
}


const dynamicCounterSlice = createSlice({
    name: 'dynamicCounter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count = state.count + action.payload

        },
        derement: (state, action) => {
            state.count = state.count - action.payload

        },
    },
    extraReducers: (builder) => builder.addCase(counterActions.increment, (state, action) => {
        state.count++

    })



})

module.exports = dynamicCounterSlice.reducer

module.exports.dynamicCounterActions = dynamicCounterSlice.actions

