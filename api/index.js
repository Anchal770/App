const fs = require('fs');
const path = require('path');
const jsonPath = path.resolve(__dirname, '../data/users.json');

const getUser = (id, cb) =>{
    return fs.readFile(jsonPath, 'utf8',(err, data)=>{
        if(err){
            cb(err,undefined)
        }

        data = JSON.parse(data);
        if(data && data.length>0){ 
            let result;
            for(var i=0; i<data.length; i++) {
                if (data[i].id == id){
                    result = data[i];
                }
            }
            cb(undefined, result);
        }
    });   
}


const getCity = (city, cb) =>{
    return fs.readFile(jsonPath, 'utf8',(err, result)=>{
        if(err){
            cb(err,undefined)
        }

        data = JSON.parse(result);
        if(data && data.length>0){ 
            let result;
            for(var i=0; i<data.length; i++) {
                if (data[i].city == city){
                    result = data[i];
                }
            }
            cb(undefined, result);
        }
    });   
}
     
module. exports = {
    getUser,
    getCity
}