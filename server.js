require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken')
const path = require('path');
const {Sequelize} = require('sequelize');

const db = new Sequelize('livejam_dev', 'postgres', 'august75', {
  host: 'localhost',
  dialect: 'postgres'
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
      })

  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const server = express();
const { PORT } = process.env

//CORS
server.use(function(req, res, next) {
  const allowList = [
    "http://localhost:3000",
  ];
  const origin = req.headers.origin;
  if (allowList.indexOf(origin) > -1) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, Origin, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "DELETE, GET, PATCH, POST, PUT");
  res.header("Access-Control-Allow-Credentials", true);

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});



//global.users = [
  //{ username: 'johndoe', password: 'password' },
  //{ username: 'marydoe', password: 'password' }
//]

server.use(express.json())

server.post('/login', (req, res) => {

  const username = req.body.username
    const password = req.body.password

    const user = db.Customer.find((user) => user.username == username && user.password == password)
  console.log(user)
    if (user) {
        
        const token = jwt.sign({ username: user.username }, 'SECRETKEY')
        res.json({ success: true, token: token })
    } else {
       
        res.json({ success: false, message: 'Not authenticated' })
    }

})



server.use(express.static(path.resolve(__dirname + '/react-ui/build')));

server.get('/heartbeat',(req, res) => {
    res.json({
"is": "working"
    })
});


server.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname + '/react-ui/build/index.html'));
})

server.listen(PORT, () => {
  console.log(`The server is listening at port ${PORT}`);
});