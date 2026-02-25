import { Typography } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardLayout from "../layout/DashboardLayout";
import TaskList from "./tasks/TaskList";
import UsersList from "./users/UsersList";
import UserSearch from "./UserSearch";

function MainContent() {
	const queryClient = new QueryClient();

	return (
		<div style={{ backgroundColor: "#08f1" }}>
			<DashboardLayout>
				<QueryClientProvider client={queryClient}>
					<UserSearch
						value="Search"
						onChange={() => console.log("change in searchbar")}
					/>
					<Typography variant="h6">Users List :</Typography>
					<UsersList />
					<Typography variant="h6">Tasks :</Typography>
					<TaskList />
				</QueryClientProvider>
			</DashboardLayout>
		</div>
	);
}

export default MainContent;
