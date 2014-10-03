//=======================================
//var awesomeThoughts = "I am Robin and I am AWESOME!";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);
//console.log(funThoughts);
//========================================
// create variable 
var name = "Chien-Pin Chen";
var role = "Robotic Engineer";

// replace
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

// add to right place
//$("#header").append(formattedName);
//$("#header").append(formattedRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//=========================================
// add bio array object
/*var contact_info = "chienpinchen@gmail.com";
var pic_URL = "images/me.jpg";
var well_msg = "Hola";
var skills = ["Robotics", "C++", "MATLAB", "Python"];

var bio = {"name" : name, "role" : role, 
"picture_URL" : pic_URL, "Wellcome_Message" : well_msg, 
"skills" : skills};

var work = {};
work.position = "Engineer";
work.employer = "PMC";
work.years = 2;
work.city = "Taichung";*/

/*var education = {};
education["name"] = "Columbia University";
education["year"] = "2010";
education["city"] = "New York";

$("#main").append(bio.name);
$("#main").append(work["position"]);
$("#main").append(education.name);*/
//===========================================
var bio = {
	"name" : "Chien-Pin Chen",
	"role" : "Robotic Engineer",
	"contacts" : {
		"mobile" : "201-314-0603",
		"email" : "chienpinchen@gmail.com",
		"github" : "RobinCPC",
		"location" : "Taiwan"
	},
	"WelcomeMessage" : "Hola",
	"skills" : [
		"Robotics", "C++", "MATLAB", "Python"
	],
	"bioPic" : "images/my.jpg"
}

var education = {
	"schools" : [
		{
			"name" : "National Taiwan University",
			"city" : "Taipei, Taiwan",
			"degree" : "BS",
			"major" : ["Mechanical Engineer"],
			"dates" : 2007
		},
		{
			"name" : "Columbia University",
			"city" : "New York City, New York, US",
			"degree" : "MS",
			"major" : ["Mechanical Engineer"],
			"dates" : 2011
		}
	]
	,
	"onlineCOurses" : [
	{
		"title" : "JavaScript Basic",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "http://www.udacity.com/course/ud804"
	}
	]
}

var work = {
	"jobs" : [
	{
		"employer" : "PMC",
		"title" : "Engineer",
		"dates" : "Aug. 2012 - Present",
		"description" : ""
	},
	{
		"employer" : "National Taiwan University",
		"title" : "Research Assistant",
		"dates" : "Jan. 2009 - Jul. 2010",
		"description" : ""
	}
	]
}

var projects = {
	"projects" : "Demonstrate the application of 14-axis Dual-Arm Robot",
	"dates" : "2014",
	"description" : "As a member of developing team, I was in charge of",
	"video" : [
		"https://www.youtube.com/watch?v=C8_pQGrsqw8"
	]
}
