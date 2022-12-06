import { Node } from "./node";
export class LinkedList<T> {
  public total = 0;
  private head: any;
  //  private value?:Node<T> | null;

  constructor() {}
  push<T>(value: T): T {
    const node = new Node(value);
    if (!this.head) {
      ++this.total;
      this.head = node;
      return value;
    }
    let temporary = this.head;
    while (temporary.next) {
      temporary = temporary.next;
    }
    ++this.total;
    temporary.next = node;
    return value;
  }
  printList(): T[] {
    const data = [];
    let temporary = this.head;
    while (temporary) {
      data.push(temporary.value);
      temporary = temporary.next;
    }
    return data;
  }

  pop() {
    try {
      if (!this.head) {
        throw new Error("data not available");
      }
      if (!this.head.next) {
        const data = this.head.value;
        this.head = null;
        return data;
      }
      let temporary = this.head;
      let prev;
      while (temporary.next) {
        prev = temporary;
        temporary = temporary.next;
      }
      const data = temporary.value;
      prev.next = null;
      return data;
    } catch (error) {
      throw error;
    }
  }

  insertAt<T, V>(index: T, value: V): V {
    const node = new Node(value);
    if (index == 0 && this.head) {
      console.log("node : ",this.head)
      node.next = this.head;
      this.head = node;
      return value;
    }
    let localIndexCheck=0;
    let temporary = this.head;
    let prev=temporary;
    while (temporary) {
      if(localIndexCheck>=index){
           break;
      }
      prev = temporary;
      temporary = temporary.next;
      ++localIndexCheck;
    }
    node.next=temporary;
    prev.next=node;
    return value;
  }
}

// try{
//   if(!this.head){
//     throw new Error("data not available")
//   }
//   if (!this.head.next) {
//     const data = this.head.value;
//     this.head = null;
//     return data;
//   }
//   let temporary = this.head;
//   let prev;
//   while (temporary.next) {
//     prev = temporary;
//     temporary = temporary.next;
//   }
//   const data = temporary.value;
//   prev.next = null;
//   return data;
// }catch(error){
//   throw error;
// }
// }
