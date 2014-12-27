//=======================================
//var awesomeThoughts = "I am Robin and I am AWESOME!";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);
//console.log(funThoughts);
//========================================


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
		"mobile" : "886-910-260-294",
		"email" : "chienpinchen@gmail.com",
		"github" : "RobinCPC",
		"blog" : "http://chienpinchen.blogspot.tw/",
		"location" : "Taiwan"
	},
	"WelcomeMessage" : "Hello! I am an engineer at Robotic Control Department of Precision Machinery Research Development Center in Taiwan. I am working on developing kinematic algorithms of robot arm and CAD-Based Application.",
	"skills" : [
		"Robotics", "C++", "MATLAB", "Python"
	],
	"bioPic" : "images/my.jpg"
};

var education = {
	"schools" : [
		{
			"name" : "National Taiwan University",
			"city" : "Taipei, Taiwan",
			"degree" : "BS",
			"major" : ["Mechanical Engineer"],
			"dates" : 2007,
			"url" : "http://www.ntu.edu.tw/"
		},
		{
			"name" : "Columbia University",
			"city" : "New York City, New York, US",
			"degree" : "MS",
			"major" : ["Mechanical Engineer"],
			"dates" : 2011,
			"url"	: "http://www.columbia.edu/"
		}
	]
	,
	"onlineCourses" : [
	{
		"title" : "JavaScript Basic",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "http://www.udacity.com/course/ud804"
	},
	{
		"title" : "Intro to Computer Science",
		"school" : "Udacity",
		"dates" : "2013",
		"url" : "https://www.udacity.com/course/cs101"
	}
	]
};

var work = {
	"jobs" : [
	{
		"employer" : "PMC",
		"title" : "Engineer",
		"location" : "Taichung, Taiwan",
		"dates" : "Aug. 2012 - Present",
		"description" : "Building controller for industrial robot arm",
		"url" : "http://www.pmc.org.tw/"
	},
	{
		"employer" : "National Taiwan University",
		"title" : "Research Assistant",
		"location" : "Taipei, Taiwan",
		"dates" : "Jan. 2009 - Jul. 2010",
		"description" : "Building robot eyes mechanism",
		"url" : "http://www.ntu.edu.tw/"
	}
	]
};

var projects = {
	"title" : "Demonstrate the application of 14-axis Dual-Arm Robot",
	"dates" : "Jan. 2014 - Present",
	"description" : " As a member of developing team, I was in charge of: 1. Building controlling algorithm of multi-robot cooperative function (program synchronization, mater-slave) 2. Developing kinematic algorithm of 7-axis (redundant) robot arm 3. Creating part of function in human machine interface (HMI) ",
	"url" : "http://chienpinchen.blogspot.tw/2014/08/pmc-14-axis-industrial-dual-arm-robot.html",
	"img" : ["images/PMC sync.jpg", "images/Dual_Arm UI.jpg"],
	"video" : [
		"https://www.youtube.com/watch?v=C8_pQGrsqw8"
	]
};

// create variable 
/*var name = "Chien-Pin Chen";
var role = "Robotic Engineer";

// replace
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

// add to right place
//$("#header").append(formattedName);
//$("#header").append(formattedRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//===================================================
// add picture
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

//===================================================
// add Wellcome message
var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);
$("#header").append(formattedMsg);

//===================================================
// add if statement
$("#header").append(HTMLskillsStart);
if (bio.skills.length > 0) {
	var formattedskill = HTMLskills.replace("%data%", bio.skills);
	$("#skills").append(formattedskill);
}*/

bio.display = function(){
	// Add name and role first
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	// add picture
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);
	// add Wellcome message
	var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);
	$("#header").append(formattedMsg);
	// add skills by if statement
	$("#header").append(HTMLskillsStart);
	if (bio.skills.length > 0) {
		var formattedskill = HTMLskills.replace("%data%", bio.skills);
		$("#skills").append(formattedskill);
	}

	// add top contact info
	var ConMob = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(ConMob);
	$("#footerContacts").append(ConMob);
	var ConMail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(ConMail);
	$("#footerContacts").append(ConMail);
	var ConGit = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(ConGit);
	$("#footerContacts").append(ConGit);
	var ConBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#topContacts").append(ConBlog);
	$("#footerContacts").append(ConBlog);
	var ConLoc = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(ConLoc);
	$("#footerContacts").append(ConLoc);
}

bio.display();

// add top contact info
//$("#topContacts").append(HTMLcontactGeneric);
/*var topConMob = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(topConMob);
var topConMail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(topConMail);
var topConGit = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(topConGit);
var topConBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#topContacts").append(topConBlog);
var topConLoc = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(topConLoc);

// add foot contact info
var footConMob = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(topConMob);
var footConMail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(topConMail);
var footConGit = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(topConGit);
var footConBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#footerContacts").append(topConBlog);
var footConLoc = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(topConLoc);*/

/*
// tesitng while loop
var cameron = {};
cameron.job = "course dev";

var courses = 0;
while (cameron.job === "course dev"){
	console.log("make course");
	//makeCourse();
	courses = courses + 1;
	if(courses === 10){
		cameron.job = "learning specialist";
	}
}

console.log(cameron.job);

// testing for loop
for(var i=0; i < 9; i++){
	console.log(i);
}
*/
//======================================================
// Add work experience by for loop
/*for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);
}*/

//=========================================================
// Put work into function
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		formattedEmployerTitle = formattedEmployerTitle.replace("#", work.jobs[job].url);
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();


projects.display = function(){

	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.title);
	formattedTitle = formattedTitle.replace("#", projects.url);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.dates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.description);
	$(".project-entry:last").append(formattedDates);
	$(".project-entry:last").append(formattedDescription);
	for(pic in projects.img){
		var formattedPic = HTMLprojectImage.replace("%data%", projects.img[pic]);
		$(".project-entry:last").append(formattedPic);
	}

};

projects.display();

education.displaySch = function(){
	for(schl in education.schools){
		$("#education").append(HTMLschoolStart);
		var schName = HTMLschoolName.replace("%data%", education.schools[schl].name);
		var schDeg = HTMLschoolDegree.replace("%data%", education.schools[schl].degree);
		var schNameDeg = schName + schDeg;
		schNameDeg = schNameDeg.replace("#", education.schools[schl].url);
		$(".education-entry:last").append(schNameDeg);

		var schDate = HTMLschoolDates.replace("%data%", education.schools[schl].dates);
		var schCity = HTMLschoolLocation.replace("%data%", education.schools[schl].city);
		var schMaj = HTMLschoolMajor.replace("%data%", education.schools[schl].major);
		$(".education-entry:last").append(schDate);
		$(".education-entry:last").append(schCity);
		$(".education-entry:last").append(schMaj);
	}
};

education.displayOnline = function(){
	$(".education-entry:last").append(HTMLonlineClasses);
	for(onl in education.onlineCourses){
		var onlTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onl].title);
		var onlSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onl].school);
		var onlTitSch = onlTitle + onlSchool;
		onlTitSch = onlTitSch.replace("#", education.onlineCourses[onl].url);
		$(".education-entry:last").append(onlTitSch);

		var onlDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onl].dates);
		$(".education-entry:last").append(onlDate);
		var onlUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onl].url);
		onlUrl = onlUrl.replace("#", education.onlineCourses[onl].url);
		$(".education-entry:last").append(onlUrl);

	}
};

education.displaySch();
education.displayOnline();

//=========================================================
//international name
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

// add a map on resume
$("#mapDiv").append(googleMap);

// add github ribbon on my resume
var myRibbon = githubribbon.replace("you", bio.contacts.github);
$("#gitRib").append(myRibbon);