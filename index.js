const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;


// Set the template engine as pug
app.set("view engine", "pug");

// Set the template engine as pug
app.set("view engine", "pug");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// For serving static files
app.use('/static', express.static('static'))


// to extract data from the website in the js file->
app.use(express.urlencoded());

// Our pug demo endpoint
// rendering pug fuile template-->

app.get("/", (req, res)=>{

  const params = {"title" : "dogie", "content" : "gobi is the best dog.", "message" : "Get this gym membership for 60$ - Fill this form now!"}
  res.status(200).render("index.pug", params);



});

// post request in index.js file->

app.post("/", (req, res)=>{

  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const address = req.body.address;
  const more = req.body.more;


  // console.log(name);
  // console.log(age);
  // console.log(gender);
  // console.log(address);
  // console.log(more);
  const vars = `my name : ${name} , age is : ${age}, gender is : ${gender}, address is ${address} and description of mine is : ${more}`;



  // write a txt file and passing the vars in it->

  fs.writeFileSync("output.txt", vars);
  // after submitting form showing in the html form of subbmission message->

  const params = {"message" : "form submitted successfully."};
  res.status(200).render("index.pug", params);




});

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
