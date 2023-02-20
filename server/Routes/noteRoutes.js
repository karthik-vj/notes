const express = require('express')
const note = require('../Model/notes')

const router = express.Router()

router.get('/get-notes',(req,res)=>{
    note.find().then(result => {
        res.status(200).json(result);
    })
})

router.post('/create', (req,res)=>{
    
    const NOTES = new note({
        title: req.body.title,
        content: req.body.content,
        createdAt:new Date()
    });
    NOTES.save().then(()=>{
        
        res.json({ "message": "Notes created successfully", "success": true });
    }).catch(er => res.json({ message: er.message, success: false }));

})
router.delete('/delete/:id',(req,res)=>{
    note.findByIdAndRemove(req.params.id).then(result =>{
        res.status(200).json(result);
    })
})

module.exports = router
