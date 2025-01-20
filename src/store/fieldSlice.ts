import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getWinDirection} from "../features/Game/getWinner";
import { Signs } from "../features/Game/Signs";
import { Directions } from "../features/Game/Directions";


const initialState = {
    field: new Array<Signs[]>(3).fill(new Array(3).fill(Signs.NOTHING)),
    sign: Signs.CROSS,
    winnerSign: Signs.NOTHING,
    winnerDirection: Directions.NOTHING,
}

const fieldSlice = createSlice({
    name: "field",
    selectors: {
        selectField: (state => state.field),
        selectSign: (state => state.sign),
        selectWinner: (state => state.winnerSign)
    },
    reducers: {
        move(state, action: PayloadAction<Record<"x" | "y", number>>) {
            const {x, y} = action.payload;
            state.field[x][y] = state.sign;
            let winnerDirection = getWinDirection(state.field, Signs.CROSS) || getWinDirection(state.field, Signs.CIRCLE)
            console.log(winnerDirection)
            if (winnerDirection && winnerDirection !== Directions.NOTHING) {
                state.winnerSign = state.sign;
                state.winnerDirection = winnerDirection;
                return;
            }
            
            state.sign = state.sign == Signs.CIRCLE ? Signs.CROSS : Signs.CIRCLE;
        }

    },
    initialState
})

export default fieldSlice.reducer;
export const { move } = fieldSlice.actions; 
export const { selectField, selectSign, selectWinner} = fieldSlice.selectors;