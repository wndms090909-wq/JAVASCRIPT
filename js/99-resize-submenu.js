//.depth1 
let subMenu = document.querySelectorAll(".depth1");
//.main-menu
let mainMenu = document.querySelector(".main-menu");
//.main-menu>li>a
let mainLinks = document.querySelectorAll(".main-menu>li>a");
//ham-btn
let hamBtn = document.querySelector(".ham-btn>a");
//close-btn
let closeBtn = document.querySelector(".close-btn>a");
//윈도우의 사용가능 너비 저장
let wWidth;

//윈도우의 사이즈 체크함수
function siteInit() {
    wWidth = window.innerWidth;
    console.log(wWidth);
}

siteInit();

//윈도우의 너비가 변경되면 윈도우의 너비값 받아오기
window.addEventListener("resize", () => {
    siteInit();

    subMenu.forEach(sub => {
        sub.style.height = "";
        sub.classList.remove("active");
    })
})

//mainMenu에 마우스가 들어가면 서브메뉴가 나오도록
mainMenu.addEventListener("mouseenter", () => {
    if (wWidth >= 768) {
        subMenu.forEach(sub => {
            // sub.style.height= "auto";
            sub.classList.add("active");
        })
    }
})
mainMenu.addEventListener("mouseleave", () => {
    if (wWidth >= 768) {
        subMenu.forEach(sub => {
            sub.classList.remove("active");
        })
    }
})

//
let navWrap = document.querySelector(".nav-wrap");
//hamBtn을 클릭하여 메뉴 나오게하기
hamBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navWrap.style.left = 0;
    navWrap.style.transition = "0.3s";
})

//closeBtn
closeBtn.addEventListener("click", (e) => {
    //기본동작을 막는 함수임, a 링크기능 막음
    e.preventDefault();
    navWrap.style.left = "-120%";
    navWrap.style.transition = "0.5s";
})

//모바일에서 메인메뉴를 클릭하면 각각의 서브가 나오도록
//첫번째메뉴
// mainLinks[0].addEventListener("click", (e) => {
//     subMenu[0].style.height = "auto"
// })

mainLinks[0].addEventListener("click", (e) => {
    let next = mainLinks[0].nextElementSibling;
    console.log(next);
})

// mainLinks.forEach(main => {
//     main.addEventListener("click", () => {
//         subMenu.forEach((sub) =>{
//             subMenu.classList.add("active");
//         })

//     })
// })

mainLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        if (wWidth < 768) {
            e.preventDefault();
            let next = link.nextElementSibling;
            console.log(next);
            console.log(next.style.height);
            //서브가 열린 상태인지 체크하기
            let isOpen = next.style.height && next.style.height !== "0px";
            if (isOpen) {
                next.style.height = 0;
            }
            else {
                //실제 서브의 높이값 구하기 숨겨진 높이도 구할수있다
                let subHeight = next.scrollHeight;
                console.log(subHeight);
                next.style.height = subHeight + "px";
            }

            //실제 서브의 높이값 구하기
            // next.style.height = "auto";
            //실제 서브의 높이값 구하기
            // let subHeight = next.scrollHeight;
            // let subHeight = next.offsetHeight;
            // console.log(subHeight);

            //높이가 없는 상태에서 커지도록 다시 리겟
            // next.style.height = 0;
            //1/100초뒤에 알아낸 높이값으로 스스륵 커지도록
            // setTimeout(() => {
            //     next.style.height = subHeight + "px";
            // }, 10)


        }
    })
})