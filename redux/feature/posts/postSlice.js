const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require('node-fetch')

const initialState = {
    loading: false,
    posts: [],
    error: ''
}
const fetchPosts = createAsyncThunk(
    'posts/fetchPosts', async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const posts = await res.json()
        return posts




    }

)


const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true,
                state.error = ' '

        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false,
                state.error = ' '
            state.posts = action.payload

        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false,
                state.posts = []
            state.error = action.error?.message


        })


    }


})

module.exports = postSlice.reducer
module.exports.fetchPosts = fetchPosts



