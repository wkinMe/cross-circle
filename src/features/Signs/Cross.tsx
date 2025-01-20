interface CrossProps {
    size: "small" | "large"
}

export default function Cross({size}: CrossProps) {
    let sizeParam = 0;
    switch (size) {
        case "small":
            sizeParam = 12
            break;
        case "large":
            sizeParam = 36
            break;
    }

    return (
        <div className={`flex items-center justify-center w-${sizeParam} h-${sizeParam} bg-transparent relative"`}>
            <span className={`absolute w-1 h-${sizeParam} bg-black rotate-45`}></span>
            <span className={`absolute w-${sizeParam} h-1 bg-black rotate-45`}></span>
        </div>
    )
}