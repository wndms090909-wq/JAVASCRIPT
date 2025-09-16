//.next를 선택하여 
let next = document.querySelector(".next");
//바로 다음에 오는 형제를 찾아서 배경색
// let nextSib = next.nextSibling;
//nextsibling = 엔터 스페이스를 인식한다
let nextSib = next.nextElementSibling;
console.log(nextSib);
nextSib.style["background-color"]="skyblue";

//.next를 선택하여
//바로 이전에 오는 형제를 찾아서 글자색 초록
let prevSib = next.previousElementSibling;
prevSib.style.color ="green";