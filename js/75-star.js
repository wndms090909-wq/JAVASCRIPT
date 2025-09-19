//별 선택하기
let stars = document.querySelectorAll(".stars>span");

//별 카운트해서 보여주는 변수
let numShow = document.querySelector(".num");

//별 취소하기
let reset = document.querySelector(".reset-count");
function changeNum() {
    //active클래스를 가지는 별을 선택하여
    let starActive = document.querySelectorAll(".stars>.active");

    //그 별의 개수를 구해서

    //numShow에 넣어주기
    // numShow.append(starActive.length);
    numShow.innerHTML = starActive.length;

}

stars.forEach((star, index) => {
    console.log(stars)
    star.addEventListener("click", (e) => {
        // console.log("클릭한별:", e.currentTarget, index);
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add("active")
            }
            else {
                s.classList.remove("active");
            }
        })

        //개수를 체크할 함수
        changeNum()

    })
    //별 취소
    // reset.addEventListener("click", () => {
    //     star.classList.remove("active");
    //     changeNum()
    //     // 함수로 하면 별이 100개면 100번 명령어가 실행됨
    // })
})

//별 취소
//reset을 클릭하면 모든별(stars)에 active 제거되고
//numShow의 내용물은 0이 되도록 선생님 ver
reset.addEventListener("click", () => {
    stars.forEach(star => {
        star.classList.remove("active");
    })
    numShow.innerHTML = 0;
})


