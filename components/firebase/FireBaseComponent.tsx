import { useEffect, useState } from "react";
import { firestore } from "./firebase";
import { member } from "component/common/data/member";
import test from "node:test";
import {
	Box,
	Button,
	Grid,
	Stack,
	Table,
	TableCell,
	Typography,
} from "@mui/material";
import { rawData } from "component/common/data/testRaw";
import * as XLSX from "xlsx";

const BoxStyle = {
	backgroundColor: "gray",
	width: "40px",
	height: "40px",
	borderColor: "white",
	border: "0.5px solid white",
};

const SelectBoxStyle = {
	backgroundColor: "black",
	width: "40px",
	height: "40px",
	borderColor: "white",
	border: "0.5px solid white",
};

const initData = () => {
	const character = firestore.collection("character");

	let barrack: any = [];
	let memberObject: any = {};
	for (let index in member) {
		let nickName = member[index].닉네임;
		let key = "";

		let job = member[index].직업;
		let bon = member[index].본부;
		let level = member[index].레벨;
		let arr2: string[] = Array(7).fill("0,0,0,0,0,0,0,0,0,0,0,0");
		if (bon === "본") {
			// character.doc(key).set({ 배럭: barrack });
			barrack = [];
			key = member[index].닉네임;
			memberObject[key] = {
				name: key,
				job: job,
				bonBoo: bon,
				level: level,
				barrack: barrack,
				timeZone: arr2,
			};
			// character.doc(key).set({
			// 	직업: job,
			// 	"본/부": bon,
			// 	레벨: level,
			// 	배럭: [],
			// });
		} else if (bon === "부") {
			barrack.push({
				name: nickName,
				job: job,
				bonBoo: bon,
				level: level,
			});
		}
	}

	for (let index in memberObject) {
		// console.log(index);
		// console.log(memberObject[index]);
		character.doc(index).set(memberObject[index]);
	}
};

const rawInitData = () => {
	const item = firestore.collection("testRawData");
	const objArr = Object.keys(rawData);
	for (let index in rawData as any) {
		// console.log(index);
		// console.log(rawData["A001"]);
		// console.log(objArr[index]);
		console.log(rawData[index]);
		item
			.doc(index)
			.set(rawData[index])
			.then((res) => {
				console.log("완료###");
				console.log(res);
			});
		// let obj: any = rawData[index+""];
	}
};

interface characterType {
	name: string;
	job: string;
	bonOrBoo: string;
}

//***json to excel */

let settings = {
	fileName: "MySpreadsheet", // Name of the resulting spreadsheet
	extraLength: 3, // A bigger number means that columns will be wider
	writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
};

const FireBaseComponent = () => {
	const [charObj, setCharObj] = useState<characterType>({} as any);
	const arr2: (string | number)[][] = Array.from(Array(7), () =>
		Array(12).fill(0)
	);
	const [tempArr, setTempArr] = useState<(string | number)[][]>(arr2);
	useEffect(() => {
		// console.log(firestore);
		const db = firestore.collection("character");

		db.doc("류연s").onSnapshot((doc) => {
			console.log(doc.data());
		});

		// rawInitData();
		// console.log(character);
		// db
		// 	// .orderBy("createdAt", "desc") // 생성일(createdAt) 역순으로 order
		// 	// .orderBy("desc")
		// 	.onSnapshot((snapshot) => {
		// 		// console.log(snapshot);
		// 		const messageArray = snapshot.docs.map((doc) => ({
		// 			id: doc.id,
		// 			...doc.data(),
		// 		}));
		// 		console.log(messageArray);
		// 	});

		db.doc("류연s")
			.get()
			.then((res) => {
				console.log(res.data());
				let resObj: any = res.data();
				console.log(resObj["timeZone"]);
				// debugger;
				let timeZone: string[] = resObj["timeZone"];
				console.log(timeZone);

				for (let i in timeZone) {
					let rowArr = timeZone[i].split(",");
					for (let j in rowArr) {
						tempArr[parseInt(i)][parseInt(j)] = rowArr[parseInt(j)];
					}
				}

				console.log(tempArr);
				setTempArr([...tempArr]);
			});

		// initData();
		// rawInitData();
		// character
		// 	.doc("류연s")
		// 	.get()
		// 	.then((res) => {
		// 		console.log(res.data());
		// 		const resObj: any = res.data();
		// 		console.log(res.id);
		// 		if (resObj) {
		// 			setCharObj({
		// 				name: res.id,
		// 				job: resObj.job,
		// 				bonOrBoo: resObj.level,
		// 			});
		// 		}
		// 	});

		// console.log(memberObject);
	}, []);
	let visitPosition = new Array(7);

	for (var i = 0; i < visitPosition.length; i++) {
		visitPosition[i] = new Array(12);
	}

	const handleClick = (x: number, y: number) => {
		// console.log(x + "," + y);
		tempArr[x][y] = 1;
		console.log(tempArr);
		setTempArr([...tempArr]);
	};

	const handleCancel = (x: number, y: number) => {
		// console.log(x + "," + y);
		tempArr[x][y] = 0;
		console.log(arr2);
		setTempArr([...tempArr]);
	};

	const handleSave = () => {
		const character = firestore.collection("character");

		let timeZone: string[] = [];
		for (let index in tempArr) {
			console.log(tempArr[index].toString());
			timeZone.push(tempArr[index].toString());
		}

		console.log(timeZone);
		character
			.doc("류연s")
			.update({ timeZone: timeZone })
			.then(() => {
				console.log("완료");
			});

		// const character = firestore.collection("testRawData");
		// console.log(character);
		// character
		// 	// .orderBy("createdAt", "desc") // 생성일(createdAt) 역순으로 order
		// 	.orderBy("A001", "desc")
		// 	.onSnapshot((snapshot) => {
		// 		// console.log(snapshot);
		// 		let messageArray: any = snapshot.docs.map((doc) => ({
		// 			id: doc.id,
		// 			...doc.data(),
		// 		}));
		// 		console.log(messageArray);
		// let arr: any = Object.keys(messageArray[0]);
		// // console.log(arr);
		// arr.sort(function (a: any, b: any) {
		// 	return parseInt(a.substr(2)) - parseInt(b.substr(2));
		// });
		// const worksheet = XLSX.utils.json_to_sheet(messageArray);
		// const workbook = XLSX.utils.book_new();
		// XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
		// //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
		// //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
		// XLSX.writeFile(workbook, "DataSheet.xlsx");
		// });
	};

	return (
		<>
			<Stack spacing={0} sx={{ minWidth: "500px" }}>
				{[0, 1, 2, 3, 4, 5, 6].map((xIdx, number) => (
					<Grid container textAlign={"center"} spacing={0} key={xIdx + number}>
						{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((jIdx, number) =>
							tempArr[xIdx][jIdx] == 1 ? (
								<Grid item key={number} sx={{ cursor: "pointer" }}>
									<Box
										sx={SelectBoxStyle}
										display="flex"
										justifyContent="center"
										alignItems="center"
										onClick={() => handleCancel(xIdx, jIdx)}
										data-value={xIdx + "," + jIdx}
									></Box>
								</Grid>
							) : (
								<Grid item key={number} sx={{ cursor: "pointer" }}>
									<Box
										sx={BoxStyle}
										display="flex"
										justifyContent="center"
										alignItems="center"
										onClick={() => handleClick(xIdx, jIdx)}
										data-value={xIdx + "," + jIdx}
									></Box>
								</Grid>
							)
						)}
					</Grid>
				))}
				<Button onClick={() => handleSave()}>저장.</Button>
			</Stack>
		</>
	);
};

export default FireBaseComponent;
