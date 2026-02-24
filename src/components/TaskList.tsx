import {
	Button,
	Checkbox,
	List,
	ListItem,
	Paper,
	Typography,
} from "@mui/material";
import type { TaskListType } from "../types/types";

function TaskList({ tasks, onToggle, onDelete, onAddClick }: TaskListType) {
	return (
		<div>
			<Paper sx={{ mt: 3, p: 2 }}>
				<Typography>Tasks:</Typography>
				<Button variant="contained" onClick={onAddClick}>
					+ Add Task
				</Button>
				<List>
					{tasks?.map((t) => (
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
