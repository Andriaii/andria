let num = 20;
console.log(num++);
console.log(--num); 
console.log(++num); 
console.log(num++); 


let age = prompt("Enter your age:");
age = Number(age); 

age++; 

if (age <= 18) {
    console.log("You are kid");
} else {
    console.log("You are adult");
}
