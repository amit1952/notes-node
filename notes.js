console.log('Starting notes.js...');

const fs = require('fs');

const fetchNotes = () => {
    // Get Notes
    try {
        // Get existing notes into the array
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {   // if no notes exist or invalid data
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    // Check for duplicates
    const duplicateNotes = notes.filter((note) => note.title === title);

    // Save Notes
    if (duplicateNotes.length === 0) {
        // Add new note to the notes array and write it to the file.
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

const getAll = () => {
    console.log("Getting all notes.");
};

const getNote = (title) => {
    let notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

const removeNote = (title) => {
//    Fetch all notes into an array
    let notes = fetchNotes();
//    Filter the notes, leaving out the one to be removed
    let filteredNotes = notes.filter((note) => note.title !== title);
//    save new notes array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length; // If true, note was removed
};

var logNote = (note) => {
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
