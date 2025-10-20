//DOM
let todoForm = document.querySelector("#todo-form");
let todoInput = document.querySelector("#todo-form input");
let todoList = document.querySelector(".todo-list");
let removeAll = document.querySelector(".remove-all button");

//localStorage에 저장할 키값
const TODOS_KEY = "todoList";
//할일을 저장할 배열
let toDos = [];
//할일을 구분해줄 id키값 저장하기
//기존데이터가 있으면 그 다음번호부터 시작하고, 없을때 0으로 시작
//Math.max(1,2,3,4,5);
//Math.min(2,4,1,5);




toDos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
console.log(toDos);

id = toDos.length > 0 ? Math.max(...toDos.map(t => t.id)) : 0;
console.log(id)



//데이터를 input 입력후 enter or submit을 클릭하면 - 이벤트 submit
todoForm.addEventListener("submit", (e) => {
    //a, form 자체 이벤트가 들어있음 => 기본 이벤트 막아주기
    e.preventDefault();
    let newTodo = todoInput.value;
    console.log(newTodo);
    todoInput.value = "";

    //위에서 입력받은 내용을 오브젝트로 저장하기
    let newTodoObj = {
        id: ++id,
        text: newTodo,
        check: false
    }

    toDos.push(newTodoObj);
    saveTodos();
    showTodos();
})

//입력된 데이터를 localStorage에 저장
function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//입력된 데이터를 보여줄 함수
function showTodos() {
    console.log(toDos);
    todoList.innerHTML = "";
    toDos.forEach(todo => {
        let li = document.createElement("li");
        li.innerHTML = `
                    <span class="line">${todo.text}</span>
                        <div class="icon">
                            <button class="check-btn">c</button>
                            <button class="remove-btn">x</button>
                        </div>
                        `

        todoList.append(li);

        //삭제버튼 클릭하면 해당 li가 삭제되도록
        li.querySelector(".remove-btn").addEventListener("click", ()=>{
            //해당되는 요소를 빼고 나머지를 다시 배열에 넣기
            toDos = toDos.filter(t => t.id !== todo.id);
            saveTodos();
            //나머지만 다시 보여주기
            showTodos();
        })
        //체크버튼 클릭하면 해당 li의 !check
    })
}

showTodos();