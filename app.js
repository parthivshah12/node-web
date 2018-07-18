var express =require('express');
var hbs = require('hbs');
var port =process.env.PORT || 3000 ;
var app = express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear()
});
app.use(express.static('D:/node-web-server'));
app.get('/',(req,res)=>{
    res.send({
        page:'new page',
        name : 'parthiv'
});
});


app.get('/projects',(req,res)=>{
    res.render('projects.hbs',{
        pagetitle : 'Projects',
       // year : new Date().getFullYear()
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pagetitle : 'pageTitle',
       // year : new Date().getFullYear()
    });
});
app.listen(port,()=>{
    console.log('server started on' +port);
});