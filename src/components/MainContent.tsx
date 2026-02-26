import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import TaskList from "./tasks/TaskList";
import UsersList from "./users/UsersList";
import UserSearch from "./UserSearch";

function MainContent() {
	const [searchValue, setSearchValue] = useState<string>("");
	const queryClient = new QueryClient();

	return (
		<div style={{ backgroundColor: "#08f1", paddingBottom: "150px" }}>
			<DashboardLayout>
				<QueryClientProvider client={queryClient}>
					<UserSearch
						value={searchValue}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setSearchValue(e.target.value)
						}
					/>
					<UsersList searchValue={searchValue} />
					<TaskList />
				</QueryClientProvider>
			</DashboardLayout>
		</div>
	);
}

export default MainContent;
