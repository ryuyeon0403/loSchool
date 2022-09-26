import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
	FreeMode,
	Scrollbar,
	Mousewheel,
	Navigation,
	Pagination,
} from "swiper";
import { useSwiper } from "swiper/react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
	Avatar,
	Box,
	CardContent,
	Grid,
	IconButton,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

// icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import MainCard from "../common/cards/MainCard";
import ReplyMessage from "./message/ReplyMessage";
import SendMessage from "./message/SendMessage";

const SwiperContainer = () => {
	SwiperCore.use([Navigation, Scrollbar]);
	const useSwiperRef = <T extends HTMLElement>(): [T | null, React.Ref<T>] => {
		const [wrapper, setWrapper] = useState<T | null>(null);
		const ref = useRef<T>(null);

		useEffect(() => {
			console.log(ref.current);
			if (ref.current) {
				setWrapper(ref.current);
			}
		}, []);

		return [wrapper, ref];
	};

	const onSlideChange = useCallback(
		(swiperCore: {
			activeIndex: any;
			snapIndex: any;
			previousIndex: any;
			realIndex: any;
		}) => {
			const { activeIndex, snapIndex, previousIndex, realIndex } = swiperCore;
			console.log({
				activeIndex,
				snapIndex,
				previousIndex,
				realIndex,
			});
		},
		[]
	);

	const maxWidth = useMediaQuery("(max-width:1080px)");

	const ImageBannerStyle = {
		// position: "absolute",
		maxWidth: "1000px",
		maxHeight: "550px",
		// width: { xs: "92%", sm: "53.3333vw" },
		height: "1700px",
		// bottom: maxWidth ? "-35vw" : "-380px",
		// top: { xs: "110px", sm: "30px" },
		// right: { xs: "4vw", sm: "20px" },
	};

	const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();
	const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();

	const handleComplete = () => {
		console.log("handleComplete");
	};

	const endTime = new Date().getTime() + 24 * 3600 * 1000 + 5000;
	const avatarSx = { width: 100, height: 100 };

	const [swiper, setSwiper] = useState<SwiperCore>();

	const handleAvatarClick = (page: number) => {
		console.log(page);
		if (swiper) {
			swiper.slideTo(page);
		}
	};

	return (
		<>
			{/* <Box
				sx={{
					backgroundColor: "gray",
					ml: 31,
					mr: 31,
					padding: 4,
					minWidth: "1000px",
					maxWidth: "1000px",
				}}
			> */}
			<Grid
				container
				justifyContent="center"
				spacing={5}
				textAlign="center"
				sx={{ backgroundColor: "gray" }}
				minWidth="900px"
			>
				{[
					"게임프로그래머",
					"게임기획",
					"게임서비스",
					"엔지니어",
					"분석가",
					"게임아트",
				].map((value, index) => (
					<Grid item>
						<Avatar sx={avatarSx} onClick={() => handleAvatarClick(index)}>
							{value}
						</Avatar>
						<Typography>{value}</Typography>
					</Grid>
				))}
			</Grid>
			{/* </Box> */}
			<Grid container justifyContent="center">
				<Box
					sx={{
						// height: { xs: "65vw", sm: "30vw" },
						// maxHeight: "336px",
						backgroundColor: "#D9D9D9",
					}}
				>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						// spacing={5}
						sx={{ position: "relative" }}
					>
						{/** PC */}
						<Box
							sx={{
								mt: "70px",
								// ml: "30px",
								// display: { xs: "none", sm: "block" },
							}}
						>
							{/** 네비게이션 버튼 */}
							<IconButton
								sx={{
									position: "absolute",
									left: "220px",
									top: "220px",
									zIndex: "10",
								}}
								ref={prevElRef}
							>
								<ArrowLeftIcon
									sx={{
										width: "100px",
										height: "100px",
										color: "#D9D9D9",
									}}
								/>
							</IconButton>
							<IconButton
								sx={{
									position: "absolute",
									right: "220px",
									top: "220px",
									zIndex: "10",
								}}
								ref={nextElRef}
							>
								<ArrowRightIcon
									sx={{
										width: "100px",
										height: "100px",
										color: "#D9D9D9",
									}}
								/>
							</IconButton>
						</Box>
						<Box sx={{ ...ImageBannerStyle }}>
							<Swiper
								onSlideChange={onSlideChange}
								spaceBetween={30}
								slidesPerView={2}
								centeredSlides={true}
								autoplay={{
									delay: 4000,
									disableOnInteraction: false,
								}}
								navigation={{
									prevEl,
									nextEl,
								}}
								onSwiper={setSwiper}
								// modules={[Autoplay]}
							>
								<SwiperSlide>
									<Swiper
										// className="mySwiper2 swiper-v"
										direction={"vertical"}
										// spaceBetween={50}
										// pagination={{
										// 	clickable: true,
										// }}
										// modules={[Pagination]}
										style={{ overflow: "auto" }}
									>
										<SwiperSlide>
											<CardContent sx={{ mt: 170 }}>
												<SendMessage title="연" content="1" />
												<ReplyMessage title="개발자" content="답변합니22다." />
												<ReplyMessage title="개발자" content="답변합니다." />
												<SendMessage title="연" content="질문합니다." />
												<ReplyMessage title="개발자" content="답변합니다." />
												<ReplyMessage title="개발자" content="답변합니다." />
												<SendMessage title="연" content="질문합니다." />
												<ReplyMessage title="개발자" content="답변합니다." />
												<ReplyMessage title="개발자" content="답변합니다." />
												<SendMessage title="연" content="질문합니다." />
												<ReplyMessage title="개발자" content="답변합니다." />
												<ReplyMessage title="개발자" content="답변합니다." />
												<SendMessage title="연" content="질문합니다22." />
											</CardContent>
										</SwiperSlide>
										{/* <SwiperSlide>
											<CardContent>
												<SendMessage title="연" content="질문2합니다" />
												<ReplyMessage title="개발자" content="답변합니다." />
												<ReplyMessage title="개발자" content="답변합니다." />
												<SendMessage title="연" content="질문합니다." />
											</CardContent>
										</SwiperSlide> */}
									</Swiper>
								</SwiperSlide>
								<SwiperSlide style={{ background: "red" }}>Slide 2</SwiperSlide>
								<SwiperSlide>Slide 3</SwiperSlide>
								<SwiperSlide>Slide 4</SwiperSlide>
							</Swiper>
						</Box>
					</Stack>
				</Box>
			</Grid>
		</>
	);
};

export default SwiperContainer;
