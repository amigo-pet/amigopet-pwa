const fontSize = {
    lg: "18px",
    md: "16px",
    sm: "14px"
}

const color = {
    blue: "#0025AA",
    white: "#FFFFFF",
    gray: "#454444",
}

const weight = {
    bold: "700",
    light: "",
    regular: "",
    medium: "500"
}


export const theme = {
    color,
    text: {
        title: {
            fontSize: fontSize.lg,
            fontWeight: weight.medium
        },
        subTitle: {
            fontSize: fontSize.md,
            color: color.blue
        },
        label: {
            fontSize: fontSize.md,
            color: color.blue,
        },
        default: {
            fontSize: fontSize.md,
            color: color.blue,
        }
    },
    card: {
        sm: {
            width: "104px",
            height: "69px",
            fontSize: fontSize.md,
            color: color.gray,
            fontWeight: weight.medium
        }
    },
    button: {
        size: {
            sm: "100px"
        },
    },
}