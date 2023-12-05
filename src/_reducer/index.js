import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterActions";

const store = configureStore({
    reducer: {counter: counterReducer}
});

export default store;