import { Box, Grid, Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../../features/tasksSlice";
import { useUsers } from "../../hooks/useUsers";
import type { User } from "../../types/types";
import UserCard from "./UserCard";

function UsersList() {
	const dispatch = useDispatch();
	const { data, isError, isLoading } = useUsers();
	// filter
	const handleFilter = (userID: number) => {
		dispatch(setSelectedUser(userID));
	};
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
			<Paper sx={{ my: 3, p: 2 }}>
				<Typography variant="h6" sx={{ padding: "5px" }}>
					Users List
				</Typography>
				<Grid
					container
					spacing={3}
					sx={{ height: "320px", overflow: "scroll" }}
				>
					{data.map((user: User) => (
						<Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={user.id}>
							<UserCard user={user} onSelect={() => handleFilter(user.id)} />
						</Grid>
					))}
				</Grid>
			</Paper>
		);
	}
}

export default UsersList;
