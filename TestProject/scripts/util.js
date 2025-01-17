//export let apiKey='abcd';
//export let apiKey2='efgh';
//export default "ijkl";
let userMessage="Hello world";
const userMessage2="Hello world";
console.log(userMessage)

function greet(user,message){
    return (user+" "+message);
}
console.log(greet("Mikołaj","React"))



function together(a,b,c){
    return a+b+c;
}

console.log(together(1,2,3))

export default function(){
    console.log("Welcome!")
}

export default ()=>{
    console.log("Welcome!")
}

export default (username)=>{
    console.log("Welcome!")
}

export  default number =>number*3;
export default  number => {return number*3}
export default number => {{age:number}}

const user= {
    name: "Robert",
    age:40,
    greet(){
        console.log("Hello")
        console.log(this.age)
    }
}
console.log(user.name)



class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
            console.log("Hello");
    }
}

const user1=new User("Monika",23);
console.log(user1);

hobbies.push("working");
const index1=hobbies.findIndex((item)=>{return item==="sports"})
console.log(index1)

const myArr=hobbies.map((item)=> item+"!")
console.log(myArr)

function tranformToObjects(numberArray){
    return numberArray.map((item)=> ({val :item}))
}
console.log(tranformToObjects([1,2,3]))

const userNames=["Max","John","Green"]
const [firstName,secondName,thirdName]=userNames;
console.log(firstName,secondName,thirdName);

function storeOrder({id,currency}){
    localStorage.setItem("id", id);
    localStorage.setItem("currency", currency);
    
}

const hobbies=["sports","cooking","reading"];
const icecream=["vanilla","chockolate","berry"];

const mergelists=[...hobbies, ...icecream]
console.log(mergelists);

const user= {
    name: "Robert",
    age:40,
    greet(){
        console.log("Hello")
        console.log(this.age)
    }
}

const extendeduser={
    isAdmin: true,
    ...user,
}

console.log(extendeduser)

const password=prompt("Your password");
if(password==="Hello"){
    console.log("Hasło ptzyjęte")
}else if(passowrd==="hello"){
    console.log("Hasło ptzyjęte")
}else{
    console.log("Rejected")
}

const myTimeout=setTimeout(myGreeting,5000);
function myGreeting(){
    document.getElementById("demo").innerHTML="Happy birthday!"
}
setTimeout(()=>{console.log("More time out ...",5000)})