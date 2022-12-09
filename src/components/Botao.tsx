interface BotaoProps {
    color?: "green" | "blue" | "gray"
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.color ?? 'gray'
    return(
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-gray px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}