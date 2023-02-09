const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const counterReducer = require('./feature/counter/counterSlice')
const dynamicCounterReducer = require('./feature/dynamicCounter/dynamicCounterSlice')
const postsReducer = require('./feature/posts/postSlice')
const logger = require('redux-logger')

const myLogger = logger.createLogger()




const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer,
        posts: postsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

module.exports = store