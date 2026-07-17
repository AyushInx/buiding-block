// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
// they are falsey

// "0", "false", " " ,[] ,{} -> truthy values



// high order loops
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}
const greeting = "Hello word"
for (const element of greeting) {
    if(element == 'H'){
        break;
    }
}

// Maps
const map = new Map() // unique value
map.set('IN', "INDIA")
map.set('US', "UNITED STATES")
map.set('EN', "ENGLAND")
map.set('ARG', "ARGENTINA")

map.set('IN',"BIHAR"); // not duplicate early one got update and order same
// console.log(map);

for(const [key, val] of map){
    console.log(`country code is ${key} & its name is ${val}`)
}

// this key value wont work for object

const object = {
    user : "ayush",
    email : 'idontwanna@Com',
    islogged : true
}
for(const key in object){
    console.log(key)
}

for(const key in map){
    console.log("map ka dekho" + key)
}

//array -> foreach in
const coding = ["js","rubby","python","cpp"]

coding.forEach(function(val){
    console.log(val);
})

coding.forEach((item) => {
    console.log(item);
})

coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})

const mycoding = [
    {
        itemname: "JavaScript",
        itemwork: "Frontend Development"
    },
    {
        itemname: "Python",
        itemwork: "Data Science"
    },
    {
        itemname: "Java",
        itemwork: "Backend Development"
    }
]

mycoding.forEach((item) => {
    console.log(`this will be ${item.itemwork}`)
})