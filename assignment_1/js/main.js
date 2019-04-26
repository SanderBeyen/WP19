// File name: main.js
// 1. Change the titles of the webpages
var path = window.location.pathname;
var page = path.split("/").pop();

function changeTitle() {
	if (page == "index.html") {
	document.title = "Webprogramming (LIX019P05) - Index"
	} else {
	document.title = "Webprogramming (LIX019P05) - Second"
	}
}

//2. Add a new article to the main column of the index.html page
function addArticle() {
	if (page == "index.html") {
	var art = document.createElement("ARTICLE");
	art.setAttribute("id", "myArticle");
	document.body.appendChild(art);

	var head = document.createElement("H1");
	var text1 = document.createTextNode("This is my second article.");
	head.appendChild(node);
	document.getElementById("myArticle").appendChild(head);

	var para = document.createElement("P");
	var text2 = document.createTextNode("This is a paragraph.");
	para.appendChild(text2);
	document.getElementById("myArticle").appendChild(para);
	}
}

//3. Change the href attribute of the third <li> element in the footer. The link should be: https://google.com
function changeLink {
	$("a.third").attr("href", "https://google.com");
}

//4. 
function openNew{
	$("a.third").on("click") {
		window.open("https://google.com", '_blank');
	}

}
//5. Add an attribute to the same <li> element. The attribute should force the link to open in a new tab or window.
document.getElementsByClassName("nav-item").style.backgroundColor = "red";

//6. Create a javascript object and fill it with the data from the PHP array that can be seen in wp19-check.php
const wp19-check = {
	schedule: [
		{ week: '1', content: 'Assignment 1'},
		{ week: '2', content: 'No lecture'},
		{ week: '3', content: 'Assignment 2'},
		{ week: '4', content: '-'},
		{ week: '5', content: 'Assignment 3'},
		{ week: '6', content: '-'},
		{ week: '7', content: 'Guest Lecture'},
		]
} 
{ document.write(wp19-check); }

//7.