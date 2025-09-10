//오늘의 날짜 정보 가져오기
let today = new Date();

//시간
let hours = today.getHours();
console.log(hours);
// day 6~18
// night 18~6 
//조건문 시간>=6 && 시간<=18
if (hours >= 6 && hours <= 18) {
    console.log("day")
    //body를 선택하여 .night클래스를 제거
    document.querySelector("body").classList.remove("night");
}
else {
    console.log("night");
    //body를 선택하여 .night클래스를 추가
    document.querySelector("body").classList.add("night")
}