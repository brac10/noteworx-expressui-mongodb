'use strict';

// package references
const express = require('express');

// app references
const NoteManager = require('../Services/NoteManager');

// initialization
const noteManager = new NoteManager();

// build router

const notesRouter = () => {

    const router = express.Router();

    router.get('/', (request, response) => {
        noteManager
            .listNotes()
            .then(notes => response.status(200).render('notes/list', { notes: notes }))
            .catch(error => {                    
                request.flash('ERROR_MESSAGE', 'An error occurred whilst listing notes. See logs.');
                console.log('########## List Notes Error: ', error);
            });
    });


    router.route('/edit/:id').get((request, response) => {        
        
        const { id } = request.params;

        noteManager
            .findNoteById(id)
            .then(note => {
                response.render('notes/edit', {
                    note: {
                        id: note.id,
                        title: note.title,
                        content: note.content,
                        tags: note.tags.join(',')
                    }
                });
            })
            .catch(error => {
                request.flash('ERROR_MESSAGE', 'An error occurred whilst listing notes. See logs.');
                console.log('########## List Notes Error: ', error);
            });
    });


    router.post('/edit', (request, response) => {
        
        const { id, title, content, tags } = request.body;

        noteManager
            .updateNote(id, title, content, tags)
            .then(() => {
                request.flash('SUCCESS_MESSAGE', `Updated note '${title}' successfully`);
                response.redirect('/notes');
            })
            .catch(error => {
                request.flash('ERROR_MESSAGE', `An error occurred whilst updating note '${title}'. See logs.`);
                console.log('########## Update Note Error: ', error);
            });
    });

    
    router.get('/add', (request, response) => {
        response.status(200).render('notes/add', {
            title: '',
            content: '',
            tags: ''
        });
    });


    router.post('/add', (request, response) => {

        const { title, content, tags } = request.body;
        const errors = [];

        if (!title) {
            errors.push({ 'text': 'Please enter note title' });
        } 
        
        if (!content) {
            errors.push({ 'text': 'Please enter note content' });                
        }
        
        if (errors.length > 0) {
            response.status(422).render('notes/add', {
                errors: errors,
                title: title,
                content: content,
                tags: tags
            });
        } else {

            noteManager
                .addNote(title, content, tags)
                .then(() => {
                    request.flash('SUCCESS_MESSAGE', `Added new note '${title}'`);
                    response.redirect('/notes');
                })
                .catch(error => {
                    request.flash('ERROR_MESSAGE', `An error occurred whilst adding new note '${title}'. See logs.`);
                    console.log('########## Add Note Error: ', error);
                });
        }
    });


    router.post('/delete', (request, response) => {
        
        const { note_id } = request.body;

        noteManager
            .removeNote(note_id)
            .then(() => {
                request.flash('SUCCESS_MESSAGE', 'The note was removed successfully');
                response.redirect('/notes');
            })
            .catch(error => {
                request.flash('ERROR_MESSAGE', 'An error occurred whilst deleting note. See logs.');
                console.log('########## Delete Note Error: ', error);
            });
    });


    return router;
};

module.exports = notesRouter;