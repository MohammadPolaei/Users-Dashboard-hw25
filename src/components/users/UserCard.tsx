import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Typography,
} from "@mui/material";
import type { User } from "../../types/types";

type UserCardType = {
	user: User;
	onSelect: (user: User) => void;
};

export default function UserCard({ user, onSelect }: UserCardType) {
	return (
		<Card sx={{ textAlign: "center", p: 2 }}>
			<Avatar
				src={user.avatar}
				sx={{ width: 80, height: 80, margin: "0 auto" }}
			/>

			<CardContent>
				<Typography variant="h6">{user.name}</Typography>
				<Typography variant="body2" color="text.secondary">
					{user.email}
				</Typography>

				<Box mt={2}>
					<Button variant="contained" onClick={() => onSelect(user)}>
						View Tasks
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
}
