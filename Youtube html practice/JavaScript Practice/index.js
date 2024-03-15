/*let name="Hammad";
onsole.log(name);*/

/*const rate = 20.3;
const cant be changed
rate = 10;
console.log(rate);*/

/*Primitive Types
let name ='Hammad'; String literal
let age=22; //Number Literal
let isApproved=false; //Boolean
let firstName = undefined;
let selectColor = null;
*/


/*Dynamic Language not static 
during Runtime literal or primitive type can be changed
let name ='Hammad'; 
name =23;
console.log(name);
let firstName = undefined; //its data type is also undefiend and value is also undefined*/

/*Reference Types
Objects,Arrays,Function*/

/*Object
let person = {
    name:'Hammad',
    age:22,
    phn_No: 12345-11 
}
//dot notation used for object
person.name="Hamza";
console.log(person.name);
*/

/*Array
let data = ['Hammad','Azaan','Hamza'];
data[3]='Noor';//Array is also dynamic : Length can be changed
console.log(data);
data[4]=1;
console.log(data); // It works as object.It is not mandatory that all elements have specific data types 
console.log(data.length);
*/

/*Function
function greet(name,lastName){  // name = parameter
    console.log('Hello '+name+' '+lastName);

}

greet('Hammad','Khalil'); //Argument='Hammad','Khalil'
*/

/*es6 Array destructuring
let data = ['Hammad','Azaan','Hamza','Noor'];
let [name1,name2,name3,name4] = data; //containing them seperately
console.log(`Hello ${name1} and ${name4}`);

let [firstName,,,lastName] = data;
console.log(`FirstName = ${firstName} and SecondName = ${lastName}`);  //I only need first and last element of array
*/

/*es6 Objects Destructuring

let person = {
    name:'Hammad',
    age:22,
    phn_No: 12345-11,
    hobbies:{                        // an onject inside an object
        one:'Play',
        sec:'Sleep'
    }
}

//let {name:firstname,age:ages}=person;
//console.log(`Hey ${firstname},you are ${ages} years old`);

//let {phn_No:Phn}=person;      // I only need last element
//console.log(`Hey ${firstname},this is your ${Phn}`);


let {name:firstName,hobbies:hobb} = person;

console.log(`Hey ${firstName} i know you love to ${hobb.sec}`);
*/

//loops

/*for loop

for(let i=0;i<=10;i++){   //Table of 3
    console.log(i*3);
}
*/

/*while loop
let i=10;
while(i>0){             //ulti ginti 
    i--;
    console.log(i);
    
}
*/

// do while loop

// let i=10;
// do{
//     console.log(i);     //It should not work as condtion is saying 11<10 but in do while the inner body of loops mandatory once
//     i++;
// }while(i<10);

//for In loop for object

// let person = {
//     name:'Hammad',
//     age:22,
//     phn_No: 12345-11 
// }
// for(let key in person){
//     //console.log(key);     //objects elements without values
//     console.log(key,person[key]); //objects elements with values

// }

//for in loop for arrays
// let data = ['Hammad','Azaan','Hamza','Noor'];
// for(let index in data){
//    // console.log(index);
//     console.log(index,data[index]); // array indexes with values
// }

//for of loop for arrays
// let datas = ['Hammad','Azaan','Hamza','Noor'];
// for(let data of datas){  // direct gives you values unlike for in
//     console.log(data);
// }

//switch

// let age ;

// switch(age){
//     case 0:
//         text = "ON";
//     break;
//     case 1:
//         text = "OFF";
//     break;
//     default :
//         text = 'Good luck';        
// }

// console.log(text);   // default will run













