const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// Route:1 Get all the notes of the users using : GET /api/notes/fetchallnotes: Login Required
router.get('/fetchallnotes', fetchuser , async(req,res)=>{
    try {
    const notes = await Note.find({user: req.user.id})
    res.json(notes);
    }catch (error) {
        console.log(error.message);
        res.status(500).send("Error occured");
    }
})

// Route:2 Add a new note : POST /api/notes/addnote: Login Required
router.post('/addnote', fetchuser ,[
    body('title', 'Title length is too short').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters').isLength({ min: 5 }),
  ], async(req,res)=>{
try {

const {title , description, tags} = req.body;

  // if there are errors return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const note = new Note({
        title, description, tags , user : req.user.id
    })
    const savedNote = await note.save();

    res.json(savedNote);
} catch (error) {
    console.log(error.message);
    res.status(500).send("Error occured");
}
})

// Route:3 Upadate an existing note : PUT /api/notes/updatenote: Login Required
router.put('/updatenote/:id', fetchuser , async(req,res)=>{
    try {
        
    
    const {title, description, tags} = req.body;

    //create a new note object
    const newNote = {};

    //updating title, description, tags
    if(title){newNote.title = title;}
    if(description){newNote.description = description;}
    if(tags){newNote.tags = tags;}

    // find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not found")}

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Access-Denied")
    }
    note = await Note.findByIdAndUpdate(req.params.id, {$set : newNote} , {new:true})
    res.send({note});
} catch (error) {
    console.log(error.message);
    res.status(500).send("Error occured");
}
})

// Route:4 Delete an existing note : Delete /api/notes/deletenote: Login Required
router.delete('/deletenote/:id', fetchuser , async(req,res)=>{
    try{
    const {title, description, tags} = req.body;
    // find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not found")}

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Access-Denied")
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.send({"success " : "note has been deleted" , note:note})
} catch (error) {
    console.log(error.message);
    res.status(500).send("Error occured");
}
})
module.exports =router; 