import { createSlice } from "@reduxjs/toolkit";
import type { InitialTasksData } from "../types/types";

const initialState: InitialTasksData = {
	tasks: [{ title: "task title", status: "pending", userID: 0 }],
	filter: "all",
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState: initialState,
	reducers: {
		addTask: (state, action) => {
			state.tasks.push(action.payload);
		},
		removeTask: (state, action) => {
			state.tasks = state.tasks.filter((task) => task.id != action.payload);
		},
		toggleTaskStatus: (state, action) => {
			state.tasks.map((task) => {
				if (task.id == action.payload) {
					task.status == "done"
						? (task.status = "pending")
						: (task.status = "done");
					return task;
				}
			});
		},
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
	},
});
export const { addTask, removeTask, toggleTaskStatus, setFilter } =
	tasksSlice.actions;
export default tasksSlice.reducer;
