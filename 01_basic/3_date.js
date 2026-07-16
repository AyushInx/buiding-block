let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toJSON())
console.log(mydate.toISOString())

console.log(typeof mydate) // object

let myCreatedDate1 = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")


let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// getDate() returns the day of the month (1-31). Using getDate() here
// prints the numeric day of month and a short message.
console.log(`${newDate.getDate()} and the time `);

// toLocaleString with the weekday option returns the localized weekday name
// e.g. "Monday". The first argument is the locale (undefined uses the
// runtime's default locale). The options object requests the full weekday name.
console.log(newDate.toLocaleString(undefined, { weekday: "long" }));