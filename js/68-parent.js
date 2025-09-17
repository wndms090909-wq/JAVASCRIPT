//.me의 부모를 찾아서 배경색 주기 
let me = document.querySelector(".me");
let meParent = me.parentElement;
console.log(meParent);
meParent.style.background = "pink"

//span의 부모를 찾아서 배경색
let span = document.querySelector("span")
let spanParent = span.parentNode;
console.log(spanParent);
spanParent.style.background = "skyblue";

//h1의 부모를 찾아서 green
let title = document.querySelector("h1");
let parent = title.parentElement;
// let parent = title.parentNode;
console.log(parent);
parent.style["background"] = "aliceblue";