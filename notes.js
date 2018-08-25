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

const readNote = (title) => {
    console.log("Reading note with title:", title);
};

const removeNote = (title) => {
    console.log("Removing note with title:", title);
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};
