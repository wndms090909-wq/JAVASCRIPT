let box = document.querySelector(".box");
let addBtn = document.querySelector(".addBtn");
let removeBtn = document.querySelector(".removeBtn");
let toggleBtn = document.querySelector(".toggleBtn");

//이벤트 선택자.addEventListener("이벤트타입", 할일);

//add를 클릭하면 active클래스가  .box에 적용
addBtn.addEventListener("click", () => {
    box.classList.add("active");
    // 명령어 자체가 클래스랑 관련있어서 . 안찍음
})

//remove를 클릭하면 active클래스가 .box에서 제거
removeBtn.addEventListener("click", () => {
    box.classList.remove("active");
})

//toggle를 클릭하면 active 추가/제거
toggleBtn.addEventListener("click", () => {
    box.classList.toggle("active");
})