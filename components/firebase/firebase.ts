//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
	// firebase 설정과 관련된 개인 정보
	apiKey: "AIzaSyBFNkH3RqSVLBpEcdJAT6lrcE45HIcdfVQ",
	authDomain: "lostarkschool.firebaseapp.com",
	databaseURL: "https://lostarkschool-default-rtdb.firebaseio.com",
	projectId: "lostarkschool",
	storageBucket: "lostarkschool.appspot.com",
	messagingSenderId: "765961991624",
	appId: "1:765961991624:web:c6c787743afe12fdf13cfd",
	measurementId: "G-88MT2LF38S",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
