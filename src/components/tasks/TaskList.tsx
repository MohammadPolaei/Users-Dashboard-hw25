import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, toggleTaskStatus } from "../../features/tasksSlice";
import { useUsers } from "../../hooks/useUsers";
import type { RootState } from "../../store/store";
import type { User } from "../../types/types";
import AddTaskModal from "./AddTaskModal";

export default function TaskList() {
	const { tasks, selectedUserId } = useSelector(
		(state: RootState) => state.task
	);
	const tasksToShow =
		selectedUserId !== null
			? tasks.filter((t) => t.userID === Number(selectedUserId))
			: tasks;
	// user data
	const { data } = useUsers();
	const userToShow = data?.filter(
		(user: User) => user.id == Number(selectedUserId)
	);

	// global state
	const dispatch = useDispatch();
	const columns: GridColDef<(typeof rows)[number]>[] = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "title",
			headerName: "Task title",
			width: 500,
			editable: false,
		},
		{
			field: "status",
			headerName: "Status",
			width: 150,
			renderCell: (params) => {
				const isDone = params.row.status === "done";

				return (
					<Stack direction="row" alignItems="center" spacing={1}>
						<Checkbox
							checked={isDone}
							onChange={() => dispatch(toggleTaskStatus(params.row.id))}
						/>
						<Typography variant="body2">
							{isDone ? "Done ✔" : "Pending . . ."}
						</Typography>
					</Stack>
				);
			},
		},
		{
			field: "remove",
			headerName: "Remove Task",
			width: 150,
			renderCell: (params) => {
				return (
					<Button onClick={() => dispatch(removeTask(params.row.id))}>
						Remove task
					</Button>
				);
			},
		},
	];
	// rows data
	const rows = tasksToShow;
	return (
		<Paper
			sx={{
				height: 400,
				my: 3,
				p: 2,
				pb: 20,
			}}
		>
			<Box
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					paddingBottom: "10px",
				}}
			>
				<Typography variant="h6" sx={{ padding: "5px" }}>
					Tasks List
					{selectedUserId !== null && (
						<span style={{ color: "#8888" }}> : {userToShow[0].name}</span>
					)}
				</Typography>
				{selectedUserId && <AddTaskModal />}
			</Box>

			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</Paper>
	);
}
