require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken')
const path = require('path');
const {Sequelize} = require('sequelize');
const models = require('./models');
const fetch = require("node-fetch");
const {API_KEY} = process.env;


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

server.post('/login', async (req, res) => {

  const {password, username} = req.body
    

    const withCreds = {

where: {
password,
login: username

}

    };

    const user = await
    models.Customer.findOne(withCreds)
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

server.get("/events", async (req, res) => {
  const {keyword, postalCode} = req.query;
 // const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`;
const url = `https://app.ticketmaster.com/discovery/v2/events.json? size=1,countryCode=US&apikey=${API_KEY}&keyword=${keyword}&postalCode=${postalCode}`;

  const response = await fetch(url);
  const data = await response.json();

      res.json( data )
})

server.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname + '/react-ui/build/index.html'));
})

server.listen(PORT, () => {
  console.log(`The server is listening at port ${PORT}`);
});