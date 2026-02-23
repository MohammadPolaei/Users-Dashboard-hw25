import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../store/store";
import UsersList from "./users/UsersList";

function MainContent() {
	const queryClient = new QueryClient();

	return (
		<div>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<UsersList />
				</QueryClientProvider>
			</Provider>
		</div>
	);
}

export default MainContent;
