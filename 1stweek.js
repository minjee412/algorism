// 1. 변수와 상수 (연습문제)
// 'name'이라는 변수를 선언하고, 자신의 이름을 할당하세요.
let name = '영희';

// 002 . 재할당
// 주어진 변수 'name'에 "철수"를 재할당하세요. 
let name = '철수';

// 2. 배열 (연습문제) 
// 003. 배열의 선언과 할당
// 주어진 변수 fruits에 "사과", "바나나", "파인애플"을 담아주세요.
let fruits = ['사과','바나나','파인애플'];


// 004. 배열의 기능
// 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요.
let fruits = ["사과", "바나나", "파인애플"]
let newFruits = fruits[fruits.length -1]


// 005. 배열의 기능
// 학생들의 이름이 담긴 students 배열이 있습니다.
// 배열에서 2번 째 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요.
let students = ["철수", "영희", "훈이", "짱구", "유리"]
let newArr=students.slice(0,2)


// 006. 배열의 기능
// 주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.
let fruits = ["사과", "바나나"]
fruits[0] = "맛있는" + fruits[0]
fruits[1] = "맛있는" + fruits[1]


// 007. 문자열 배열
// 상수 number는 핸드폰 번호가 담긴 문자열입니다.
// 해당 문자열을 "010", "1234", "5678"로 나눈 배열을 만드세요.
const number = "01012345678"
let arr =[number.slice(0,3), number.slice(3,7), number.slice(7,11)]



//3. 객체 (연습문제)
//008. 객체의 선언과 할당
// 주어진 student 객체에 
// 'name'이라는 키를 만들고, "철수"를 할당하세요.
let students = {}
students.name = "철수"


//009. 객체의 키&값 추가
// student와 school 두 개의 객체가 있습니다.
// student 객체에 school이라는 객체를 할당해야 합니다.
const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school;


// 010. 객체의 키&값 삭제
// 주어진  student는 "철수"에 대한 정보를 모아둔 객체입니다.
// 그런데 철수와 관련이 없는 drink라는 키가 있네요. 
// student에서 { drink: "사이다" }를 삭제해주세요.
let student = {
	name: "철수",
	age: 8,
	drink: "사이다"
};

delete student.drink;


// 011. 객체와 배열의 값
// 주어진 classmates는 "다람쥐초등학교" 학생들의 정보를 모아둔 배열입니다.
// 그런데 자세히 보니 "영희" 학생의 정보가 잘못 입력되어 있습니다.
// "영희"의 school 값을 "다람쥐초등학교"로 바꿔주세요.
const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];

classmates[1].school = "다람쥐초등학교"