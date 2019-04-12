// DEPENDENCIES
const express = require('express');
const app = express();

const marsMissions = require('./models/marsMissions');

// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;

app.get('/missions', (req,res)=>{
  res.render('index.ejs',{
    marsMissions: marsMissions
  })
})

app.get('/missions/:number', (req,res)=>{
  res.render('show.ejs',{
    mission: marsMissions[req.params.number],
  })
})


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission



// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
