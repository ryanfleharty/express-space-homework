// DEPENDENCIES
const express = require('express');
const app = express();
const marsStuff = require('./models/marsMissions');


// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed DONE
// views folder has not been created DONE
// views/missions folder has not been created DONE

// PORT
const port = 3000;

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server DONE
const marsMissions = [
  {
    name: "Curiosity",
    launchDate: "26 Nov 2011",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Opportunity",
    launchDate: "8 Jul 2003",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Spirit",
    launchDate: "10 Jun 2003",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Sojourner",
    launchDate: "4 Dec 1996",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Rosetta",
    launchDate: "2 Mar 2004",
    operator: "ESA",
    missionType: "Gravity Assist",
    img: ""
  }
];

// app.get('/missions', (req, res)=>{
//   // const missionName = marsMissions[req.params.name]
//   // res.render('index.ejs', {
//         res.send(`This is the new route for a new cat`)

//       // 'missionName': missionName
//   // })
// })


app.get('/missions', (req,res)=>{
  res.render('missions/index.ejs', {
      'marsMissions': marsMissions
  })
})


app.get('/missions/:id', (req,res)=>{
  res.render('missions/show.ejs', {
    'marsMissions': marsMissions,
    'thisMission': marsMissions[req.params.id],
  })
})



// INDEX Route
// send data to 'missions/index.ejs' view DONE
// the view should display just the names of each mission DONE
// display the mission names as <li> in a <ul> with the class name "missions" DONE

// SHOW Route
// send data to 'missions/show.ejs' view SETUP
// the view should display all the data for a single mission



// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
