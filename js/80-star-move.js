//star 저장할 변수
let star = document.querySelector(".star");
//클릭한 위치의 좌표를 저장할 변수
let xPos = 0;
let yPos = 0;

//별의 위치값 받아오기
//getComputedSytle(선택자).속성 ==> 문자
let starX = parseInt(getComputedStyle(star).left);
let starY = parseInt(getComputedStyle(star).top);
console.log(starX, starY);


//문서를 클릭하면 x,y위치값을 찾아서 변수에 넣어주기
document.addEventListener("click", (e) => {
    xPos = e.clientX;
    yPos = e.clientY;
    console.log(xPos, yPos);

    //requestAnimationFrame()
    // 1000/60 ms 단위로 자신을 호출하는 명령어
})

//별을 이동시킬 함수 만들기
function moveStar() {
    //이동할 거리
    //별의 위치를 10%로 이동하기
    starX += (xPos - starX) * 0.1;
    starY += (yPos - starY) * 0.1;
    star.style.left = starX + "px";
    star.style.top = starY + "px";
    requestAnimationFrame(moveStar);
}

moveStar();