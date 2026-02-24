export type User = {
	name: string;
	email: string;
	avatar: string;
	id: number;
};

export type Tasks = {
	id?: number;
	title: string;
	status: "pending" | "done";
	userID: number;
};

export type InitialTasksData = {
	tasks: Tasks[];
	filter: "all" | "pending" | "done";
};

export type TaskListType = {
	tasks: Tasks[];
	onToggle?: (id?: number) => void;
	onDelete?: (id?: number) => void;
	onAddClick?: () => void;
};
