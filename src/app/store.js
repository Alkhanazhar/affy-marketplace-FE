import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer, // The key `auth` can be accessed in the state as `state.auth`
    },
});

export default store;