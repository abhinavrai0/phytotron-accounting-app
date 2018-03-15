'use strict'
var Note = require('../models/note');

// Get Notes list
exports.getNoteList = function (req, res) {
    Note.find()
        .exec(function (err, noteList) {
            if(err){
                res.status(500);
                res.send('Unable to fetch Notes'+err);
            }else{
                res.send(noteList);
            }
        });
};


// Create a new note
exports.addNote = function (req, res) {
    var noteInstance = new Note(req.body);

    noteInstance.save(function (err) {
        if(err){
            res.status(500);
            res.send('Error creating Note: '+err);
        }else{
            res.send('Note created successfully');
        }
    });
};

// Update and existing note
exports.updateNote = function (req, res) {
    Note.findOne({_id: req.body._id},function(err, note){
        if(err){
            res.status(500);
            res.send('Cannot find note to update'+err);
        }else{
            note.set(req.body);
            note.save(function(err){
                if(err){
                    res.status(500);
                    res.send('Error saving note update '+err);
                }else{
                    res.send('note saved successfully');
                }
            });
        }
    });
};

// Delete given note
exports.deleteNote = function (req, res) {
    Note.remove({_id:req.body._id},function (err) {
        if(err){
            res.status(500);
            res.send('Error removing note'+err);
        }else{
            res.send('Note removed');
        }
    });
};