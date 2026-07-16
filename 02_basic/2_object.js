
const mykey = Symbol("key1")

const user = {
    name : "ayush",
    "full name" : "ayush kumar",
    age : 18,
    email : "lulibaz@gmail.com",
    islogged_in : true,
    [mykey] : '1abc2',
    lastlogindays : ["Monday", "Saturday"]
}

console.log(user.email)
console.log(user["full name"]) // square notation ke alwa koi option nhi
console.log(user[mykey])

user.email = 'swar@gmail.com'
// Object.freeze(user)
user.email = 'ayush@gmail.com'
console.log(user)

user.greeting = function(){
    console.log(`hello user, ${this["full name"]}`)
}

const obj1 = {1 : 'a',2 : 'b'}
const obj2 = {3 : 'a',4: 'c'}

// const obj3 = {obj1, obj2} //-> each object become key only
const obj3 = Object.assign({},obj1,obj2) // {} -> target source
const obj4 = {...obj1,...obj2}

console.log(obj3)


const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

