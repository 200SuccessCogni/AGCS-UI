import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import {
    SimplePaletteColorOptions,
    PaletteOptions,
    TypeText,
} from "@mui/material";

interface ExtendedPaletteColorOptions extends SimplePaletteColorOptions {
    darker?: string;
}

interface ExtendedTypeText extends TypeText {
    contrastText: string;
    contrastTextLight: string;
}

interface ExtendedPaletteOptions extends PaletteOptions {
    primary: ExtendedPaletteColorOptions;
    secondary: ExtendedPaletteColorOptions;
    text: Partial<ExtendedTypeText>;
    error: ExtendedPaletteColorOptions;
    // warning: ExtendedPaletteColorOptions
    // info: ExtendedPaletteColorOptions
    // success: ExtendedPaletteColorOptions
    black: ExtendedPaletteColorOptions;
    gray?: ExtendedPaletteColorOptions;
    // And your custom palette options if you defined them, e.g:
    // brand: ExtendedPaletteColorOptions
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        black: true;
    }
}

const palette: ExtendedPaletteOptions = {
    primary: {
        main: "#095F59",
        dark: "#00301F",
        light: "#0C766F",
    },
    secondary: {
        main: "#f4f1e3",
        light: "#FFFCF1",
        dark: "#FFD681",
        darker: "#FFD681",
    },
    black: {
        main: "#121212",
        light: "#232323",
        dark: "#000",
        contrastText: "#d0e9f3",
    },
    gray: {
        main: "#777",
    },
    error: {
        main: red.A400,
    },
    text: {
        primary: "#032e2b",
        secondary: "#222",
        contrastText: "#fff",
        contrastTextLight: "#d0e9f3",
    },
};

// Create a theme instance.
const theme = createTheme({
    palette: palette,
    typography: {
        fontFamily: "Poppins",
    },
});

export default theme;
