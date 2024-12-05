

/* conditional statement -> In java script,conditional statement are used to make decisions in our code based on certain conditions. The most comman conditional statements are if, else if, and else . Here's brief overview 

ifs statemnt : 

if(condition) {

// code to be executed if the condition is true

}
*/

let x = 6;
let y = 5;
// if(x==6)
// if(x>6)    
// if(x>=6)
if(x>y)
{
    console.log("x ki value 6 hai ji ");
}


// if else 

if (x<y)
{
    console.log("x ki value 6 hai ")
}else {

    console.log("kuch bhi ")
}

// for multiplecondition if-else if else  statement 

let time = 10;

if(time<=10)
{
    console.log("good morning");
}  
else if(time<20)
{
    console.log("Good day");
}
else 
{
    console.log("Good Evening");
}


//  ternary operator (Conditional operator): A short hand for if else statemnet.

// * Syntax: condition? expression_if_true: expression if fslse 

// program to check pass or fail 

let marks =  prompt('Enter your marks :');

// check the condition

let result = (marks >= 40) ? 'pass' : 'fail';

//console.log(`you $(result) the exam.`);  // in this line we used template string 
console.log("your" + result + "yoy pass the exam");


// ** Switch statement 
/* Certainly! In javaScript, a switch statement is a control flow statement that allows you to compare a variable against multiple value and execute code block based on the matchimg valu. It provides a more concise way to write multiple if else statements . */

/* switch statement

switch (expression) {
      case value1: 
// code to be executed if expression matches values1
               break;
        
        case value2 : 
// code to be excuted if expression matches value 2
              break;
    // additional case as needed 
           default: 
           
code ti be executed if no cases matches expression            
        
       }

 
       ** here's a brief explation of how it works : 
       ** the switch statement evaluate the expression.

       . If the expression matches the value in a case , the code block followin that case is executed.
       . If no case matches, the block following the default keyword is executed (optional)

       */

       let day = Monday
       switch(day)
       {
         case "Monday" :
            console.log("first day of week");
            break;
            case "tuesday":
                console.log("second day of the week");
                break;
                case "wednesday" :
                    console.log("Third day of a week ");
                    break;
                    case "Thursday" :
                        console.log("fourth day of a week");
                        break;
                        case "friday" : 
                        console.log("fifth day of a week");
                        break;
                        case "saturday" :
                            console.log("sixthnday of the week ");
                            break;
                            case "sunday"  :
                                console.log("seventh day ofthe week");
                                default:
                                    console.log("no day");       
       }


