import {
	Button,
	Checkbox,
	List,
	ListItem,
	Paper,
	Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../features/tasksSlice";
import type { RootState } from "../../store/store";

function TaskList() {
	const { tasks, selectedUserId } = useSelector(
		(state: RootState) => state.task
	);
	const tasksToShow =
		selectedUserId !== null
			? tasks.filter((t) => t.userID === Number(selectedUserId))
			: tasks;

	const dispatch = useDispatch();
	// handle onAddClick
	const onAddClick = (userID: number | null) => {
		userID ? dispatch(addTask(userID)) : null;
	};

	return (
		<div>
			<Paper sx={{ mt: 3, p: 2 }}>
				<Typography>Tasks:</Typography>
				<Button
					variant="contained"
					onClick={() => onAddClick(Number(selectedUserId))}
				>
					+ Add Task
				</Button>
				<List>
					{tasksToShow?.map((t) => (
						<ListItem key={t.id}>
							<Checkbox checked={t.status === "done"} onChange={() => {}} />
							{t.title}
							<Button onClick={() => {}}>Delete</Button>
						</ListItem>
					))}
				</List>
			</Paper>
		</div>
	);
}

export default TaskList;
