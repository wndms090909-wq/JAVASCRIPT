//변수
let num1 = 10;
let num2 = 20;

//num1 <= num1 + num2을 num1에 대입
// num1 = num1 + num2;
num1 += num2;
console.log(num1);

// 한줄에 3칸짜리 테이블 만들기
// 칸에는 1,2,3 숫자넣기
//테이블을 저장할 변수 선언하기
let myTable = "<table>";
myTable +="<tr>";
myTable +="<th>11</th>";
myTable +="<th>22</th>";
myTable += "<th>33</th>";
myTable +="</tr>";
myTable += "</table>";
console.log(myTable);

// 사이트에 보이게 하는거
document.writeln(myTable);
