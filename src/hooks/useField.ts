import { Directions } from "../features/Game/Directions";
import { getWinDirection } from "../features/Game/getWinDirection";
import { Signs } from "../features/Game/Signs";
import { move } from "../store/fieldSlice";
import { changeSign, selectSign } from "../store/gameSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

export const useField = ({field}: {field: Signs[][]}) => {
    const dispatch = useAppDispatch();
    const winDirection = useAppSelector(state => state.game.winnerDirection);
    const sign = useAppSelector(selectSign);
    
    let winLineStyle = "absolute bg-black rounded-md h-2";
    switch (winDirection) {
        case Directions.UP_HORIZONT:
            winLineStyle += " left-[50%] top-[17%] inline translate-x-[-50%] w-[90%]"
            break;
        case Directions.CENTER_HORIZONT:
            winLineStyle += " left-[50%] top-[49%] inline translate-x-[-50%] w-[90%]"
            break;
        case Directions.DOWN_HORIZONT:
            winLineStyle += " left-[50%] top-[81%] inline translate-x-[-50%] w-[90%]"
            break;
        case Directions.LEFT_VERTICAL:
            winLineStyle += " left-[-28%] inline rotate-90 w-[88%]"
            break;
        case Directions.CENTER_VERTICAL:
            winLineStyle += " left-[6%] inline rotate-90 w-[88%]"
            break;
        case Directions.RIGHT_VERTICAL:
            winLineStyle += " left-[40%] inline rotate-90 w-[88%]"
            break;
        case Directions.MAIN_DIAG:
            winLineStyle += " left-[-10%] top-[49%] inline rotate-45 w-[120%]"
            break;
        case Directions.SEC_DIAG:
            winLineStyle += " left-[-10%] inline -rotate-45 w-[120%]"
            break;
    }
    
    const handleClick = (ind: number, jnd: number) => {
        if (winDirection !== Directions.NOTHING || field[ind][jnd] !== Signs.NOTHING) {
            return;
        }
        dispatch(move({ x: ind, y: jnd, sign }));

        const fieldCopy = field.map(function(arr) {
            return arr.slice();
        });
        fieldCopy[ind][jnd] = sign;

        const isCircleWin = getWinDirection(fieldCopy, Signs.CIRCLE);
        const isCrossWin = getWinDirection(fieldCopy, Signs.CROSS);
        
        if (isCrossWin !== Directions.NOTHING || isCircleWin!== Directions.NOTHING) {
            return;
        }
        dispatch((changeSign()));
    }

    return {winLineStyle, handleClick, winDirection, sign}
}