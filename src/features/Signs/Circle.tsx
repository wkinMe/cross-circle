interface CircleProps {
    size: "small" | "large"
}

export default function Circle({size}: CircleProps) {
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
        <div className={`w-${sizeParam} h-${sizeParam} shrink-0 grow-0 rounded-full  border-green-400 border-solid border-4`}>
        </div>
    )
}