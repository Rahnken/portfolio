const express = require('express');
const router = express.Router();

router.get('/',((req, res, next) => {

    res.render('about',{title:'About Me',
        perfBio:"I’m a computer programming student at Georgian College in Barrie, ON.I’m currently interested in developing web applications or becoming a UI/UX designer or consultant. All my work has a focus on being accessible for all users and ensure that all users are able to use every part of the application or design. I try to ensure my work is scalable and secure in all facets. I am constantly learning and growing as a developer.",
        perBio:"Personally I have just welcomed a child to the world and along with my fiancée  we are starting to round out our little family." +
                " I make sure I pour my passion into anything I do including cooking , video games and sports. " +
                "I’m looking forward to getting back out onto the soccer fields as soon as possible and spend the time creating healthy and delicious food whenever I have the chance."})
}));

module.exports = router;