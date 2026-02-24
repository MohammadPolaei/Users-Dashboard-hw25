import { Box, Grid, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../features/tasksSlice";
import { useUsers } from "../../hooks/useUsers";
import type { InitialTasksData, User } from "../../types/types";
import UserCard from "./UserCard";

function UsersList() {
	const dispatch = useDispatch();
	const tasks = useSelector((state: InitialTasksData) => state.tasks);
	const { data, isError, isLoading } = useUsers();
	if (isError) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyItems: "center",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						width: "50%",
						height: 200,
						borderRadius: 5,
						p: 10,
						backgroundColor: "#a002",
						textAlign: "center",
						fontSize: 30,
					}}
				>
					ERROR occurred !
				</Box>
			</div>
		);
	} else if (isLoading) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyItems: "center",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						width: "50%",
						height: 200,
						borderRadius: 5,
						p: 10,
						backgroundColor: "#aaa2",
						textAlign: "center",
						fontSize: 30,
					}}
				>
					Loading . . .
				</Box>
			</div>
		);
	} else {
		return (
			<Paper sx={{ mt: 3, p: 2, height: "320px", overflow: "scroll" }}>
				<Grid container spacing={3}>
					{data.map((user: User) => (
						<Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={user.id}>
							<UserCard
								user={user}
								onSelect={() => dispatch(setFilter(user.id))}
							/>
						</Grid>
					))}
				</Grid>
			</Paper>
		);
	}
}

export default UsersList;
