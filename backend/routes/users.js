var express = require('express');
var router = express.Router();
const mysql = require("mysql2");
const cors = require('cors');

router.use(cors({
  origin: "*"
}))

/* GET users listing. */
router.get('/', function(req, res, next) {

  req.app.locals.con.connect((err) => {
    if(err) {
      console.log(err);
    }

    let sql =`SELECT * FROM notes.users;`
    let sql2 = `SELECT * FROM notes.usernotes;`

    req.app.locals.con.query(sql2, (err, result) => {
      if(err) {
        console.log(err);
      }

      console.log("result", result);
      res.send(result);

    })

  })
  
});

//Skapa ny användare
router.post('/newuser', function(req, res, next) {

  req.app.locals.con.connect((err) => {
    if(err) {
      console.log(err);
    }

    let newName = req.body.userName;
    let newPassword = req.body.password;

    let sql =`INSERT INTO notes.users (userName, password) VALUES ("${newName}", "${newPassword}");`
    

    req.app.locals.con.query(sql, (err, result) => {
      if(err) {
        console.log(err);
      }

      console.log("result", result);
      res.send(result);

    })

  })
  
});


//Autentisera användare
router.post('/login', function(req, res, next) {

  req.app.locals.con.connect((err) => {
    if(err) {
      console.log(err);
    }

    let loginName = req.body.userName;
    let loginPassword = req.body.password;
   
    let sql =`SELECT userId FROM notes.users WHERE userName = "${loginName}" AND password = "${loginPassword}";`

    req.app.locals.con.query(sql, (err, result) => {
      if(err) {
        console.log(err);
      } 
      
      if (result.length == 0) {
        res.status(401)
        console.log(result);
        res.send("Wrong username or password");
        // throw new Error("Invalid credentials");
      } else {
        console.log("result", result);
        res.send(result);
      }

    })

  })
  
});

//Visa användarens alla dokument
router.post('/documents', function(req, res, next) {

  req.app.locals.con.connect((err) => {
    if(err) {
      console.log(err);
    }

    let loginId = req.body.userId;    
   
    let sql =`SELECT * FROM notes.usernotes WHERE userId = ${loginId};`

    req.app.locals.con.query(sql, (err, result) => {
      if(err) {
        console.log(err);
      } 
      
      if (result.length == 0) {
        res.status(401)
        console.log(result);
        res.send("Somethig went wrong!");        
      } else {
        console.log("result", result);
        res.send(result);
      }

    })

  })
  
});


//Visa valt dokument
router.post('/document', function(req, res, next) {

  req.app.locals.con.connect((err) => {
    if(err) {
      console.log(err);
    }

    let note = req.body.noteId;    
   
    let sql =`SELECT * FROM notes.usernotes WHERE noteId = ${note};`

    req.app.locals.con.query(sql, (err, result) => {
      if(err) {
        console.log(err);
      } 
      
      if (result.length == 0) {
        res.status(401)
        console.log(result);
        res.send("Somethig went wrong!");
        // throw new Error("Invalid credentials");
      } else {
        console.log("result", result);
        res.send(result);
      }

    })

  })
  
});


//Skapa ett nytt document
router.post('/newdocument', function(req, res, next) {

  req.app.locals.con.connect((err) => {
    if(err) {
      console.log(err);
    }

    let newNote = req.body.note;
    let newNoteName = req.body.noteName;
    let id = req.body.userId;

    let sql =`INSERT INTO notes.usernotes (note, noteName, userId) VALUES ("${newNote}", "${newNoteName}", ${id});`
    

    req.app.locals.con.query(sql, (err, result) => {
      if(err) {
        console.log(err);
      }

      console.log("result", result);
      res.send(result);

    })

  })
  
});


//Uppdatera document
router.patch('/editdocument', function(req, res, next) {

  req.app.locals.con.connect((err) => {
    if(err) {
      console.log(err);
    }

    let newNote = req.body.note;
    let newNoteName = req.body.noteName;
    let id = req.body.userId;
    let nId = req.body.noteId;

    let sql =`UPDATE notes.usernotes SET note = "${newNote}", noteName = "${newNoteName}" WHERE userId = ${id} AND noteId = ${nId};`
    

    req.app.locals.con.query(sql, (err, result) => {
      if(err) {
        console.log(err);
      }

      console.log("result", result);
      res.send(result);

    })

  })
  
});

module.exports = router;
