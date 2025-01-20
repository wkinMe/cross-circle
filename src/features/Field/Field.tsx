import { useAppDispatch, useAppSelector } from "../../store/store";
import { move } from "../../store/fieldSlice";

import FieldCell from "../FieldCell/FieldCell";
import { Signs } from "../Game/Signs";
import { Directions } from "../Game/Directions";
import { checkWinner, selectSign } from "../../store/gameSlice";

interface FieldProps {
    field: Signs[][]
}

export default function Field({ field }: FieldProps) {
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
        if (winDirection !== Directions.NOTHING) {
            return;
        }

        dispatch(move({ x: ind, y: jnd, sign }));
    }

    return (
        <div className='w-[500px] h-[500px] bg-slate-400 m-auto grid items-center rounded-xl relative'>
            <span className={winDirection !== Directions.NOTHING ? winLineStyle : "hidden"}></span>
            <div className='grid grid-cols-3 gap-2 justify-items-center '>
                {field.map((i, ind) => {
                    return (
                        <>
                            {i.map((_, jnd) => {
                                return (
                                    <FieldCell
                                        key={ind + jnd}
                                        sign={field[ind][jnd]}
                                        onClick={() => handleClick(ind, jnd)}
                                    />
                                )
                            })}
                        </>
                    )
                })}
            </div>
        </div>
    )
}