import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogIn: true,
    isRegisterReady: false,
    token: null,
    selectRegisterType: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleIsLogIn: (state, action) => {
            state.isLogIn = action.payload
        },
        toggleIsRegisterReady: (state, action) => {
            state.isRegisterReady = action.payload;
        },
        setSelectedRegisterType: (state, action) => {
            state.selectRegisterType = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { toggleIsLogIn, toggleIsRegisterReady, setSelectedRegisterType, setToken } = authSlice.actions;

export default authSlice.reducer;
