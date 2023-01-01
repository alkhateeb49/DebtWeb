const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const superAgent = require('superagent');
const override = require('method-override');
const { query } = require('express');
//
dotenv.config();
PORT=process.env.PORT;
const app=express();
app.use(cors());
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.use(override('_method'));
app.set('view engine','ejs');


app.get('/',home); 
function home(req,res){
    let url='https://api.covid19api.com/world/total';
    superAgent.get(url).then(data=>{
        res.render('pages/index',{data:data.body});

    });
}




app.listen(PORT, () => {
    console.log("App runing on : "+ PORT);
  });