import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const theme = createTheme({
	//사용할 수 있는 테마 값
	//https://mui.com/material-ui/customization/default-theme/
	palette: {
		primary: {
			main: "#ff8e88",
		},
	},
	typography: {
		fontFamily: [
			"NEXON Lv2 Gothic",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});
export function ThemeCustomization({ children }: Props) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline /> {/** css reset */}
			{children}
		</ThemeProvider>
	);
}

export default ThemeCustomization;
