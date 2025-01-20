import { useAppDispatch, useAppSelector } from "../../store/store";
import { move, selectWinner } from "../../store/fieldSlice";

import FieldCell from "../FieldCell/FieldCell";
import { Signs } from "../Game/Signs";
import { Directions } from "../Game/Directions";

interface FieldProps {
    field: Signs[][]
}

export default function Field({ field }: FieldProps) {
    const dispatch = useAppDispatch();
    const winDirection = useAppSelector(state => state.field.winnerDirection);

    let winLineStyle = "absolute bg-black rounded-md h-2 w-[90%] left-[50%] translate-x-[-50%]";
    switch (winDirection) {
        case Directions.UP_HORIZONT:
            winLineStyle += " top-[17%] inline"
            break;
        case Directions.CENTER_HORIZONT:
            winLineStyle += " top-[49%] inline"
            break;
        case Directions.DOWN_HORIZONT:
            winLineStyle += " top-[81%] inline"
            break;
        case Directions.LEFT_VERTICAL:
            winLineStyle += " left-[16%] inline rotate-90 w-[88%]"
            break;
        case Directions.CENTER_VERTICAL:
            winLineStyle += " left-[50%] inline rotate-90 w-[88%]"
            break;
        case Directions.RIGHT_VERTICAL:
            winLineStyle += " left-[84%] inline rotate-90 w-[88%]"
            break;
        case Directions.MAIN_DIAG:
            winLineStyle += " top-[49%] inline rotate-45 w-[120%]"
            break;
        case Directions.SEC_DIAG:
            winLineStyle += " left-[52%] inline -rotate-45 w-[120%]"
            break;
    }

    const handleClick = (ind: number, jnd: number) => {
        if (winDirection !== Directions.NOTHING) {
            return;
        }
        dispatch(move({ x: ind, y: jnd }));
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