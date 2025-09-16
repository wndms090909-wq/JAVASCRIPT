//1. 태그 선택자
//h1을 선택하여 글자색 초록으로 변경하기
// let h1Title = document.getElementsByTagName("h1")[0];
// h1Title.style.color = "green";
let h1Title = document.querySelector("h1");
//스타일주기
//1. 선택자.style.속성 = "값"
// => 속성 abckgroundColor
//2. 선택자.style["속성"] = "값"
// => 속성 ["background-color"]
//3. 선택자.style.setProperty("속성", "값");
//4. 변경할 속성이 여러개인경우
// 선택자.style.cssText = "속성:값;속성:값;"
h1Title.style["color"] = "green";

//p를 전부 선택하여 배경을 pink
// let pTag = document.getElementsByTagName("p");
let pTag = document.querySelectorAll("p");
console.log(pTag);

// for(i=0;i<pTag.length;i++){
//     pTag[i].style.backgroundColor="pink";
// } 
//for of
for (let p of pTag) {
    p.style.backgroundColor = "pink";
}

//2.클래스 선택자
//.text 글자크기 30px 
// let cText = document.getElementsByClassName("text")[0];
// cText.style.fontSize = "30px";
let cText = document.querySelector(".text");
cText.style.setProperty("font-size", "50px");

//3.아이디 선택자
// let idTxt = document.getElementById("idText");
let idTxt = document.querySelector("#idText");
// idTxt.style.textDecoration = "underline";
// idTxt.style["text-decoration"] = "underline";
idTxt.style.cssText="text-decoration:underline;color:green;font-size:30px"

//4.form 선택자
let myForm = document.myForm.uuId
myForm.style.backgroundColor = "skyblue";


