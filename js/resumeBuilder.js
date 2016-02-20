/*
	Using resumeBuilder.js file to edit material of your resume.
*/

// build material of resume in objects.
var bio = {
	"name" : "Chien-Pin Chen",
	"role" : "Computer Engineering",
	"contacts" : {
		"mobile" : "1-561-324-9589",
		"email" : "chienpinchen@gmail.com",
		"github" : "RobinCPC",
		"blog" : "http://chienpinchen.blogspot.tw/",
		"location" : "Santa Cruz, CA"
	},
	"WelcomeMessage" : "Software developer with industrial experience on developing PC-based industrial robot controller, \
	kinematic algorithms of high degree of freedom robot arm, and CAD-based Application/Simulation. Currently, a master student \
	of Computer Engineering in UC Santa Cruz. I am looking for internship opportunity as a robotic or software engineer for summer 2016",
	"skills" : [
		"C++", "Python", "Robotics", "Git", "MATLAB", "JavaScript"
	],
	"bioPic" : "images/my.jpg"
};

var education = {
	"schools" : [
		{
			"name" : "University of California, Santa Cruz",
			"city" : "Santa Cruz, California, US",
			"degree" : "MS",
			"major" : ["Computer Engineering"],
			"dates" : 2017,
			"url"	: "http://www.ucsc.edu/"
		},
		{
			"name" : "Columbia University",
			"city" : "New York City, New York, US",
			"degree" : "MS",
			"major" : ["Mechanical Engineering"],
			"dates" : 2011,
			"url"	: "http://www.columbia.edu/"
		},
		{
			"name" : "National Taiwan University",
			"city" : "Taipei, Taiwan",
			"degree" : "BS",
			"major" : ["Mechanical Engineering"],
			"dates" : 2007,
			"url" : "http://www.ntu.edu.tw/"
		}
	],
	"onlineCourses" : [
	{
		"title" : "Intro to Computer Science",
		"school" : "Udacity",
		"dates" : 2013,
		"url" : "https://www.udacity.com/course/cs101"
	},
	{
		"title" : "JavaScript Basic",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "http://www.udacity.com/course/ud804"
	},
	{
		"title" : "Interactive 3D Graphics",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/interactive-3d-graphics--cs291"
	}
	]
};

var work = {
	"jobs" : [
	{
		"employer" : "PMC",
		"title" : "Engineer",
		"location" : "Taichung, Taiwan",
		"dates" : "Aug. 2012 - Jun. 2015",
		"description" : "Building PC-Based Controller for Industrial Robot Arm",
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
	"lists"	: [
	{
		"title"	: "Teach Pendant for PMC Robot Controller",
		"dates"	: "Feb. 2015 - June 2015",
		"description"	: "<p></p>1. Develop user interface (HMI) of teach pendant and improve real-time system of Controller<p></p>2. Manage developing progress and version control by Git<p></p>3. Use Scintilla to improve the interface of PMC Robot Language Editor<p></p>4. Write proposal and acquire funding from Government",
		"url"	: "https://www.youtube.com/watch?v=JmXIHzVw23U",
		"img"	: ["value"],
		"video"	: ["https://www.youtube.com/embed/JmXIHzVw23U"]     
	},
	{
		"title" : "Demonstrate the application of 14-axis Dual-Arm Robot",
		"dates" : "Jan. 2014 - July 2014",
		"description" : " As a member of developing team, I was in charge of: <p></p>1. Building controlling algorithm of multi-robot cooperative function (program synchronization, mater-slave) <p></p>2. Developing kinematic algorithm of 7-axis (redundant) robot arm <p></p>3. Creating part of function in human machine interface (HMI) ",
		"url" : "http://chienpinchen.blogspot.tw/2014/08/pmc-14-axis-industrial-dual-arm-robot.html",
		"img" : ["images/PMC sync.jpg", "images/Dual_Arm UI.jpg"],
		"video" : [ "https://www.youtube.com/embed/C8_pQGrsqw8", "https://www.youtube.com/embed/cYK7M2Y8dfA"]
	}, 
	{
		"title"	: "Development Device, Control Sytem and Simulation Software of Robot hand",
		"dates"	: "Oct. 2012 - Dec. 2014",
		"description"	: "<p></p>1. Coordinate with colleagues, supervisor, and collaborative Lab, hosted by Prof. Kawasaki & Mouri at Gifu University, to develop mechanism and control system of Robot hand<p></p>2. Develop robot hand simulator (grasping motion planning and extracting info from CAD model of work pieces)<p></p>3. File patent for searching method of robot hand grasping <p></p>4. Publish paper for the design of robot hand",
		"url"	: "https://www.youtube.com/watch?v=4CNTrfGQ1rY",
		"img"	: ["value"],
		"video"	: ["https://www.youtube.com/embed/4CNTrfGQ1rY"]
	}
	]
};

// Add javascript function to display the material (in objects) into index.hmtl

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
};

bio.display();


//=========================================================
// Add function to display work, projects, and educations
work.display = function() {
	for (var job in work.jobs) {
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
};

work.display();


projects.display = function(){
	for (var list in projects.lists) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.lists[list].title);
		formattedTitle = formattedTitle.replace("#", projects.lists[list].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.lists[list].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.lists[list].description);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		/*for(pic in projects.lists[list].img){
			var formattedPic = HTMLprojectImage.replace("%data%", projects.lists[list].img[pic]);
			$(".project-entry:last").append(formattedPic);
		}
		$(".project-entry:last").append('<p></p>'); */
		for(var clip in projects.lists[list].video){
			var formattedClip = HTMLprojectVideo.replace("%data%", projects.lists[list].video[clip]);
			$(".project-entry:last").append(formattedClip);
		}
	}

};

projects.display();

education.displaySch = function(){
	for(var schl in education.schools){
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
	for(var onl in education.onlineCourses){
		var onlTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onl].title);
		var onlSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onl].school);
		var onlTitSch = onlTitle + onlSchool;
		onlTitSch = onlTitSch.replace("#", education.onlineCourses[onl].url);
		$(".education-entry:last").append(onlTitSch);

		var onlDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onl].dates);
		$(".education-entry:last").append(onlDate);
		$(".education-entry:last").append('<p><br></p>');
		/*var onlUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onl].url);
		onlUrl = onlUrl.replace("#", education.onlineCourses[onl].url);
		$(".education-entry:last").append(onlUrl);*/

	}
};

education.displaySch();
education.displayOnline();

//=========================================================
//Add button to change to international name
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

// add a interactive map on resume
$("#mapDiv").append(googleMap);

// add github ribbon on my resume
var myRibbon = githubribbon.replace("you", bio.contacts.github);
$("#gitRib").append(myRibbon);