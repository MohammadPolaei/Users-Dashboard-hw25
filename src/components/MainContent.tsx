import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../layout/DashboardLayout";
import type { InitialTasksData } from "../types/types";
import TaskList from "./TaskList";
import UsersList from "./users/UsersList";
import UserSearch from "./UserSearch";

function MainContent() {
	const queryClient = new QueryClient();
	const dispatch = useDispatch();
	const tasks = useSelector((state: InitialTasksData) => state.tasks);

	return (
		<div>
			<DashboardLayout>
				<QueryClientProvider client={queryClient}>
					<UserSearch
						value="Search"
						onChange={() => console.log("change in searchbar")}
					/>

					<UsersList />
					<TaskList tasks={tasks} />
				</QueryClientProvider>
			</DashboardLayout>
		</div>
	);
}

export default MainContent;
