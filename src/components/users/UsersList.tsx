import { useUsers } from "../../hooks/useUsers";
import type { User } from "../../types/types";

function UsersList() {
	const { data, isError, isLoading } = useUsers();
	if (isError) {
		return <div>ERROR !</div>;
	} else if (isLoading) {
		return <div>Loading...</div>;
	} else {
		console.log(data);

		return (
			<div>
				{data.map((user: User) => {
					return <p>{user.name}</p>;
				})}
			</div>
		);
	}
}

export default UsersList;
