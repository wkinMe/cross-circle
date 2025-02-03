
import styles from "./modal.module.css"


interface ModalProps {
    isActive: boolean
    onClick: () => void
    children: React.ReactNode
}

export default function Modal({ isActive, onClick, children }: ModalProps) {
    return (
        <div onClick={onClick} className={`${styles.modal} ${isActive && styles.modalActive}`}>
            <div onClick={(e) => e.stopPropagation()} className={`${styles.content} ${isActive && styles.contentActive}`}>
                {children}
            </div>
        </div>
    )
}