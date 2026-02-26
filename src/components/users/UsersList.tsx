import { Box, Grid, Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../../features/tasksSlice";
import { useUsers } from "../../hooks/useUsers";
import type { User } from "../../types/types";
import UserCard from "./UserCard";

function UsersList({ searchValue }: { searchValue: string }) {
	const dispatch = useDispatch();
	const { data, isError, isLoading } = useUsers();
	// filter tasks by user
	const handleFilter = (userID: number) => {
		dispatch(setSelectedUser(userID));
	};
	// filter user by search
	const filteredUsers = data?.filter((user: User) =>
		user.name.toLowerCase().includes(searchValue.toLowerCase())
	);
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
					{filteredUsers == null ? (
						data.map((user: User) => (
							<Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={user.id}>
								<UserCard user={user} onSelect={() => handleFilter(user.id)} />
							</Grid>
						))
					) : filteredUsers.length < 1 ? (
						<div
							style={{
								width: "100%",
								height: "100%",
								textAlign: "center",
								color: "red",
							}}
						>
							No User Found by "{searchValue}" !
						</div>
					) : (
						filteredUsers.map((user: User) => (
							<Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={user.id}>
								<UserCard user={user} onSelect={() => handleFilter(user.id)} />
							</Grid>
						))
					)}
				</Grid>
			</Paper>
		);
	}
}

export default UsersList;
