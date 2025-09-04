
function insertAtBottom(stack, element) {
    if (stack.length === 0) {
        stack.push(element);
        return;
    }
 
    let top = stack.pop();
    
    
    insertAtBottom(stack, element);
    
  
    stack.push(top);
}


function reverseStack(stack) {
    if (stack.length === 0) return;
 
    let top = stack.pop();
    
  
    reverseStack(stack);
    
  
    insertAtBottom(stack, top);
}


let stack = [1, 2, 3, 4];
console.log("Original Stack:", stack);

reverseStack(stack);

console.log("Reversed Stack:", stack);