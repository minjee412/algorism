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