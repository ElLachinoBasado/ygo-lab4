const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/cydra', {
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
const matchupSchema = new mongoose.Schema({
  name: String,
  path: String,
  tier: String,
  bombrating: String,
  traprating: String,
  description: String
});

// Create a model for items in the museum.
const Matchup = mongoose.model('Matchup', matchupSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/public/images/" + req.file.filename
  });
});

app.delete("/api/matchups/:id", async(req,res) => {
  try {
    await Matchup.deleteOne({
      _id:req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    //console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/matchups/:id", async(req,res) => {
  try {
    var matchup = await Matchup.findOne({
      _id:req.params.id
    });        
    matchup.name = req.body.name;
    matchup.path = req.body.path;
    matchup.tier = req.body.tier;
    matchup.bombrating = req.body.bombrating;
    matchup.traprating = req.body.traprating;
    matchup.description = req.body.description;
    await matchup.save();    
    res.sendStatus(200);
  } catch (error) {
    //console.log(error);
    res.sendStatus(500);
  }
});

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/matchups', async (req, res) => {
  const matchup = new Matchup({
    name: req.body.name,
    path: req.body.path,
    tier: req.body.tier,
    bombrating: req.body.bombrating,
    traprating: req.body.traprating,
    description: req.body.description
  });
  try {
    await matchup.save();
    res.send(matchup);
  } catch (error) {
    //console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
app.get('/api/matchups', async (req, res) => {
  try {
    let matchups = await Matchup.find();
    res.send(matchups);
  } catch (error) {
    //console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
