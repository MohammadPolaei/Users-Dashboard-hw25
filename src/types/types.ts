export type User = {
	name: string;
	email: string;
	avatar: string;
	id: number;
};

export type Tasks = {
	id: number;
	title: string;
	status: "pending" | "done";
	userID: number;
};

export type InitialTasksData = {
	tasks: Tasks[];
	selectedUserId: number | null;
};
export type InitialTasksToShowData = {
	tasksToShow: Tasks[];
};
