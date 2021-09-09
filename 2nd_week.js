// 문자열을 정수로 바꾸기
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
function solution(s) {
    var answer = 0;
    return answer = Number(s);
}

//풀이
// 1)
function solution(s) {
    var answer = 0;
    return answer = Number(s);
}

// 2)
function solution(s) {
    return +s; // = retrun Number(s)
    return s / 1; // = return Number(s)
}


// 같은 숫자는 싫어
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,
// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

//풀이
function solution(arr)
{
    let answer = [];

    for(let i = 0; i = arr.length; i = i + 1){
        if (arr[i] !== arr[ i + 1 ]){
            answer.push(arr[i]);
        }

    }

    return answer;
}


// 핸드폰 번호 가리기
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 문제

function solution(phone_number) {
    var answer = '';
    
    for (let i = 0; i < phone_number.length; i = i + 1){
        if ( i < phone_number.length - 4 ){
            answer = answer + '*';
        }else{
            answer = answer + phone_number[i];
        }
    }
    return answer;
}


// 짝수와 홀수
// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

function solution(num) {
    var answer = '';
    
    if (num % 2 ===0){
        answer = 'Even'
    } else { 
        answer = 'Odd'
    }
    return answer;
}

// 풀이 (삼항연산자)
function solution(num) {

    return num%2 ===0
    ? 'Even'
    : 'Odd'
}

// 평균 구하기
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(arr) {
    var answer = 0;
    
    for(let i = 0; i < arr.length; i=i+1){
        
        answer = answer + arr[i]
        
    }
    
    return answer / arr.length;
    
}

//풀이 (평균구하기, 모든 정수의 합 / 정수의 갯수)
function solution(arr) {
    let sum = 0; //sum은 모든 변수의 합을 담는 변수
    
    for( let i = 0; i < arr.length; i++){
        console.log(arr[i]) //1 2 3 4
        sum = sum + arr[i]
    }

        return sum / arr.length

}


// 가운데 글자 가져오기
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
    var answer = '';
    
    if(s.length % 2 ===0 ){
        answer = s[s.length / 2 - 1] + s[s.length / 2]
    } else { Math.floor(s.length / 2 ) - 1 }
    return answer;
}

//풀이
function solution(s) {
    // 가운데 있는 인덱스 값을 저장
    const half = Math.floor(s.length / 2) ; // Math.floor : 버림 

    if(s.length % 2 ===0){
        //짝수 일 경우
        return s[half - 1] + s[half]

    } else {
        //홀수 일 경우
        return s[half];
    }
}

//삼항 연산자
function solution(s) {
    const half = Math.floor(s.length / 2)
    return s.length % 2 === 0
    ? s[half - 1] + s[half]
    : s[half]
}


// 서울에서 김서방 찾기
// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, 
// solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
    var answer = '';
    
    answer = "김서방은 " + seoul.indexOf("Kim") + "에 있다";
    
    return answer;
}

//풀이
//1) 방법
function solution(seoul) {
    let x = 0;
    for (let i = 0; i < seoul.length; i++){
        console.log(seoul[i])// Jane
                             // Kim
                            
        if ( seoul[i] === 'Kim'){
            x = i;

            break; // 반복문 종료
        }
    }
    return '김서방은' + x + '에 있다.';
}

//2) 방법
function solution(seoul) {
    let x = seoul.indexOf('Kim');
    return '김서방은' + x + '에 있다.';
}


// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
    var answer = true;
    
    if((s.length === 4 || s.length === 6) && !isNaN(s)){
        answer = true;
    }else{
        answer = false;
    }
    return answer;
}

//풀이
//1) for문 사용
function solution(s) {
    var answer = true;
    
    if(s.length !==4 && s.length !==6 ){
        return false;
    }
        for (let i = 0; i<s.length; i++){
            if( isNaN(s[i]) === true ){
            answer = false;

            break;
            }
        }
    return answer;
}

//2) filter사용
function solution(s) {
    if(s.length !==4 && s.length !==6 ){
        return false;
    }
                    //문자열을 배열로 만들어 준다.
    const answer = s.split("")
                    .filter( str => isNaN(str) === true )
                    .length === 0;

        return answer;
}
// 약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

//풀이
//1)
function solution(n) {
    var answer = 0;
    
    for ( let i = 1; i <= n; i++){
        if( n % i === 0){
            answer = answer + i;
        }
    }
    return answer;
}

//2)
function solution(n) {
    var answer = 0;

    const array = 
        new Array(n)
        .fill(1)
        .forEach(( num, index ) => {
            n % ( num + index ) === 0
                ? answer = answer + ( num + index )
                : null
        })
        return answer;
}


// 자릿수 더하기
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
function solution(n)
{
    var answer = 0;
    var answer2 = n.toString();
    
    for(let i = 0; i < answer2.length; i++){
        answer = answer + Number(answer2[i]);
    }
        return (answer)
}

//풀이
// 1)
function solution(n)
{
    var result = 0;
    
    n = String(n);
    
    for(let i = 0; i < n.length; i++){
        result = result + Number(n[i]);
    }
        return (result)
}

// 2)
function solution(n)
{
    var result = 0;
    
    const arry = String(n)
                    .split("")
                    .forEach(num=>{
                        result = result + Number(num);
                    })
        return (result)
}


// x만큼 간격이 있는 n개의 숫자
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

function solution(x, n) {
    var answer = [];
    
    for(let i = 1; i <= n; i++ ){
        answer.push (x*i)
    }
    return answer;
}

//풀이
function solution(x, n) {
    
    const array = new Array(n)
                        .fill(x)
                        .map((number, index) =>{
                            return number * (index + 1)
                      })
    return array;
}