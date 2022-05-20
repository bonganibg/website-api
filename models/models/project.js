const mongoose = require('mongoose');

const stringParams = {type: String, required: true};
const boolParams = {type: Boolean, required: true}

const project = new mongoose.Schema({    
    name: stringParams,
    platform: stringParams,
    isClient: boolParams,
    clientName: stringParams,    
    isOpenSource: boolParams,
    repoLink: stringParams,
    isLive: boolParams,
    liveLink: stringParams,
    hasBlog: boolParams,
    blogLink: stringParams,    
    description: stringParams,
    inProgress: boolParams,
    image: stringParams
});

module.exports = mongoose.model('Project', project);