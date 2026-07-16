function saymyname(){
    console.log("ayush kumar")
}
saymyname()
// saymyname -> refrence , () -> execution

function addtwonumber(number1,number2){
    let result = number1 + number2
    return result
}

console.log(addtwonumber(2,3));

function loginUserMessage(username = "swar"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// ... num1 karne se jo bhi argument bacha wo as array pass hoga

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// you can see you dont have to tell which datatype is argument and which dataype is output