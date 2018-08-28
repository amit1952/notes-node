console.log('Starting the app.js..');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];
console.log("Command:", command);
console.log("Yargs:", argv);

if (command === "add") {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("The note was created successfully");
        notes.logNote(note);
    } else {
        console.log("Failed to create new note. \nPerhaps a duplicate title exists");
    }
} else if (command === "list") {
    notes.getAll();
} else if (command === "read") {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log('The note you wanted');
        notes.logNote(note);
    } else {
        console.log("Note not found.");
    }
} else if (command === "remove") {
    let removed = notes.removeNote(argv.title);
    let message = removed ? `The note titled ${argv.title} was removed` : 'Note not found';
    console.log(message);
} else {
    console.log("Command not recognized");
}
