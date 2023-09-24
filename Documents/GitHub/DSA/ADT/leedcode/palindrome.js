// function palindrome(arr){
//     let left = 0;
//     let right = arr.length -1;
//     let boolType = true;
//     while(left<=right && boolType){
//         if(arr[left] === arr[right]){
//             left ++;
//             right--;
//         }else{
//             boolType = false;
//         }
//     }
//     return boolType;
// }

// const numbers = [1,2,3,3,2,1];
// const result = palindrome(numbers);
// console.log(result);

class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function isPalindrome(head){
     if(!head || !head.next){
        return true;
    }

    // step 1 find the middle of the linked list

    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // step 2 reverse second half of the linked list
    let prev = null;
    let current = slow;
    while(current){
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    // step 3 compare first half and other half
    
    let left = head;
    let right = prev;
    while(right){
        if(left.val !== right.val){
            return false;
        }
        left = left.next;
        right = right.next;

    }
    return true;
}
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(2);
list.next.next.next = new ListNode(1);

console.log(isPalindrome(list)); 