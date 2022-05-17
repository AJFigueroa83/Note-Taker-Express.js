const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile, readAndDelete } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    readAndAppend(newNote, './db/db.json');
    res.json(newNote)
});

router.delete('/notes/:id', (req, res) => {
    readAndDelete(req.params.id, './db/db.json');
    res.json({ ok: true });
});

module.exports = router;