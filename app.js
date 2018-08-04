console.log('Starting the app.js..');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.add(5, 9);
console.log(`The result of 5 + 9 is ${res}.`);
// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} years old.`, (err) => {
//     if (err) {
//         console.log("Unable to write to file.");
//     }
// });