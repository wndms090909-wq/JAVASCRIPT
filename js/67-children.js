//.lsit를 선택하여 
let list = document.querySelector(".list")
//.list의 첫번째 자식인 li를 선택하여 배경색
let first = list.firstElementChild;
console.log(first);
first.style["background-color"] = "pink";
//.list의 마지막 자식 글자크기 40px
let last = list.lastElementChild;
last.style["font-size"]="40px"

//.list의 모든 자식 테두리
// let liTag = document.querySelectorAll("li");
// console.log(liTag);
// for (let li of liTag) {
//     li.style.border = "1px solid black"
// } 내가한거 
let child = list.children;
console.log(child) //HTML collection
// 여러번 돌려야하기 때문에 for문을 씀
for (let item of child) {
    item.style.border = "1px solid black";
}

//자식의 개수
console.log(list.childElementCount);
console.log(list.children.length);
console.log(child.length);

//.menu 자식 li 첫번째 배경
let menuFirst = document.querySelector(".menu>li:first-child");
menuFirst.style["background-color"] = "skyblue";

//.menu li 마지막 글자크기 50
let menuLast = document.querySelector(".menu>li:last-child");
menuLast.style["font-size"] = "50px";

//.menu li 모든 자식을 선택하여 테두리 초록
let menuChild = document.querySelectorAll(".menu>li");
console.log(menuChild); //NodeList

// for (j=0;j<menuChild.length;j++) {
//     menuChild[j].style.border= "2px dashed green";
// }

// for (let menu of menuChild) {
//     menu.style.border = "1px solid green";
// }

menuChild.forEach((el)=>{
    el.style.border = "2px solid green";
})