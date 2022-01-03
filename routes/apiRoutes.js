const {read, createNewNote, validateNote, getNotes} = require('../db/store');
const notes = require('../db/db.json');
const router = require('express').Router();
const { v1: uuidv1} = require('uuid');


router.get('/notes', (req,res) => {
    let results = notes
    res.json(results);
});

router.post('/notes', (req,res)=>{
    req.body.id = uuidv1();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

//router.delete('/notes/:id', (req, res) => {;
   // const note = deleteNote(req.body, note);
   // res.json(req.body);
//});

module.exports = router;
