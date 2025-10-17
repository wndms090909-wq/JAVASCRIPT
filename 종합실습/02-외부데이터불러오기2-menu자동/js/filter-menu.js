//html 구조 선택자
let menuButton = document.querySelector(".menu-list");
let menuShow = document.querySelector(".menu-show-list");

//json 파일의 모든 내용을 저장할 배열
let allMenuItmes = [];

//조건에 맞는 내용을 화면에 뿌려줄 함수
function renderMenu(cate) {
    menuShow.innerHTML = "";
    //조건에 맞는 내용만 저장할 배열
    let filteredmenus = cate === "all" ? allMenuItmes : allMenuItmes.filter(item => item.category === cate);
    console.log(filteredmenus);

    //filteredMenus에 있는 내용을 li로 만들어서 menuShow에 넣어서 보여주기
    filteredmenus.forEach(item =>{
        let liItem = document.createElement("li");
        liItem.textContent = item.name;
        menuShow.append(liItem);
    })
}

//버튼을 생성해줄 함수
function createBtns(cateList) {
    console.log("받는 카테고리", cateList);

    //카테고리 버튼 추가하기
    cateList.forEach(cat =>{
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.textContent = cat;
        button.setAttribute("data-filter", cat);
        li.append(button);
        menuButton.append(li);
    })

    //모든 버튼을 저장할 배열변수
    let allBtns = menuButton.querySelectorAll("button");
    allBtns[0].classList.add("active");

    //버튼 이벤트 등록
    allBtns.forEach(btn =>{
        btn.addEventListener("click", ()=>{
            let cateType = btn.getAttribute("data-filter");
            allBtns.forEach(b => b.classList.remove("active"))
            btn.classList.add("active");
            renderMenu(cateType);
        })
    })
}

//데이터를 불러줄 함수
async function fetchMenu() {
    try {
        let menu = await fetch("./menuData.json");
        //await를 생략하면 promise가 반환됨
        //await를 추가하면 결과물만 response가 반환됨
        console.log(menu);
        //menu에 있는 response에 있는 내용을 object로 변환
        let data = await menu.json();
        //await 추가해야 결과물인 array 반환
        console.log(data);
        allMenuItmes = data;
        console.log(allMenuItmes);

        //카테고리 추출하기
        let categories = [];
        //첫번째 요소로 all을 추가
        categories.push("all");
        
        //카테고리가 중복되지 않도록
        allMenuItmes.forEach(item => {
            if (!categories.includes(item.category)) {
                categories.push(item.category);
            }
        })
        console.log(categories);

        //버튼생성함수
        createBtns(categories);

        //해당하는 내용을 보여줄 함수
        renderMenu("all")


    } catch (err) {
        console.log("데이터 로딩에 실패", err);
        menuShow.innerHTML = "<li>데이터를 불러올 수 없습니다</li>";
    }
}

//데이터를 불러줄 함수 호출
fetchMenu();