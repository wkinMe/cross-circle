import { selectSign } from "../../store/gameSlice"
import { useAppSelector } from "../../store/store"
import { Signs } from "../Game/Signs"
import Circle from "../Signs/Circle"
import Cross from "../Signs/Cross"
import styles from "./modal.module.css"


interface ModalProps {
    isActive: boolean
    onClick: () => void
}

export default function Modal({ isActive, onClick }: ModalProps) {
    const sign = useAppSelector(selectSign);
    
    return (
        <div onClick={onClick} className={`${styles.modal} ${isActive && styles.modalActive}`}>
            <div onClick={(e) => e.stopPropagation()} className={`${styles.content} ${isActive && styles.contentActive}`}>
                {sign === Signs.CROSS && <Cross size="large" />}
                {sign === Signs.CIRCLE && <Circle size="large" />}
                <h1 className="text-4xl">Winner</h1>
            </div>
        </div>
    )
}