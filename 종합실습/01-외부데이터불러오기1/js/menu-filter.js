let filterBtns = document.querySelectorAll(".menu-list button");
let menuShow = document.querySelector(".menu-show-list");

//외부에 저장된 데이터를 불러와서 저장할 배열
let allMenuItems = [];

//메뉴를 화면에 뿌려줄 함수 (렌더링함수)
function renderMenu(cate = "all") {
    console.log("화면에 보여주기");
    console.log(allMenuItems);
    //내용이 변경되면 이전 자료 자우기
    menuShow.innerHTML = "";

    //조건에 맞는 요소를 저장할 배열
    //삼항조건 연산자
    let filteredMenus = cate === "all" ? allMenuItems :  allMenuItems.filter(item => item.category === cate);

    //조건에 맞는 데이터 filteredMenus의 내용을 li로 만들어 보여주기
    filteredMenus.forEach(item =>{
        let liItem = document.createElement("li");
        liItem.textContent = item.name;
        menuShow.append(liItem);
    })

}
//버튼에 이벤트 등록 
filterBtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        let cateType = btn.getAttribute("data-filter");
        console.log(cateType);
        //모든 버튼은 active 클래스가 제거되고
        filterBtns.forEach(b=>b.classList.remove("active"));
        //선택한 버튼만 active 클래스가 적용되도록
        btn.classList.add("active");
        //해당하는 요소를 화면에 보여주기
        renderMenu(cateType);
    })
})

//외부데이터 불러오는 함수
async function fetchMenu() {
    try {
        //데이터 불러오기
        let menu = await fetch("./menuData.json");
        //데이터를 배열에 넣기 위해 object로 변환
        let data = await menu.json();
        console.log(menu, data);
        allMenuItems = data;
        renderMenu();

        //간단히
        //fetch("./menuData.json")
        //.then(menu => menu.json())
        //.then(data =>{
        //    allMenuItems = data;
        //    renderMenu()
        // })

    } catch (error) {
        //에러 발생시 처리 할 명령
        console.log("데이터 불러오는데 실패:", error);
        menuShow.innerHTML = "<li>데이터를 불러올 수 없습니다</li>";
    }
}
fetchMenu();
