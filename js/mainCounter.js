import { Counter } from "./Counter.js";

let showCount = document.querySelector(".count-show");
let plusBtn = document.querySelector(".plus-btn");
let minusBtn = document.querySelector(".minus-btn");

let counter = new Counter(showCount);

//plusBtn 클릭시 숫자 증가
plusBtn.addEventListener("click", () => {
    counter.incrament();
})

//minusBtn 클릭시 숫자 감소
minusBtn.addEventListener("click", () => {
    console.log(counter.count);
    if (counter.count > 0) {
        counter.decrement();
    }
})