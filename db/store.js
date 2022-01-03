const fs = require('fs');
const res = require('express/lib/response');
const path = require('path');

//const uuidv1 = require('uuid/v1');
const notesArray = [];

function read() {
    return fs.readFileAsync('/db.json', 'utf8');
}

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    console.log(notesArray);
    return note;
}

function validateNote() {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
}

function getNotes() {
    if (!notesArray) {
        res.status(404).json({ message: 'No data found' })
    };
    return (notesArray);
}

//removeNote({params}, res){
//}

module.exports = {read,
createNewNote,
validateNote,
getNotes};