import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Signs } from "../features/Game/Signs";

interface moveActionPaload {
    x: number
    y: number
    sign: Signs
}

const initialState = {
    field: new Array<Signs[]>(3).fill(new Array(3).fill(Signs.NOTHING)),
}

const fieldSlice = createSlice({
    name: "field",
    selectors: {
        selectField: (state => state.field),
    },
    reducers: {
        move(state, action: PayloadAction<moveActionPaload>) {
            const {x, y} = action.payload;
            state.field[x][y] = action.payload.sign;
        }
    },
    initialState
})

export default fieldSlice.reducer;
export const { move } = fieldSlice.actions; 
export const { selectField } = fieldSlice.selectors;