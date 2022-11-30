const express=require("express");
const mysql=require("mysql");
const session=require("express-session");
const mySQLStore=require("express-mysql-session")(session);
var oc = require('orthanc-client');
const { json } = require("express");
var fs = require('fs');

//var dicomFileAsBuffer = fs.readFileSync('1.');



const connect=require('./db.js');
const { isArrayBuffer } = require("util/types");


const app=express();
app.use(express.json())





let client= new oc({
    url:"http://localhost:8042",
    
    

});
//farm 96

//
//'b7fb1fb4-142e5a15-333ae197-298b1626-11f8833b'

app.get('/',(req,res)=>{

    
   client.instances.getAll()
    .then(function(ress) {

        res.send(ress);
      //  const b64=Buffer.from(ress).toString('base64');
       // const typee='image/png';

      //  let imgg=ress.json;
       // console.log(ress);
       // res.send(`<img src="data:${typee};base64,${b64}"/>`);
    })
    .catch(function(err) {
        console.log(err,"555555");
    });
    
})

app.get('/index',(req,res)=>{
res,send("HI MUTEB");
})







   


    







app.listen(3000,()=>{
    console.log('Working');
})
