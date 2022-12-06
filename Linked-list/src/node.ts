export class Node<T>{
//    next : Node<T> | null;
//    value:T;
//    constructor(next:Node<T> | null= null,value:T){
//     this.next=next;
//     this.value=value;
//    };
// public  next? : Node<T> | null;

constructor(
  protected  value:T,
  public  next? : Node<T> | null

) {}

}