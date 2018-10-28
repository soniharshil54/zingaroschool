var express = require('express');
const moment = require('moment');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://zingaro:zingaro123@schooltest-ppz5i.mongodb.net/school?retryWrites=true');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we are connected");
});

let Parents = require('./models/parent');
let Classes = require('./models/class');
let Schooladmins = require('./models/schooladmin');

app.use(express.json());











app.get('/parents',function(req,res){
    Parents.find({}, function(err,parents){
        if(err){
            console.log(err);
        }
        else{
            console.log(parents);
            res.send(parents);
        }
    })
})

app.get('/parents/:pid/:pw',function(req,res){
    let idgot = req.params.pid;
    let pword = req.params.pw;
    Parents.find({pid: idgot,password: pword}, function(err,parents){
        if(err){
            console.log(err);
        }
        else{
            console.log(parents);
            res.send(parents);
        }
    })
})

app.get('/parents/leaves/:pid',function(req,res){

    let idgot = req.params.pid;
    Parents.findOne({pid: idgot}, function(err,parents){
        if(err){
            console.log(err.message);
        }
        else{
            res.send(parents.leave);
        }
    })
})

app.put('/parents/reqleaves/:pid',function(req,res){
   let title = req.body.title;
   let content = req.body.content;
   let leaveObj = {
       date:moment(new Date()).format('DD/MM/YYYY'),
       title:title,
       data:content
   };
  // leaveObj = JSON.stringify(leaveObj);
   console.log(leaveObj);
    let idgot = req.params.pid;
    Parents.findOne({pid: idgot}, function(err,parents){
        if(err){
            console.log(err);
        }
        else{
            parents.leave.push(leaveObj)
            parents.save();
            res.send(parents.leave);
        }
    })
})

app.get('/parents/fees/:pid',function(req,res){

    let idgot = req.params.pid;
    Parents.findOne({pid: idgot}, function(err,parents){
        if(err){
            console.log(err);
        }
        else{
            res.send(parents.fees);
        }
    })
})

app.get('/parents/attendance/:pid',function(req,res){

    let idgot = req.params.pid;
    Parents.findOne({pid: idgot}, function(err,parents){
        if(err){
            console.log(err);
        }
        else{
            res.send(parents.attendance);
        }
    })
})



app.get('/parents/result/:pid',function(req,res){

    let idgot = req.params.pid;
    Parents.findOne({pid: idgot}, function(err,parents){
        if(err){
            console.log(err);
        }
        else{
            res.send(parents.result);
        }
    })
})


app.get('schooladmin',function(req,res){
    Schooladmins.find({}, function(err,schooladmins){
        if(err){
            console.log(err);
        }
        else{
            console.log(schooladmins)
            res.send(schooladmins);
        }
    })
})



app.get('/classes',function(req,res){
    Classes.find({}, function(err,classes){
        if(err){
            console.log(err);
        }
        else{
            res.send(classes);
        }
    })
})

app.get('/',function(req,res){
    console.log("app is working");
    res.end("school rocks");
});


app.get('/parents/homework/:pid',function(req,res){

    let idgot = req.params.pid;
    Parents.findOne({pid: idgot}, function(err,parents){
        if(err){
            console.log(err);
        }
        
        else{
            let cid = parents.classid;
            Classes.findOne({classid:cid},function(err,classes){
                if(err){
                    console.log(err);
                }
                else{
                    res.send(classes.homework);
                }
            })
        }
    })
})




app.listen(process.env.PORT || 5000,function(){
	console.log("listening to port 5000");
});



   
  