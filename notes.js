console.log('Starting notes.js...');

module.exports.addNote = () => {
    console.log('addNote');
    return "New note";
};

let command = process.argv[2];
console.log("Command:", command);

if (command === "add") 
    console.log("Add new note");