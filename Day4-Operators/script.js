  
  // operator in js -> 
/* in java script , an "operator" refers to a speacial symbol or keyword that is used to perform operations on operands can be variable, values or expressions .
javaScript operatos are categorized into various types based on the kind of operation They perform . Here are some comman types of operators in jsava script .

1. Airthmetic Operator -> +,-,*,/ , %

2. comparison -> ==,===,>=,<=,!=,!==

3. logical operator->  ||, &&, !

4. ternary operator -> condition?true block:false block 

5. Assignment operator-> =, +=, -=, *=, /=, ^=, %=


*/

console.log("hello, world ");


// let x = 7
// let y = 7
// console.log(x+y);
// console.log(x-y);
// console.log(x%y);

// 2.Assignment operator  

let x = 14;
let y = 3;

console.log(x+=y); // -> matlab x= x+y;
console.log(x*=y);
console.log(x/=y);
console.log(x-=y);
console.log(x**=y);


// 3.  Comparison operator ;
//   let b = "9"  tripple equal to operator operot isme type nhi check karega vo true return karega (strict equal to operator )
  console.log(x==y);
  console.log(x===y);
  console.log(x!=y);
  console.log(x!==y);
  console.log(x>y);
  console.log(x<y);
  console.log(x>=y);
  console.log(x<=y);

//   4. Logical operator 

// AND : dono condition true hoga to return ture hoga 
// or: agar koi ek value true hoga to ya koi ek condition true hoga to value jo return hogi vo true hogi. 
// Not: not agar condition true hai to use false aur agar ture hai to use false karta hai yani jo condition hogi uska ulta karta hai not operator / true ka false , false ka true .

let p = 5;
let q = 6;
let s = 9;
console.log(p>q && q>p);
console.log(p>q || q<s);
console.log(p<q)
console.log(!x);
console.log(!(p==q));



// ###  increment and decrement operator 
console.log(p++);
console.log(p);
console.log(++p);

//  unary operator ek single operands pe kam karte hai 



//  exponential operator 

console.log(p**q) ; //5*5*5*5*5*5
console.log(s**q); // 9*9*9*9*9*9
console.log(q**p); // 6*6*6*6*6

// exponentialoperator ka use power nikalne ke kaam m aata hai 

