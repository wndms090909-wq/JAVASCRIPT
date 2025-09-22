let list = document.querySelector(".list");
//.list의 첫번째 자식을 복사하여 마지막에 붙이기
//.list의 마지막 자식을 복사하여 처음에 붙이기
//복사부터 하기
let listFirst = list.firstElementChild.cloneNode(true);
let listLast = list.lastElementChild.cloneNode(true);
console.log(listFirst, listLast);
//나중에 붙이기
//뒤에 안에 붙이기
list.append(listFirst);
//앞에 안에 붙이기
list.prepend(listLast);

//
let menu = document.querySelector(".menu");
let menueFirst = menu.firstElementChild.cloneNode(false);
let menuLast = menu.lastElementChild.cloneNode(true);

menu.append(menueFirst);
menu.prepend(menuLast);
