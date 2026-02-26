import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import MainContent from "./components/MainContent";
import { persistor, store } from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<MainContent />
			</PersistGate>
		</Provider>
	);
}

export default App;
