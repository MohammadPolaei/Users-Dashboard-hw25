import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import DashboardLayout from "../layout/DashboardLayout";
import { store } from "../store/store";
import UsersList from "./users/UsersList";
import UserSearch from "./UserSearch";

function MainContent() {
	const queryClient = new QueryClient();

	return (
		<div>
			<Provider store={store}>
				<DashboardLayout>
					<QueryClientProvider client={queryClient}>
						<UserSearch
							value="Search"
							onChange={() => console.log("change in searchbar")}
						/>
						<UsersList />
					</QueryClientProvider>
				</DashboardLayout>
			</Provider>
		</div>
	);
}

export default MainContent;
