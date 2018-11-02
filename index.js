const express = require('express');
const port = 8080;
const app = express();
const {getUser}= require('./api');
const {getCity}= require('./api');
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static('static_files'));
app.use(bodyparser.json())

const sendError = (err, res) => { 
    res.send("something went wrong!!!");
}


app.get('/user/:city', (req, res) => {
    let city = req.params.city;
    console.log("city"+req.params.city);
    getCity(city, (err, result)=>{
        if(err){
            sendError(err);
        } else{
            res.send(JSON.stringify(result));
        }
    })    
});

// app.get('/user/:id', (req, res) => {
//     let id = req.params.id;
//     console.log(id);
//     getUser(id, (err, data)=>{
//         if(err){
//             sendError(err);
//         } else{
//             console.log(data);
//             res.send(JSON.stringify(data));
//         }
//     })    
// });
app.listen(port,() =>
console.log("Example app listening"));


