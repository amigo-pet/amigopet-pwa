import { ReactNode } from "react"
import { TextStyled } from "./text.style"

type TextProps = {
    type?: "title" | "subTitle",
    color?: "blue" | "gray" | "white"
    children: ReactNode
}

export const Text = ({ children, type, color }: TextProps) => {
    return (
        <TextStyled type={type} color={color}>{children}</TextStyled>
    )
}