export class Counter {
    constructor(showCount) {
        //숫자를 증가하거나 감소시켜서 저장할 변수
        this.count = 0;
        //숫자를 보여줄 요소
        this.showCount = showCount;
    }
    //숫자를 증가시키는 메서드
    incrament() {
        this.count++;
        this.updateShow();
    }
    //숫자를 감소시키는 메서드
    decrement() {
        this.count--;
        this.updateShow();
    }

    //화면에 숫자를 보여주는 메서드
    updateShow() {
        this.showCount.innerHTML = `현재 값 : ${this.count}`;
    }
}