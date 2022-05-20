const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// Authentication will be here soon, don't worry
router.post('', (req, res)=>{
    const project = {
        name: req.body.name,
        platform: req.body.platform,
        isClient: req.body.isClient,
        clientName: req.body.clientName,    
        isOpenSource: req.body.isOpenSource,
        repoLink: req.body.repoLink,
        isLive: req.body.isLive,
        liveLink: req.body.liveLink,
        hasBlog: req.body.hasBlog,
        blogLink: req.body.blogLink,    
        description: req.body.description,
        inProgress: req.body.inProgress,
        image: req.body.image
    }
    new Project(project).save()
    .then(results => {
        console.log(project);
        res.status(201).json({
            message: "project added"
        });
    })
    .catch(err => {
        res.status(401).json({
            error: err
        });
    });
});

// I might think about adding some auth to this, but i probably wont
router.get('', (req, res)=>{
    Project.find()
    .exec()
    .then((doc) =>{
        if(doc.length > 0)
        {
            res.status(201).json({
                found: true,
                projects: doc
            });
        }
        else{
            res.status(201).json({
                found: false,
                message: "there are no projects"
            })
        }
    })
    .catch((err)=>{
        res.status(401).json({
            found: false,
            message: err
        })
    });
});

// Authentication will be here soon, don't worry
router.put('', (req, res, next) =>{    
    const project = {              
        name: req.body.name,
        platform: req.body.platform,
        isClient: req.body.isClient,
        clientName: req.body.clientName,    
        isOpenSource: req.body.isOpenSource,
        repoLink: req.body.repoLink,
        isLive: req.body.isLive,
        liveLink: req.body.liveLink,
        hasBlog: req.body.hasBlog,
        blogLink: req.body.blogLink,    
        description: req.body.description,
        inProgress: req.body.inProgress,
        image: req.body.image
    }
    Project.updateOne({_id: req.headers.id}, project)
    .then(() => {
        res.status(201).json({
            updated: true,
            message: "The thing has been upadted"
        });
    })
    .catch((err) => {
        res.status(401).json({
            updated: false,
            message: err
        });
    });
});

router.delete('', (req, res) => {
    Project.deleteOne({_id: req.headers.id})
    .then(()=>{
        res.status(200).json({message: "project has been removed"});
    });
});

module.exports = router;