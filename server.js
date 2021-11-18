const exp = require('constants');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path');

const {notes} = require('./Develop/db/db.json');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/notes', (req,res) => {
    let results = notes
    console.log(notes);
    res.json(results);
});

app.listen(PORT, () => {
    console.log('API server now on port 3001;');
});