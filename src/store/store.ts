import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import fieldReducer from "./fieldSlice";
import gameReducer from "./gameSlice"

export const store = configureStore({
    reducer: {
        field: fieldReducer,
        game: gameReducer,
    },
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
