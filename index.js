var express = require('express');
var app = express();

app.use(express.json());



// var creds = {
//     "status": "ok",
//     "pid": "p2103"
// }
	

// var creds = [
// 	{
// 		id: 'p2103',
// 		ps: '1234'

// 	},
// 	{
// 		id:'p2132',
// 		ps:'5678'
// 	},
// 	{
// 		id:'p3122',
// 		ps:'4321'
// 	}
// ]



var school = {
    "gallary":["https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/373488/pexels-photo-373488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/207665/pexels-photo-207665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/159823/kids-girl-pencil-drawing-159823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"],
    "notice":[
        {
            "date":"12/10/1018",
            "title":"about holiday",
            "data":"there will be holiday on 10 to 22 october"
        },
        {
            "date":"05/09/1018",
            "title":"Teachers Day",
            "data":"we are celebrating it"
        },
        {
            "date":"02/10/1018",
            "title":"about holiday",
            "data":"School will be not functioning due to Gandhi Jayanti"
        }
    ]
};


var testparent = {
    "pid":"p2103",
        "parentname": "rajubhai baldevbhai patel",
        "studentname": "milan rajubhai patel",
        "attendance":[
            {
                "month":"january",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"february",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"march",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"april",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"may",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"june",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"july",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"august",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"september",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"october",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"november",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"december",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            }
            
        ],
        "result": {
            "finalexam": [
                {
                   "subject":"maths",
                    "marks": "83"
                },
                {
                    "subject":"science",
                    "marks": "87"
                },
                {
                    "subject":"english",
                    "marks": "75"
                },
                {
                    "subject":"gujarati",
                    "marks": "68"
                },
                {
                    "subject":"hindi",
                    "marks": "85"
                }


            ],
            "semester1": [
                {
                   "subject":"maths",
                    "marks": "87"
                },
                {
                    "subject":"science",
                    "marks": "81"
                },
                {
                    "subject":"english",
                    "marks": "79"
                },
                {
                    "subject":"gujarati",
                    "marks": "82"
                },
                {
                    "subject":"hindi",
                    "marks": "94"
                }


            ]
        }

}

var parents=[
                      {
        "pid":"p2103",
        "parentname": "rajubhai baldevbhai patel",
        "studentname": "milan rajubhai patel",
        "fees":{
            "total":"20000",
            "paid":"12000",
            "remaining":"8000"
        },
        "leave":[
            {
                "date":"12/10/1018",
                "title":"Request for Leave",
                "data":"At Friday there is function in our home"
            },
            {
                "date":"06/10/1018",
                "title":"Marriage at our house",
                "data":"My child will not be able to come on Tuesday"
            },
            {
                "date":"01/10/1018",
                "title":"Leave for Sickness",
                "data":"My child will not be able to come on Monday due to high fever"
            }
        ],
        "attendance":[
            {
                "month":"january",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"february",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"march",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"april",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"may",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"june",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"july",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"august",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"september",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"october",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"november",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"december",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            }
            
        ],
        "result": {
            "finalexam": [
                {
                   "subject":"maths",
                    "marks": "83"
                },
                {
                    "subject":"science",
                    "marks": "87"
                },
                {
                    "subject":"english",
                    "marks": "75"
                },
                {
                    "subject":"gujarati",
                    "marks": "68"
                },
                {
                    "subject":"hindi",
                    "marks": "85"
                }


            ],
            "semester1": [
                {
                   "subject":"maths",
                    "marks": "87"
                },
                {
                    "subject":"science",
                    "marks": "81"
                },
                {
                    "subject":"english",
                    "marks": "79"
                },
                {
                    "subject":"gujarati",
                    "marks": "82"
                },
                {
                    "subject":"hindi",
                    "marks": "94"
                }


            ]
        }
    },
    {
        "pid":"p2104",
        "parentname": "kanubhai ramjibhai dhakan",
        "studentname": "vivek kanubhai dhakan",
        "fees":{
            "total":"20000",
            "paid":"11000",
            "remaining":"9000"
        },
        "leave":[
            {
                "date":"12/10/1018",
                "title":"Request for Leave",
                "data":"At Friday there is function in our home"
            },
            {
                "date":"06/10/1018",
                "title":"Marriage at our house",
                "data":"My child will not be able to come on Tuesday"
            },
            {
                "date":"01/10/1018",
                "title":"Leave for Sickness",
                "data":"My child will not be able to come on Monday due to high fever"
            }
        ],
        "attendance":[
            {
                "month":"january",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"february",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"march",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"april",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"may",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"june",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"july",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"august",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"september",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"october",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"november",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"december",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            }
            
        ],
        "result": {
            "finalexam": [
                {
                   "subject":"maths",
                    "marks": "83"
                },
                {
                    "subject":"science",
                    "marks": "87"
                },
                {
                    "subject":"english",
                    "marks": "75"
                },
                {
                    "subject":"gujarati",
                    "marks": "68"
                },
                {
                    "subject":"hindi",
                    "marks": "85"
                }


            ],
            "semester1": [
                {
                   "subject":"maths",
                    "marks": "87"
                },
                {
                    "subject":"science",
                    "marks": "81"
                },
                {
                    "subject":"english",
                    "marks": "79"
                },
                {
                    "subject":"gujarati",
                    "marks": "82"
                },
                {
                    "subject":"hindi",
                    "marks": "94"
                }


            ]
        }
    },
    {
        "pid":"p2105",
        "parentname": "ghanshyambhai jivrajbhai jogani",
        "studentname": "praveg ghanshyambhai jogani",
        "fees":{
            "total":"20000",
            "paid":"7000",
            "remaining":"13000"
        },
        "leave":[
            {
                "date":"12/10/1018",
                "title":"Request for Leave",
                "data":"At Friday there is function in our home"
            },
            {
                "date":"06/10/1018",
                "title":"Marriage at our house",
                "data":"My child will not be able to come on Tuesday"
            },
            {
                "date":"01/10/1018",
                "title":"Leave for Sickness",
                "data":"My child will not be able to come on Monday due to high fever"
            }
        ],
        "attendance":[
            {
                "month":"january",
                "attands":"[2,2,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"february",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"march",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"april",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"may",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"june",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"july",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"august",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"september",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"october",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"november",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            },
            {
                "month":"december",
                "attands":"[1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2,1,0,2,1,2]"
            }
            
        ],
        "result": {
            "finalexam": [
                {
                   "subject":"maths",
                    "marks": "83"
                },
                {
                    "subject":"science",
                    "marks": "87"
                },
                {
                    "subject":"english",
                    "marks": "75"
                },
                {
                    "subject":"gujarati",
                    "marks": "68"
                },
                {
                    "subject":"hindi",
                    "marks": "85"
                }


            ],
            "semester1": [
                {
                   "subject":"maths",
                    "marks": "87"
                },
                {
                    "subject":"science",
                    "marks": "81"
                },
                {
                    "subject":"english",
                    "marks": "79"
                },
                {
                    "subject":"gujarati",
                    "marks": "82"
                },
                {
                    "subject":"hindi",
                    "marks": "94"
                }


            ]
        }
    }
    

];

var classes = [
    {
        "classid":"c21",
        "standard":"5",
        "division":"A",
        "studentstrength":"63",
        "timetable":"https://image.slidesharecdn.com/juniorhighschoolofoichalia2ndgradetimetable-130222120939-phpapp02/95/junior-high-school-of-oichalia-2nd-grade-timetable-1-638.jpg?cb=1361535020",
        "homework":[
            {
                "date": "21/09/2018",
                "subject":"science",
                "content":"exercize:3 from chapter 3"
            },
            {
                "date": "21/09/2018",
                "subject":"maths",
                "content":"fist 3 sums from exercize2 of chapter 4"
            },
            {
                "date": "20/09/2018",
                "subject":"english",
                "content":"write gujarati translation of chapter 7"
            }
        ]
    },
    {
        "classid":"c22",
        "standard":"5",
        "division":"B",
        "studentstrength":"67",
        "timetable":"https://image.slidesharecdn.com/juniorhighschoolofoichalia2ndgradetimetable-130222120939-phpapp02/95/junior-high-school-of-oichalia-2nd-grade-timetable-1-638.jpg?cb=1361535020",
        "homework":[
            {
                "date": "21/09/2018",
                "subject":"science",
                "content":"exercize:3 from chapter 3"
            },
            {
                "date": "21/09/2018",
                "subject":"maths",
                "content":"fist 3 sums from exercize2 of chapter 4"
            },
            {
                "date": "20/09/2018",
                "subject":"english",
                "content":"write gujarati translation of chapter 7"
            }
        ]
    },
    {
        "classid":"c23",
        "standard":"6",
        "division":"A",
        "studentstrength":"59",
        "timetable":"https://image.slidesharecdn.com/juniorhighschoolofoichalia2ndgradetimetable-130222120939-phpapp02/95/junior-high-school-of-oichalia-2nd-grade-timetable-1-638.jpg?cb=1361535020",
        "homework":[
            {
                "date": "21/09/2018",
                "subject":"science",
                "content":"exercize:3 from chapter 3"
            },
            {
                "date": "21/09/2018",
                "subject":"maths",
                "content":"fist 3 sums from exercize2 of chapter 4"
            },
            {
                "date": "20/09/2018",
                "subject":"english",
                "content":"write gujarati translation of chapter 7"
            }
        ]
    },
    {
        "classid":"c24",
        "standard":"7",
        "division":"A",
        "studentstrength":"62",
        "timetable":"https://image.slidesharecdn.com/juniorhighschoolofoichalia2ndgradetimetable-130222120939-phpapp02/95/junior-high-school-of-oichalia-2nd-grade-timetable-1-638.jpg?cb=1361535020",
        "homework":[
            {
                "date": "21/09/2018",
                "subject":"science",
                "content":"exercize:3 from chapter 3"
            },
            {
                "date": "21/09/2018",
                "subject":"maths",
                "content":"fist 3 sums from exercize2 of chapter 4"
            },
            {
                "date": "20/09/2018",
                "subject":"english",
                "content":"write gujarati translation of chapter 7"
            }
        ]
    }
]

// app.get('/',function(req,res){
// 	console.log("thats home!!!");
// 	res.end("this is home")
// })



app.get('/',function(req,res){
    console.log("app is working");
    res.end("school rocks");
});



app.get('/attendance/:pid',function(req,res){
    const parent = parents.find((c)=> c.pid === req.params.pid);



	res.send(parent.attendance);
});

app.get('/gallery',function (req,res) {
    res.send(school.gallary);
});



app.listen(4000,function(){
	console.log("listening to port 3000");
});

app.get('/homework/:cid',function (req,res) {
    const hclass = classes.find((c)=> c.classid === req.params.cid);
    res.send(hclass.homework);
});

app.get('/result/:exam/:pid',function (req,res) {
    const parent = parents.find((c)=> c.pid === req.params.pid);
    res.send(parent.result[req.params.exam]);
});

app.get('/timetable/:cid',function (req,res) {
    const ttclass = classes.find((c)=> c.classid === req.params.cid);
    res.send(ttclass.timetable);
});

app.get('/leave/:pid',function (req,res) {
    const parent = parents.find((c)=> c.pid === req.params.pid);
    res.send(parent.leave);
});

app.get('/fees/:pid',function (req,res) {
    const parent = parents.find((c)=> c.pid === req.params.pid);
    res.send(parent.fees);
});

app.post('/rleave/:pid',function (req,res) {
   let pid = req.params.pid;
   let title = req.body.title;
   let content = req.body.content;
   let leaveObj = {
       date:Date.now(),
       title:title,
       content:content
   };
   leaveObj = JSON.stringify(leaveObj);
   console.log(leaveObj);
   try {
       const parent = parents.find((c) => c.pid === req.params.pid);
       console.log(parent.leave);
       parent.leave.push(leaveObj);
       console.log(parent.leave);
       res.send("OK");
   }catch (e){
       console.log(e.message);
   }
});