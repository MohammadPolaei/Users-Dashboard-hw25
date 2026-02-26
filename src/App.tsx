import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import MainContent from "./components/MainContent";
import { persistor, store } from "./store/store";
import { getTheme } from "./theme/theme";

function App() {
	const [mode, setMode] = useState<"light" | "dark">("light");

	const theme = useMemo(() => getTheme(mode), [mode]);

	const toggleTheme = () => {
		setMode((prev) => (prev === "light" ? "dark" : "light"));
	};
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Button
				variant="contained"
				sx={{ position: "fixed", right: "10px", top: "10px", zIndex: "1" }}
				onClick={toggleTheme}
			>
				{mode === "light" ? "Dark Theme" : "Light Theme"}
			</Button>

			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<MainContent />
				</PersistGate>
			</Provider>
		</ThemeProvider>
	);
}

export default App;
