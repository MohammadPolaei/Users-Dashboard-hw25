import { Paper, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export default function UserSearch({
	value,
	onChange,
}: {
	value: string;
	onChange: () => void;
}) {
	return (
		<Paper sx={{ p: 2, mb: 3 }}>
			<TextField
				fullWidth
				placeholder="Search users..."
				value={value}
				onChange={onChange}
				InputProps={{
					startAdornment: <InputAdornment position="start">🔎</InputAdornment>,
				}}
			/>
		</Paper>
	);
}
