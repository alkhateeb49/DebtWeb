const express = require('express');
require('dotenv').config()

const PORT=process.env.PORT || 8000;
const superagent = require('superagent');
let ejs = require('ejs');

const app=express();



app.get('/',home); 
function home(req,res){
    let url='https://debtapi.onrender.com/show';
    // superagent.get(url).then(data=>{
    //     res.render('pages/index',{data:data.body});
    // });

    superagent.get(url).then(data=>{
        res.status(200).send(data.body);
    });
}




app.listen(PORT, () => {
    console.log("App runing on : "+ PORT);
  });