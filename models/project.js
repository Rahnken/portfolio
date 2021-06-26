// Importing Mongo to hold the project links
const mongo= require('mongoose');

// Make a Schema definition

const schemaDef = {
    name:{
        type:String,
        required : true
    },
    description:{
        type:String,
        required: true
    },
    tools:{
        type:Array
    },
    hosted:{
        type:String
    }
};
// use the schema def to create mongoDB schema
const projectSchema = new mongo.Schema(schemaDef);



// use the mongo schema to create model and export
module.exports = mongo.model('profProjects',projectSchema);