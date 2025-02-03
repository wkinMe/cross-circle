import Cross from "../Signs/Cross"
import Circle from "../Signs/Circle"
import { Signs } from "../Game/Signs"

interface FieldCellProps {
    sign: string
    onClick: () => void
}

export default function FieldCell({ sign, onClick }: FieldCellProps) {
    return (
        <div className="w-[150px] h-[150px] bg-slate-200 rounded-3xl grid justify-items-center items-center" onClick={onClick}>
            {sign === Signs.CROSS && <Cross/>}
            {sign == Signs.CIRCLE && <Circle/>}
        </div>
    )
}