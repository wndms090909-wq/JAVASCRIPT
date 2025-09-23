//wrap, icon, #code 저장할 변수
//위치를 계산해줄 변수
let wrap = document.querySelector(".wrap");
let icon = document.querySelector(".icon");
let code = document.querySelector("#code");
let xPos = 0;
let yPos = 0;

//window의 너비값 outerWidth
//사용가능 영역 너비 innerWidth
//선택한 요소의 너비 offsetWidth
console.log(window.outerWidth, window.outerHeight);
console.log(window.innerWidth, window.innerHeight);
console.log(wrap.offsetWidth, wrap.offsetHeight);

//상자 넓이에서 아이콘의 넓이를 뺀 값을 변수에 저장
let leftEnd = wrap.offsetWidth - icon.offsetWidth;
let topEnd = wrap.offsetHeight - icon.offsetHeight;

//e = 내가 어떤 키보드를 눌렀는지 알기위해 필요
document.addEventListener("keydown", (e) => {
    console.log(e.key, e.code);
    code.value = e.key;
    switch (e.key) {
        case "ArrowRight":
            if (xPos < leftEnd) {
                xPos += 10;
            }
            break;
        case "ArrowLeft":
            if (xPos > 0) {
                xPos -= 10;
            }
            break;
        case "ArrowDown":
            if (yPos < topEnd) {
                yPos += 10;
            }
            break;
        case "ArrowUp":
            if (yPos > 0) {
                yPos -= 10;
            }
    }
    console.log(xPos);
    // icon.style.left = `${xPos}px`;
    // icon.style.setProperty("left", `${xPos}px`);
    icon.style.transform = `translate(${xPos}px, ${yPos}px)`; //젤 많이 씀 위치값을 잡을수있어서?
})