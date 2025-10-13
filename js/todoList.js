export class Todolist {
    constructor(listElement) {
        //할일을 저장할 배열
        this.todos = [];
        //할일 목록을 보여줄 요소
        this.listElement = listElement;
    }
    //할일을 추가하는 메서드
    addTodo(todo) {
        this.todos.push(todo);
        this.showTodos();

    }
    //할일 목록을 화면에 보여줄 메서드
    showTodos() {
        //기존에 ul 요소 안에 있던 내용을 지우기
        this.listElement.innerHTML = "";
        //배열에 저장된 할일 만큼 li요소를 만들어서 그 li안에 할일 넣기
        this.todos.forEach((todo) => {
            let li = document.createElement("li");
            li.innerHTML = todo;
            this.listElement.appendChild(li);
        })

    }
}