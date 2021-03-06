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


// 4. 데이터 타입 (연습문제)
// **013. 데이터 타입 구분**
// 주어진 변수 str과 number의 데이터 타입을 확인하세요.
let str = "3"
let number = 3

typeof str;
typeof number;


// **014. 배열과 객체의 데이터 타입**
// 주어진 변수 array과 object의 데이터 타입을 확인하세요.
let array = []
let object = {}

typeof array //object
typeof object //object

Array.isArray(array) //true
Array.isArray(object) //false

// **015. 데이터 타입 변경**
// num에 데이터를 string으로 변경 후, str에 할당해주세요.
let num = 24
let str = Number(num)

typeof str // "number"

// ## 6. 조건문 (연습문제)
// 018. 조건문 연습
// input1, input2에는 boolean 타입인 true, false가 입력됩니다.
// 둘 중에 하나라도 true라면 "true"
// 두 개 모두 false면 "false"라는 문구를 띄워주세요.

function boolean(input1, input2) {

	if(input1 === true || input2 === true) {
		console.log("true")
	}else{console.log("false")}
}

// 019. 홀짝
// 입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만들려고 합니다. 
// 입력된 값이 "짝수"이면 "Even", "홀수"이면 "Odd", 0이면 "Zero"라는 문구를 띄워주세요.
function evenOdd(num){
	if (num === 0) {
		console.log("Zero");
	} else if (num % 2 === 0) {
		console.log("Even");
	} else {
		console.log("Odd");
	}
}


// **020. 온도**
// 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다.
// 입력된 값에 따라 알맞은 문구를 띄워주세요
// 18이하면 "조금 춥네요"
// 19~23이면 "날씨가 좋네요"
// 24이상이면 "조금 덥습니다"

function temperature(num){
	if (num < 19) {
		console.log("조금 춥네요");
	} else if (num <23 ) {
		console.log("날씨가 좋아요");
	} else {
		console.log("조금 덥습니다.");
	}
}

temperature(13)  // "조금 춥네요"
temperature(23)  // "날씨가 좋네요"
temperature(27)  // "조금 덥습니다"


// 021. 며칠
// 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.
// 각 조건에 해당하는 알맞은 값을 입력해주세요.

function days(month){
	if (month === 4 || 
        month === 6 ||
      	month === 9 ||
       	month ===11) 
    {console.log("30일");} 
	  else if (month === 2) 
    	{ console.log("28일");}
  		else {console.log ("31일")}
}

days(1) // 31
days(2) // 28
days(4) // 30


// ## 7. 반복문 (연습문제)
// 023. 숫자 더하기
// 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.
function sum(num) {
	let result = 0;
		for (let i=0; i< num+1; i++) {
			result = result + i
		}
		console.log(result)
}

  sum(6); // 21

// (멘토풀이)
function sum(num) {
	let count = 0;
		for (let i = 0; i <= num; i + 1) {
			count = count + i
		}
		console.log(count)
}
	

// 024. 특정 문자열 세기
// 문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.
// 반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.

// (멘토풀이)
function countLetter(str) {
	let count = 0;
	for (let i = 0; i < str.length; i = i+1) {
    if(str[i] ==='a' || str[i] ==='A'){
		count = count +1;
	}
	}
}


// 025. 문자열 삽입
// num을 입력받아 1부터 num까지 각각의 숫자 사이에 "-"가 들어간 문자열을 만들어야 합니다.
// num에 3일 경우에는 "1-2-3"입니다.

//(멘토풀이)
function makeNumber(num) {
	let str = ''
	for ( let i = 1; i <= num; i + 1) {
		str = str + i;

		if( i !== num ){
			str= str + "-"
		}
	}
}
countLetter("I am from Korea")

// 026. 홀수 문자열
// num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.
// num에 5일 경우에는 "135"입니다.

// (멘토풀이)
function makeOdd(num) {
	let str = ''
	for (let i = 1; i <= num; i = i+1) {
		if(i%2 !==0){
			str = str + i
		}
	}
}


// 027. 가장 큰 수 찾기
// str은 무작위 숫자인 문자열입니다.  해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.
// 만약 str에 "12345"가 들어온다면 "5"를 나타내야 합니다.

// (멘토 풀이)
function bigNum(str) {
	let biggest = Number(str[0])
	for (let i = 1; i<str.length; i + 1) {
		if(Number(str[i])>biggest){
			biggest = Number(str[i])
		}
	}
}

// 41. 조건문 실전 적용 - 점수에 따른 등급 
// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.
// 100~90 → "A"
// 89~80 → "B"
// 79~70 → "C"
// 69~60 → "D"
// 59점 이하는 "F"
// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

function grade(score){
    
	if(score>=90 && score <=100){  
	console.log("A");
	} else if (80<=score && 89>=score){
	console.log("B");
	} else if (70<=score && 79>=score){
	console.log("C");  
	} else if (60<=score && 69>=score){
	console.log("D");  
	} else if (0>score && 100<score){
	console.log("잘못된 점수 입니다.")  
	} else {
	console.log("F");
	}
	
}
	
grade(60); // "D"


//(멘토풀이)
function grade(score) {
let result="";

if (score > 100 || score <0 ){
	result = " 잘못된 점수 입니다.";
} else if (score>=90 && score <= 100){
	result = "A"
} else if (score>=80&&score<=89){
	result = "B";
} else if (score >= 70 && score < 79){
	result = "C";
} else if ( score >= 60 && score <= 69 ){
	result = "D"
} else if ( secore <= 59){ 
	result = "F"; 
}
console.log(result)
}

// **043. 마이페이지**
// 오른쪽 myShooping은 내가 구매한 목록을 보여주고 있습니다.
// 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 
// "의류"를 구매한 횟수에 따라 등급을 나타내세요.

// 등급표
// "0~2"  ⇒ Bronze
// "3~4" ⇒ Silver
// 5이상 ⇒ Gold

//멘토풀이
const myShopping = [
	{ category: "과일", price: 12000　},
	{ category: "의류", price:10000　 },
	{ category: "의류", price: 20000　},
	{ category: "장난감", price: 9000 },
	{ category: "과일", price: 5000　 },
	{ category: "의류", price: 10000  },
	{ category: "과일", price: 8000　　},
	{ category: "의류", price: 7000　　},
	{ category: "장난감", price: 5000  },
	{ category: "의류", price: 10000　 },
]

let count = 0; // 물품을 구매한 횟수를 담아주는 변수
let price = 0; // 총 가격을 담아주는 변수
let grade = ''; // 최종 등급을 담아주는 변수

for( i=0; i <myShopping.length; i++ ){

	if( myShopping[i].category === "의류" ){
		count = count +1;
		price = price + myShopping[i].price
    }


if ( count >=0 && count <=2 ){
		grade= 'bronze'
	}	else if (count >= 3&& count <= 4){
		grade = 'sliver'
	}	else if (count >= 5){
		grade = 'gold'
	}
	
}

console.log('의류를 구매한 횟수는 총' + count + '회 금액은' + price +'원이며 등급은' + grade +'입니다.')