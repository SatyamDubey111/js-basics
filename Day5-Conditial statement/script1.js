
// this is next example of switch statement 

// In conditional statement we are going to use switch statement which makes our code mode simle .

let day = parseInt(prompt("enter a number"));  // parse int ka use karke ham kisi value ko number me convert kar sakte hai 
// psrses a value as a string and return the first integer.

switch(day) 
{
    case 0:
    console.log("sunday");
    break;
    case 1:
        console.log("it's Monday");
    break;
        case 2:
            console.log("Tuesday");
            break;
            case 3 :
                console.log("wdenesday");
                break;
                case 4:
                    console.log("thursday");
                    break;
                    case 5: 
                    console.log("friday");
                    break;
                    case 6:
                        console.log("saturday");
                        break;
                        default:
                            console.log("day is not avaliable");
}