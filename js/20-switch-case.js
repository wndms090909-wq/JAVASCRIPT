// 시스템이 기억하는 날짜 정보 받아오기
// 날짜정보 년도, 월, 일, 요일, 시간, 분, 초, 밀리초
// 날짜 정보 저장 변수 만들기
// 날짜 객체값 받아오기
let date = new Date();
console.log(date);
// 년도 
let year = date.getFullYear();
console.log(year);

//월 순서로 체크 0부터 체크해서 1월=0 2월=1
let month = date.getMonth();
console.log(month);

//몇일
let theDay = date.getDate();
console.log(theDay);

//요일 0 일 1 월 2 화 3 수 4 목 5 금 6 토
let day = date.getDay();
console.log(day);
switch (day) {
    case 0:
        document.writeln("일요일");
        break;
    case 1:
        document.writeln("월요일");
        break;
    case 2:
        document.writeln("화요일");
        break;
    case 3:
        document.writeln("수요일");
        break;
    case 4:
        document.writeln("목요일");
        break;
    case 5:
        document.writeln("금요일");
        break;
    case 6:
        document.writeln("토요일");
        break;
}