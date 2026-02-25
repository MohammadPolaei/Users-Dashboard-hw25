import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../features/tasksSlice";
import type { RootState } from "../../store/store";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddTaskModal() {
	// use userID

	const { selectedUserId, nextID } = useSelector(
		(state: RootState) => state.task
	);
	const dispatch = useDispatch();

	// add task

	const handleAddTask = (givenUserId: number | null) => {
		if (value === "") {
			return;
		}
		dispatch(
			addTask({
				id: nextID,
				title: value,
				status: "pending",
				userID: Number(givenUserId),
			})
		);
		handleClose();
	};
	// input value
	const [value, setValue] = React.useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Button variant="contained" onClick={handleClickOpen}>
				+ Add Task
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Add a task</DialogTitle>
				<DialogContent>
					<DialogContentText>Add task title for the user :</DialogContentText>

					<TextField
						autoFocus
						required
						margin="dense"
						id="taskTitle"
						name="title"
						label="Task Title"
						type="text"
						fullWidth
						variant="standard"
						value={value}
						onChange={handleChange}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit" onClick={() => handleAddTask(selectedUserId)}>
						Add into Tasks list
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
