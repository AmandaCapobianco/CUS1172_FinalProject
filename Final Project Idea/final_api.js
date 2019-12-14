var express = require("express");
var app = express();
app.set("view engine","jade")

var data = {

  courses: [
    {
      code:
      "NET1011",
      title:
      "INTRODUCTION TO NETWORKS",
      instructor:
      "Greenidge, Maxine",
      day:
      "W",
      type:
      "Lecture/Lab",
      seats:
      0,
    },
    {
      code:
      "NET1015",
      title:
      "ROUTING & SWITCHING ESSENTIALS",
      instructor:
      "Greenidge, Maxine",
      day:
      "W",
      type:
      "Lecture/Lab",
      seats:
      0,
    },
    {
      code:
      "NET1061",
      title:
      "ADVANCED NETWORK ROUTING",
      instructor:
      "Greenide, Maxine",
      day:
      "S",
      type:
      "Lecture/Lab",
      seats:
      25,
    },
    {
      code:
      "NET1091",
      title:
      "NETWORKING INTERNSHIP",
      instructor:
      "Yadav, Nikhil",
      day:
      "None",
      type:
      "Internship",
      seats:
      0,
    },
    {
      code:
      "CSS1005",
      title:
      "FUNDAMENTALS OF CYBER SECURITY",
      instructor:
      "Otero, Juan",
      day:
      "W",
      type:
      "Lecture/Lab",
      seats:
      6,
    },
    {
      code:
      "CSS1006",
      title:
      "MGT OF INFORMATION SECURITY",
      instructor:
      "Dick, Geoffrey",
      day:
      "MR",
      type:
      "Lecture/Lab",
      seats:
      0,
    },
    {
      code:
      "CSS1005",
      title:
      "FUNDAMENTALS OF CYBER SECURITY",
      instructor:
      "Troja, Erald",
      day:
      "F",
      type:
      "Hybrid",
      seats:
      0,
    },
    {
      code:
      "CSS1008",
      title:
      "HEALTHCARE INFO SECURITY",
      instructor:
      "Naseem, Sajed",
      day:
      "W",
      type:
      "Hybrid",
      seats:
      16,
    },
    {
      code:
      "CSS1015",
      title:
      "WIRELESS SECURITY",
      instructor:
      "Schmeelk, Suzanna",
      day:
      "M",
      type:
      "Hybrid",
      seats:
      11,
    },

    {
      code:
      "CSS1012",
      title:
      "NETWORK PERIMETER SECURITY",
      instructor:
      "Otero, Juan",
      day:
      "M",
      type:
      "Hybrid",
      seats:
      16,
    },
    {
      code:
      "IT1011",
      title:
      "INFO TECHNOLOGY FOR BUSINESS",
      instructor:
      "Dick, Geoffrey",
      day:
      "MR",
      type:
      "Lecture/Lab",
      seats:
      19,
    },
    {
      code:
      "MTH1008",
      title:
      "MATRIX METHODS",
      instructor:
      "Laneri, Peter",
      day:
      "TF",
      type:
      "Lecture",
      seats:
      6,
    },
    {
      code:
      "MTH1003",
      title:
      "INTRO TO COLLEGE MATH I	",
      instructor:
      "Achtziger, Joseph",
      day:
      "TF",
      type:
      "Lecture",
      seats:
      0,
    },
    {
      code:
      "MTH1009",
      title:
      "CALCULUS I",
      instructor:
      "Cerulli, Thomas",
      day:
      "MR",
      type:
      "Lecture",
      seats:
      0,
    },
    {
      code:
      "MTH1018",
      title:
      "DIFFERENTIAL EQUATIONS",
      instructor:
      "Fechter, Ronald",
      day:
      "W",
      type:
      "Hybrid",
      seats:
      0,
    },
    {
      code:
      "CUS1172",
      title:
      "WEB PAGE GRAPHICS",
      instructor:
      "Christoforou, Christoforos",
      day:
      "R",
      type:
      "Hybrid",
      seats:
      0,
    },
    {
      code:
      "CUS1116",
      title:
      "COMPUTER PROG FUND II",
      instructor:
      "DeBello, Joan",
      day:
      "MR",
      type:
      "Lecture/Lab",
      seats:
      0,
    },
    {
      code:
      "CUS1126",
      title:
      "INTRO TO DATA STRUCTURES",
      instructor:
      "Yadav, Nikhil",
      day:
      "MR",
      type:
      "Lecture/Lab",
      seats:
      8,
    },
    {
      code:
      "CUS1150",
      title:
      "SYSTEMS PROGRAMMING IN LINUX",
      instructor:
      "MacKellar, Bonnie",
      day:
      "MR",
      type:
      "Lecture/Lab",
      seats:
      7,
    },
    {
      code:
      "CUS1185",
      title:
      "DATA SECURITY & CRYPTOGRAPHY",
      instructor:
      "Troja, Erald",
      day:
      "MR",
      type:
      "Lecture",
      seats:
      0,
    }
  ]
}
//array of course objects hardcoded in json

  app.use('/resource', express.static('myresources'))

  //now want to serve this data to be consumed by our api.
  app.get('/courses', function(req,res){
  res.render('index');

})

//Query by course code
app.get('/courses/qcode/:code', function(req,res){
  //get the query parameter
  qcode = req.params['code']
  //Filter the data in the array
  var filtered_data = data["courses"].filter(d => d.code.toLowerCase().includes(qcode))

  res.json(filtered_data);
})

//Query by course title
  app.get('/courses/qtitle/:title', function(req,res){
  qtitle = req.params['title']
  var filtered_data = data["courses"].filter(d => d.title.toLowerCase().includes(qtitle))
  res.json(filtered_data);
})

//Query by course Instructor's name.
app.get('/courses/qinstructor/:instructor', function(req,res){
qinstructor = req.params['instructor']
var filtered_data = data["courses"].filter(d => d.instructor.toLowerCase().includes(qinstructor))
res.json(filtered_data);
})


//Query by day the course is offered.
app.get('/courses/qday/:day', function(req,res){
qday = req.params['day']
var filtered_data = data["courses"].filter(d => d.day.toLowerCase().includes(qday))
res.json(filtered_data);
})

//Query by course type
app.get('/courses/qtype/:type', function(req,res){
qtype = req.params['type']
var filtered_data = data["courses"].filter(d => d.type.toLowerCase().includes(qtype))
res.json(filtered_data);
})

//Query by seat availability //only display seats > 0
app.get('/courses/qseats/:seats', function(req,res){
qseats = req.params['seats']
var filtered_data = data["courses"].filter(d => d.seats > 0)
res.json(filtered_data);
})

//Query by combination of two parameters (instructor name[qinstructor] and coursecode [qcode])
app.get('/courses/qinstructor/:instructor/qcode/:code', function(req,res){
  qinstructor = req.params['instructor']
  qcode = req.params['code']
  var filtered_data = data["courses"].filter(d => d.instructor.toLowerCase().includes(qinstructor) && d.code.toLowerCase().includes(qcode))
  res.json(filtered_data);
})


//root of the website
app.get('/', function(req,res) {
  res.render('index');
});


  app.listen(3000, function()
  {
    console.log("This is a web appliction running 3000")
  })
