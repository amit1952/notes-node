console.log('Starting notes.js...');

const fs = require('fs');

var addNote = (title, body) => {
    var notes= [];
    var note = {
        title,
        body
    };

    // Get Notes
    try {
        // Get existing notes into the array
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
        
    }

    const duplicateNotes = notes.filter((note) => note.title === title);

    // Save Notes
    if (duplicateNotes.length === 0) {
        // Add new note to the notes array and write it to the file.
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }

};

var getAll = () => {
    console.log("Getting all notes.");
};

var readNote = (title) => {
    console.log("Reading note with title:", title);
};

var removeNote = (title) => {
    console.log("Removing note with title:", title);
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};
