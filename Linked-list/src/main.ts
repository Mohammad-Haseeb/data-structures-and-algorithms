import { LinkedList } from "./LinkedListWithoutSavingTailReference";

const linkedList = new LinkedList();
console.log("pushing : ", linkedList.push(10));
console.log("pushing : ", linkedList.push(12));

console.log("pushing : ", linkedList.push(13));

console.log("pushing : ", linkedList.push(14));

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

console.log("ppo : ", linkedList.printList());

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Total : ", linkedList.total);

// console.log("ppo : " ,linkedList.pop());
// console.log("ppo : " ,linkedList.pop());
// console.log("ppo : " ,linkedList.pop());
// console.log("ppo : " ,linkedList.pop());
// console.log("ppo : " ,linkedList.pop());

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("ppo : ", linkedList.printList());

console.log("insert at  : ", linkedList.insertAt(0, 20));
console.log("insert at  : ", linkedList.insertAt(2, 3));
console.log("insert at  : ", linkedList.insertAt(10, 109));

console.log("ppo : ", linkedList.printList());
