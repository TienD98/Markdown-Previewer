import { configureStore } from "@reduxjs/toolkit";
import markdownReducer from "../features/markdownSlice"

const store = configureStore({
    reducer: {
        markdown: markdownReducer,
    }
}) 

export default store;