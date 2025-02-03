export default function Cross() {
    return (
        <div className={`flex items-center justify-center w-12 h-12 bg-transparent relative"`}>
            <span className={`absolute w-1 h-12 bg-black rotate-45`}></span>
            <span className={`absolute w-12 h-1 bg-black rotate-45`}></span>
        </div>
    )
}