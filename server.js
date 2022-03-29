require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken')
const path = require('path');

const server = express();
const { PORT } = process.env

global.users = [
  { username: 'johndoe', password: 'password' },
  { username: 'marydoe', password: 'password' }
]

server.use(express.json())

server.post('../componenents/welcome', (req, res) => {

  const username = req.body.username
    const password = req.body.password

    const user = users.find((user) => user.username == username && user.password == password)
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
  res.sendFile(path.resolve(_dirname + './react-ui/build/index.html'));
})

server.listen(PORT, () => {
  console.log(`The server is listening at port ${PORT}`);
});