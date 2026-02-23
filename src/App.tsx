import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import UsersList from "./components/users/UsersList";

function App() {
	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<UsersList />
			</QueryClientProvider>
		</>
	);
}

export default App;
