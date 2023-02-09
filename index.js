const { counterActions } = require("./redux/feature/counter/counterSlice");
const { dynamicCounterActions } = require("./redux/feature/dynamicCounter/dynamicCounterSlice");
const { fetchPosts } = require("./redux/feature/posts/postSlice");
const store = require("./redux/store");




store.subscribe(async () => {
   const post = await (store.getState().posts)
    console.log(post)
    console.log('I am here')
})


store.dispatch(counterActions.increment())
store.dispatch(fetchPosts())



