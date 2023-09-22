class Node{
    constructor(data){
       this.data = data;
       this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;

        }
        current.next = newNode;

    }
    reverse(){
        let prev = null;
        let current = this.head; 
        let next = null;

        while(current !== null){
            next = current.next;
            current.next = prev;
            prev = current;
            current =next;


        }
        this.head = prev;
    }
}
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

console.log("Original List:");
console.log(myList);

myList.reverse();

console.log("Reversed List:");
console.log(myList);