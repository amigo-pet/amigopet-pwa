const fontSize = {
  lg: "18px",
  md: "16px",
  sm: "14px",
};

const color = {
  blue: "#0025AA",
  white: "#FFFFFF",
  gray: "#454444",
};

const weight = {
  bold: "700",
  light: "",
  regular: "",
  medium: "500",
};

const sizes = {
  xs: 0,
  sm: 320,
  md: 576,
  lg: 992,
  xl: 1280,
  xxl: 1440,
  xxxl: 1920,
};

export type AmigoPetTheme = typeof theme;

export const theme = {
  color,
  text: {
    xs: {
      fontSize: "1rem",
    },
    sm: {
      fontSize: "1rem",
    },
    md: {
      fontSize: "1rem",
    },
    lg: {
      fontSize: "1rem",
    },
    xl: {
      fontSize: "1rem",
    },
    xxl: {
      fontSize: "1rem",
    },
    xxxl: {
      fontSize: "1rem",
    },
  },
  card: {
    sm: {
      width: "104px",
      height: "69px",
      fontSize: fontSize.md,
      color: color.gray,
      fontWeight: weight.medium,
    },
    default: {
      width: "104px",
      height: "69px",
      fontSize: fontSize.md,
      color: color.gray,
      fontWeight: weight.medium,
    },
  },
  button: {
    size: {
      sm: "100px",
    },
  },
  input: {
    transparant: {
      background: "rgba(255, 236, 236, 0.42)",
      border: "1px solid #EEF6FF",
      borderRadius: "8px",
      maxHeight: "50px",
      color: "#454444",
      filter: `drop-shadow(0px 7px 25px rgba(9, 64, 116, 0.07))
               drop-shadow(0px 4.1216px 13.04px rgba(9, 64, 116, 0.050624))
               drop-shadow(0px 2.1168px 6.12px rgba(9, 64, 116, 0.039312))
               drop-shadow(0px 0.8512px 2.68px rgba(9, 64, 116, 0.030688))
               drop-shadow(0px 0.1904px 1.16px rgba(9, 64, 116, 0.019376))`,
    },
  },
  spacing: {
    sizes,
  },
};
