const bgBlue = {
	backgroundColor: "blue",
};

const bgRed = {
	backgroundColor: "red",
};

const userLayoutMax = {
	position: "relative",
	maxWidth: "1080px",
	margin: "0 auto",
};

const globalShadow = {
	boxShadow: "0px 0px 20px 0px rgb(33 33 33 / 4%) !important",
};

const globalShadowNone = {
	boxShadow: "none",
};

const baseMargin = {
	margin: "24px",
};

const dialogMaxWidth = {
	maxWidth: "316px",
};

const bgHover = {
	"&:hover": {
		backgroundColor: "#fafafa !important",
		transition: "0.3s !important",
		cursor: "pointer",
	},
};

const bgCardHover = {
	"&:hover": {
		transform: "scale3d(1.02, 1.02, 1)",
		transition: "all .4s ease-in-out",
		cursor: "pointer",
	},
};

const bgCardHoverWeak = {
	"&:hover": {
		transform: "scale3d(1.01, 1.01, 1)",
		transition: "all .4s ease-in-out",
		cursor: "pointer",
	},
};

export {
	bgBlue,
	bgRed,
	userLayoutMax,
	globalShadow,
	globalShadowNone,
	dialogMaxWidth,
	bgHover,
	bgCardHover,
	bgCardHoverWeak,
};
