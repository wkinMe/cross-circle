import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Directions } from "../features/Game/Directions";
import { Signs } from "../features/Game/Signs";
import {getWinDirection} from "../features/Game/getWinDirection";

interface CheckWinnerActionPayload {
    field: Signs[][]
}

const initialState = {
    sign: Signs.CROSS,
    winnerDirection: Directions.NOTHING
}

const gameSlice = createSlice({
    name: "game",
    selectors: {
        selectSign: (state => state.sign),
        selectWinDirection: (state => state.winnerDirection)
    },
    reducers: {
        checkWinner: (state, action: PayloadAction<CheckWinnerActionPayload>) => {
            const {field} = action.payload;
            let winnerDirection = getWinDirection(field, Signs.CROSS) || getWinDirection(field, Signs.CIRCLE)
            if (winnerDirection && winnerDirection !== Directions.NOTHING) {
                state.winnerDirection = winnerDirection;
                return;
            }
            
            state.sign = state.sign === Signs.CIRCLE ? Signs.CROSS : Signs.CIRCLE;
        }

    },
    initialState
})

export default gameSlice.reducer;
export const {checkWinner} = gameSlice.actions;
export const {selectSign, selectWinDirection} = gameSlice.selectors;