import { ReactNode } from "react"
import { TextStyled } from "./text.style"

type TextProps = {
    size?: "md" | "lg",
    color?: "blue" | "gray" | "white"
    children: ReactNode
}

export const Text = ({ children, size, color }: TextProps) => {
    return (
        <TextStyled size={size} color={color}>{children}</TextStyled>
    )
}
