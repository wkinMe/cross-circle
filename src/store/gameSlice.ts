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
            let winnerDirection = Directions.NOTHING;

            const isCrossWin = getWinDirection(field, Signs.CROSS);
            const isCircleWin = getWinDirection(field, Signs.CIRCLE);

            if (isCrossWin !== Directions.NOTHING) {
                winnerDirection = isCrossWin;
            } else if  (isCircleWin !== Directions.NOTHING) {
                winnerDirection = isCircleWin;
            }
            
            console.log(isCircleWin, winnerDirection);
            
            if (winnerDirection && winnerDirection !== Directions.NOTHING) {
                
                state.winnerDirection = winnerDirection;
            }
        },
        changeSign: (state) => {
            state.sign = state.sign === Signs.CIRCLE ? Signs.CROSS : Signs.CIRCLE;
        }

    },
    initialState
})

export default gameSlice.reducer;
export const {checkWinner, changeSign} = gameSlice.actions;
export const {selectSign, selectWinDirection} = gameSlice.selectors;