//#uId에 input 이벤트가 발생되면 글자의 개수를 num에 보여주기
let uId = document.querySelector("#uId");
let uIdCount = document.querySelector(".num");

let checks = document.querySelectorAll(".check input");
let likeColor = document.querySelector("#likeColor");

// uId.addEventListener("input", (e)=>{
//     console.log(uId.value.length);
//     // let count = uId.value.length;
//     let count = this.value.length;
//     // uIdCount.innerHTML = count;
//     uIdCount.textContent = count;
// })

uId.addEventListener("input", function (e) {
    let count = this.value.length;
    uIdCount.textContent = count;
})

//uId에 입력된 내용물 드래그로 선택 selcet
uId.addEventListener("select", () => {
    uId.style.background = "pink";
})

//change - checkbox, radio ,(select) 클릭 아니고 체인지
// for (i = 0; i < checks.length; i++) {
//     checks[i].addEventListener("change", function (e) {
//         console.log(e.currentTarget);
//     })
// }

//forEach ((배열데이터저장변수, 순서, 배열)=>{})
checks.forEach((ch) => {
    ch.addEventListener("change", (e) => {
        console.log(e.target);
    })
})

//select - change
likeColor.addEventListener("change", function (e) {
    //e.currentTarget 이벤트 준 대상
    //e.target 이벤트 실제로 들은 대상
    //e.target.value
    //e.target.selectedIndex 몇번째 option을 선택했는지 찾기
    //e.target.options[e.target.selectedIndex].text 속에 들어가는 글자 출력
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.selectedIndex);
    console.log(e.target.options[e.target.selectedIndex].text);
})

//form은 변수를 만들지 않아도 그냥 가져다 쓸수있음
//form을 다 입력후 전송
myForm.addEventListener("submit", (e) => {
    alert("전송되었습니다.")
})

//reset 취소
myForm.addEventListener("reset", (e) => {
    alert("자료를 다시 입력하세요.");
})