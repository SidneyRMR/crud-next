interface BotaoProps {
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    return(
        <button onClick={props.onClick} className={`
            text-gray px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}