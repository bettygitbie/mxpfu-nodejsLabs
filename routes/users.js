const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  // optional jumbled out put 
  //res.send(users)//This line is to be replaced with actual return value
    res.send(JSON.stringify({users},null,4));
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Copy the code here
  const email = req.params.email;
  let selected_users = users.filter((user) => user.email === email);
  res.send(selected_users)//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
  users.push({"firstName":req.query.firstName,"lastName":req.query.lastName,"DOB":req.query.DOB,"email":req.query.email})
  res.send("The user" + (' ') + req.query.firstName + " has been added!")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  const email = req.params.email;
  let selected_users = users.filter((user) => user.email === email);
  if(selected_users.length > 0){
    let selected_user = selected_users[0];
    let DOB2 = req.query.DOB;
    let fN = req.query.firstName;
    let lN = req.query.lastName;
    if(DOB2) {
        selected_user.DOB = DOB2
    }
    if(fN) {
        selected_user.firstName = fN
    }
    if(lN) {
        selected_user.lastName = lN
    }
    /*
        Include code here similar to the one above for other attibutes
        */
    users = users.filter((user) => user.email != email);
    users.push(selected_user);
    res.send(`User with the email  ${email} updated.`); 
  }
  else{
    res.send("Unable to find user")//This line is to be replaced with actual return value
  }
  
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  const email = req.params.email;
  users = users.filter((user) => user.email != email); //assign the list without the email
  res.send(`User with ${email} deleted!!`)//This line is to be replaced with actual return value
});

module.exports=router;
