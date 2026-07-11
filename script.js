// Q1. Hello Function 
// Ek function banao jo call hone par “Hello JavaScript” print 
// kare. 


// function hello(name){
//     console.log("Hello Javascript");
// }

// hello();







// Q2. Greeting Function 
// Ek function banao jo naam le aur “Hello Naam” print kare.

// function helloname(name){
//     let great = prompt("Enter a name");
//     console.log("Hello",great);
// }

// helloname();







// Q3. Sum of Two Numbers 
// Ek function banao jo 2 numbers ka sum print kare.

// function sum(num){
//     let a = 10;
//     let b = 20;
//     console.log(a + b);    
// }

// sum();






// Q4. Even or Odd Checker 
// Ek function banao jo check kare number even hai ya odd.

// function evenodd(num){
//     if(num % 2 === 0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }
// }

// evenodd(20);







// // Q5. Positive Negative Zero 
// // Ek function banao jo number ka type check kare.


// function numbercheck(num){
//     if(num > 0){
//         console.log("positive");
//     }else if(num < 0){
//         console.log("Negative");
//     }else{
//         console.log("Zero");
//     }

// }
// numbercheck(10);







// Q6. Largest of Two Numbers 
// Ek function banao jo 2 numbers me se bada number print kare.


// function Largestnum(a,b){
//     if(a > b){
//         console.log("largest number a =", a);
//     }else if(b > a){
//         console.log("largest number b =", b);
//     }else{
//         console.log("both number are equal");
//     }
// }

// Largestnum(10,10);








// Q7. Largest of Three Numbers 
// Ek function banao jo 3 numbers me se largest print kare.

// function largestnum(a, b, c) {
//     if (a >= b && a >= c) {
//         console.log("largest number a :-", a);
//     } else if (b >= a && b >= c) {
//         console.log("largest number b :-", b);
//     } else{
//         console.log("largest number c", c);
//     }
// }

// largestnum(20,50,200);









// Q8. Square Finder 
// Ek function banao jo number ka square print kare. 

// function square(num){
//     console.log(`Square of ${num} = ${num * num }`);
// }

// square(50);








// // Q9. Cube Finder 
// // Ek function banao jo number ka cube print kare.

// function cubefinder(num){
//     console.log(`Cube of ${num} = ${num * num * num}`);
// }

// cubefinder(2);









// // Q10. Counting 1 to 10 
// // 1 se 10 tak numbers print karo.

// function Countingprint(number){
//     for(let i = 1; i <= 10; i++){
//         console.log(i);
//     }
// }

// Countingprint();







// // Q11. Reverse Counting 
// // Ek program banao jo 10 se 1 tak numbers print kare.

// function Reversecounting(num){
//     for(let i = 10; i >= 1; i--){
//         console.log(i);
//     }
// }
// Reversecounting();







// Q12. Even Numbers (1 to 20) 
// Ek program banao jo 1 se 20 tak saare even numbers print 
// kare. 


function evennumber(num){
    for(let i = 1; i <= 20; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
evennumber();