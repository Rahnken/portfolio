const express = require('express');
const router = express.Router();
const project = require('../models/project')

router.get('/',((req, res, next) => {
    // add projects to the table view
    project.find((err,profProjects)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render('projects/index',{title:'Projects',dataset:profProjects});
        }
    })
    /**Get and Post paths to add projects  to the DB that isn't linked to on the site
     *
     */
    // TODO: Move this off the website and create a CMS type of setup
}));
router.get('/add',(req, res, next)=>{
    // res.render('projects/add',{title: 'Add a new project'})
   project.find((err,courses)=>{
        if (err){
            console.log(err)
        }
        else{
            /// send courses back to the view
            res.render('projects/add',{title:'Add a new Project'});
        }
    });
});
router.post('/add', (req, res, next) => {
    // use the project module to save data to DB
    // call create method of the model
    // and map the fields with data from the request
    // callback function will return an error if any or a newProject object

    project.create({
        name: req.body.name,
        description: req.body.description,
        tools: req.body.tools,
        hosted:req.body.hosted
    }, (err, newProject) => {
        if (err) {
            console.log(err);
        }
        else {
            // We can show a successful message by redirecting them to index
            res.redirect('/projects');
        }
    });
});

module.exports = router;