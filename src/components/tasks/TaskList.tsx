import {
	Button,
	Checkbox,
	List,
	ListItem,
	Paper,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import AddTaskModal from "./addTaskModal";

function TaskList() {
	const { tasks, selectedUserId } = useSelector(
		(state: RootState) => state.task
	);
	const tasksToShow =
		selectedUserId !== null
			? tasks.filter((t) => t.userID === Number(selectedUserId))
			: tasks;

	// handle onAddClick
	const onAddClick = () => {
		setModalOpen(!modalOpen);
	};

	// handle modal open

	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div>
			<Paper sx={{ mt: 3, p: 2 }}>
				<Typography>Tasks:</Typography>
				<Button variant="contained" onClick={() => onAddClick}>
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
				<AddTaskModal />
			</Paper>
		</div>
	);
}

export default TaskList;
