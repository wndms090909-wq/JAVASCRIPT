//버튼영역 선택자
//상품을 보여줄영역 선택자
let goodsBtn = document.querySelector(".tab-menu-list");
let goodsShow = document.querySelector(".product-tab-list");

//모든 제목을 저장할 배열
let productList = [];

//제품을 보여줄 렌더함수
function renderGoods(cate) {
    goodsShow.innerHTML = "";
    //조건에 맞는 내용만 저장할 배열
    let filteredGoods = cate === "all" ? productList : productList.filter(good => good.카테고리 === cate);
    console.log("조건에 맞는 카테", filteredGoods);

    filteredGoods.forEach(item => {
        let liItem = document.createElement("li");
        liItem.innerHTML = `<img src ="${item.이미지}">
                              <div class="text-box">
                                    <div class="badges">
                                        <span class="badge">${item.배찌}</span>
                                    </div>
                                    <h3>${item.상품명}</h3>
                                    <p>${item.가격}원</p>
                              </div>
                              `;

        goodsShow.append(liItem);
    })

}

//카테고리(버튼)를 만들어줄 함수
function createBtns(cateList) {
    console.log("받는 카테고리", cateList);
    cateList.forEach(cat => {
        let li = document.createElement("li");
        let button = document.createElement("button");
        goodsBtn.append(li);
        li.append(button);
        button.textContent = cat;
        button.setAttribute("data-filter", cat);
    })

    let allBtns = goodsBtn.querySelectorAll("button");
    allBtns[0].classList.add("active");

    //버튼 이벤트 등록
    allBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            let cateType = btn.getAttribute("data-filter");
            allBtns.forEach(b => b.classList.remove("active"))
            btn.classList.add("active");
            renderGoods(cateType);
        })
    })

}

//외부데이터를 불러올 함수
async function fetchGoods() {
    try {
        let goods = await fetch("./productList.json");
        console.log(goods);
        let data = await goods.json();
        console.log(data);
        productList = data;
        console.log(productList);

        let categories = [];

        productList.forEach(item => {
            if (!categories.includes(item.카테고리)) {
                categories.push(item.카테고리);
            }
        })
        console.log(categories);
        renderGoods(categories[0]);

        //버튼 생성함수
        createBtns(categories);

    } catch (err) {
        console.log("에러", err);
    }
}
//초기함수 호출
fetchGoods();