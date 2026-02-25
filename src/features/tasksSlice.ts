import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { InitialTasksData } from "../types/types";

const initialState: InitialTasksData = {
	tasks: [{ id: 1, title: "task title", status: "pending", userID: 1 }],
	selectedUserId: null,
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.tasks.push(action.payload);
		},
		removeTask: (state, action) => {
			state.tasks = state.tasks.filter((task) => task.id != action.payload);
		},
		toggleTaskStatus: (state, action) => {
			const task = state.tasks.find((t) => t.id === action.payload);

			if (task) {
				task.status = task.status === "done" ? "pending" : "done";
			}
		},
		setSelectedUser(state, action: PayloadAction<number | null>) {
			state.selectedUserId = action.payload;
		},
	},
});
export const { addTask, removeTask, toggleTaskStatus, setSelectedUser } =
	tasksSlice.actions;
export default tasksSlice.reducer;
