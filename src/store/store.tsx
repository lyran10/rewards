import { configureStore } from "@reduxjs/toolkit";
import { loginState, dataState, apiState } from "./reducer";

export const store = configureStore({
    reducer : {
        data : dataState.reducer,
        loginData : loginState.reducer,
        apiData : apiState.reducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;