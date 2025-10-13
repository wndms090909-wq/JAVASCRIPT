import { Todolist } from "./todoList.js"

let todoInput = document.querySelector(".todo-input");
let addBtn = document.querySelector(".add-btn");
let todoList = document.querySelector(".todo-list");
let todo = new Todolist(todoList);
//addBtn 클릭시 할일 추가
addBtn.addEventListener("click", () => {
    let todoValue = todoInput.value.trim();
    if (todoValue) {
        todo.addTodo(todoValue);
        todoInput.value = "";
        todoInput.focus();
    }
})

//엔터기를 눌러도 할일 추가하기
todoInput.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        // let todoValue = todoInput.value.trim();
        //이미 만들어진 addBtn 클릭 이벤트를 강제로 발생시키기
        addBtn.click()
    }
})