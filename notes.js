console.log('Starting notes.js...');

module.exports.addNote = () => {
    console.log('addNote');
    return "New note";
};

let command = process.argv[2];
console.log("Command:", command);
console.log(process.argv);

if (command === "add") {
    console.log("Add new note");
} else if (command === "list") {
    console.log("Listing all notes");
} else if (command === "read") {
    console.log("Read a note");
} else if (command === "remove") {
    console.log("Removing a note");
} else {
    console.log("Command not recognized");
}
