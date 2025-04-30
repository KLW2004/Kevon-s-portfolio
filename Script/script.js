/*
	Student Name: Kevon Witherspoon
	File Name: script.js 
	Date: 3/30/25
*/

//Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "none") {
	menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}
}