import FieldCell from "../FieldCell/FieldCell";
import { Signs } from "../Game/Signs";
import { Directions } from "../Game/Directions";
import { useField } from "../../hooks/useField";

interface FieldProps {
    field: Signs[][]
}

export default function Field({ field }: FieldProps) {
    const {winDirection, winLineStyle, handleClick} = useField({field});
    
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