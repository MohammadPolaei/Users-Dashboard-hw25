import {
	AppBar,
	Box,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<AppBar position="static" elevation={1}>
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="h6">User & Task Dashboard</Typography>

					<Box>
						<IconButton color="inherit"></IconButton>
					</Box>
				</Toolbar>
			</AppBar>

			<Container sx={{ mt: 4 }}>{children}</Container>
		</>
	);
}
