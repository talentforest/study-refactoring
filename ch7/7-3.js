export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPrioriry() {
    return "high" === this.priority || "rush" === this.priority;
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

const highPriorityCount = orders.filter((o) => o.isHighPrioriry()).length;

console.log(highPriorityCount);

// 프로젝트 전반적으로 Priority를 많이 사용한다면 따로 클래스를 만들 수 있다.
