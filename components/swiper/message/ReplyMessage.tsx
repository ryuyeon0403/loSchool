import { Avatar, CardContent, Grid, Typography } from "@mui/material";

interface ReplyMessageProps {
	title: string;
	content: string;
}

const ReplyMessage = ({ title, content }: ReplyMessageProps) => {
	return (
		<Grid
			container
			justifyContent="left"
			textAlign="center"
			spacing={1}
			mb={5}
			mt={5}
		>
			<Grid item>
				<Grid container direction="column" alignItems="flex-end">
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
			<Grid item sx={{ mt: 1 }}>
				<Avatar>{title}</Avatar>
			</Grid>
		</Grid>
	);
};

export default ReplyMessage;
