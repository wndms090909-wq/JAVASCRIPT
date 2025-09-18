//버튼
let pagerBtns = document.querySelectorAll(".pager>li");
console.log(pagerBtns);
//배너
let banners = document.querySelectorAll(".main-slider-list>li");

//현재 보여지는 배너가 몇번째인지를 체크할 변수
let current = 0;

//버튼을 클릭 이벤트 id = 순서
//btn이 pager>l를 순서대로 받음
pagerBtns.forEach((btn, id) => {
    console.log("전체 버튼:", pagerBtns);
    btn.addEventListener("click", (e) => {
        // e.currentTarget 이벤트 대상이 누구인지 찾을때
        console.log("현재 클릭한 버튼:", e.currentTarget);
        console.log("클릭한 버튼의 순서:", id)
        showBanner(id);
        current = id;
    })
})

//클릭한 버튼에 active 클래스 적용, 나머지 버튼에 active클래스 해제
// = 모든 버튼에 active클래스를 해제하고, 클릭한 버튼만 active 클래스 적용
function showBanner(id) {
    pagerBtns.forEach((b, i) => {
        b.classList.remove("active");
        banners[i].classList.remove("active");
    })
    pagerBtns[id].classList.add("active");
    banners[id].classList.add("active");
}

//3초마다 배너가 그 다음배너로 변경되도록
//setInterval("실핼명령", 시간);
//setInterval(함수명, 시간);
//setInterval(()=>{}, 시간);
setInterval(() => {
    current++;
    if (current >= banners.length) current = 0;
    showBanner(current);
}, 3000)