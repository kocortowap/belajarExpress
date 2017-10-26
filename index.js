const express = require('express');
const logger = require('module');
const debug = require('debug');
const app = express();


const port = process.env.port || 3000;

app.use(express.static('public'));
app.get('/', function(req,res){
    res.send('Hello World')
});
app.get('/anjungan', function(req,res){
    res.sendFile(__dirname + '/public/anjungan.html');
})

app.listen(port, function(){
    console.log(`Start service on port ${port}`);
})