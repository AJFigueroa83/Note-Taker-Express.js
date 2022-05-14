const express = require('express');
const uuid = require('uuid');
const router = express.Router();

let data = require('../db/db.json');

router.get('/', (req, res) => res.json(data));

router.post('/notes', (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    if (!newTitle || !newText) {
        res.status(400).json({msg: 'Must input text'})
    } else {
        const newJSON = {
            id: uuid.v4(),
            title: newTitle,
            text: newText
        };
        data.push(newJSON);
        res.json(data);
    };
});

router.delete('/:id', (req, res) => {
    if (found) {
        data = data.filter(obj => obj.id !== req.params.id);
        res.json(data);
    } else {
        res.status(400).json(data);
    };
});

module.exports = router;