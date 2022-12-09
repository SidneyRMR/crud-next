interface BotaoProps {
    color?: "green" | "blue" | "red"
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    return(
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${props.color}-400 to-${props.color}-700
            text-gray px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}