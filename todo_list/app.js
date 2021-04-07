console.log("Welcome to shopping list. enter one of the following commands\n1. add\n2. remove\n3. view\n4. quit");
let items = ['add','remove','view','quit'];
let input = prompt('Enter a command');
let groceryList = []
while (input !== items[3]){
    if (input == items[0]){
        groceryList.push(prompt('enter item'));
    }
    else if(input== items[1]){
        groceryList.splice(prompt("enter index to splice"),1);
    }
    else if (input== items[2]){
        console.log(`your grocery list is\n ${groceryList}`);
    }
    else{
        console.log("enter a valid command")
    }
    input = prompt('Enter another command');
}
console.log('visit again!!')