import { Checkbox, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskStatus } from "../../features/tasksSlice";
import type { RootState } from "../../store/store";
import AddTaskModal from "./AddTaskModal";

export default function TaskList() {
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
	];
	const { tasks, selectedUserId } = useSelector(
		(state: RootState) => state.task
	);
	const tasksToShow =
		selectedUserId !== null
			? tasks.filter((t) => t.userID === Number(selectedUserId))
			: tasks;
	// rows data
	const rows = tasksToShow;
	return (
		<Box sx={{ height: 400, width: "100%", background: "white" }}>
			<div
				style={{
					height: "100px",
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{selectedUserId && <AddTaskModal />}
			</div>

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
		</Box>
	);
}
