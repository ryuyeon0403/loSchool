import { Avatar, CardContent, Grid, Typography } from "@mui/material";

interface SendMessageProps {
	title: string;
	content: string;
}

const SendMessage = ({ title, content }: SendMessageProps) => {
	return (
		<Grid
			container
			justifyContent="left"
			textAlign="center"
			spacing={1}
			mb={5}
			mt={5}
		>
			<Grid item sx={{ mt: 3 }}>
				<Avatar>{title}</Avatar>
			</Grid>
			<Grid item>
				<Grid container direction="column" alignItems="flex-start">
					<Grid item>{title}</Grid>
					<Grid item>
						<CardContent
							sx={{
								width: "400px",
								// height: "250px",
								backgroundColor: "#D9D9D9",
							}}
						>
							<Typography variant="h6">{content}</Typography>
						</CardContent>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default SendMessage;
