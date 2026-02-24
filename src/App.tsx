import { Provider } from "react-redux";
import "./App.css";
import MainContent from "./components/MainContent";
import { store } from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<MainContent />
		</Provider>
	);
}

export default App;
