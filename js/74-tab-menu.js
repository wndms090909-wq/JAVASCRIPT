//tab-title을 저장할 변수
let tabTitles = document.querySelectorAll(".tab-title>li");
//tab-content를 저장할 변수
// let tabContents = document.querySelectorAll(".tab-content");
let tabContents = document.querySelectorAll(".tab-content-wrap>div");

//tabTitles>li을 클릭하면 
// 전부 active클래스를 제거하고, 자신의 버튼에 active클래스를 주고
//전체 tabContents에 클래스가 있으면 제거하고,
//선택한 버튼이랑 같은 순서에 있는 tabContent만 active클래스가 적용되도록
//이벤트를 줄 버튼 찾기
tabTitles.forEach((tab, id)=>{
    tab.addEventListener("click", ()=>{
        //tabTitles, tabContents 전부 클래스 제거
        tabTitles.forEach((t,i)=>{
            t.classList.remove("active");
            tabContents[i].classList.remove("active");
        })
        //이벤트가 발생된 버튼과 버튼과 같은 순서인 contents에 클래스 추가
        tab.classList.add("active");
        tabContents[id].classList.add("active");
    })
})

//forEach 안쓰고
// tabTitles[0].addEventListener("click",()=>{
//     for(i=0;i<tabTitles.length;i++){
//         tabTitles[i].classList.remove("active")
//     }
//     tabTitles[0].classList.add("active")
// })
// tabTitles[1].addEventListener("click",()=>{
//     for(i=0;i<tabTitles.length;i++){
//         tabTitles[i].classList.remove("active")
//     }
//     tabTitles[1].classList.add("active")
// })
