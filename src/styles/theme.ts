import {createTheme} from "@mui/material/styles";
import {red} from "@mui/material/colors";
import {SimplePaletteColorOptions, PaletteOptions, TypeText} from "@mui/material";

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
	// And your custom palette options if you defined them, e.g:
	// brand: ExtendedPaletteColorOptions
}

// import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

// type SupportedLocales = keyof typeof locales;

// export default function Locales() {
//   const [locale, setLocale] = React.useState<SupportedLocales>('zhCN');

//   const theme = useTheme();

//   const themeWithLocale = React.useMemo(
//     () => createTheme(theme, locales[locale]),
//     [locale, theme],
//   );

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		black: true;
	}
}

const palette: ExtendedPaletteOptions = {
	primary: {
		main: "#082aa8",
		light: "#3954b9",
		dark: "#051d75",
	},
	secondary: {
		main: "#03b9ff",
		dark: "#0281b2",
		light: "#35c7ff",
	},
	black: {
		main: "#121212",
		light: "#232323",
		dark: "#000",
		contrastText: "#d0e9f3",
	},
	error: {
		main: red.A400,
	},
	text: {
		primary: "#121212",
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
