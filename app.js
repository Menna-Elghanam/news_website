const express=require('express');
const app=express();
const body_parser=require('body-parser')
const port=5000;

// listining on port 5000
app.listen(port,()=>{console.log(`listning on port ${port}`)})
// serve ststic file 
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
// temlating engine 
app.set('views','./src/views/partials')
app.set('view engine','ejs')
//bodyparser
app.use(body_parser.urlencoded({extended:true}))
// routes
const news_router=require('./src/routes/news')
app.use('/',news_router)
app.use('/article',news_router)