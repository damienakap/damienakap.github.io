
var header, navbar_wrapper, navbar, sticky;

var navbar_home, navbar_about, navbar_contact;

var path, page;

function navigate( loc )
{
	navbar_home.classList.remove("navbar_current");
	navbar_about.classList.remove("navbar_current");
	navbar_contact.classList.remove("navbar_current");
	
	if(loc==navbar_home) {navbar_home.classList.add("navbar_current");return;}
	if(loc==navbar_about) {navbar_about.classList.add("navbar_current");return;}
	if(loc==navbar_contact) {navbar_contact.classList.add("navbar_current");return;}

}

function stickyNavbar() {
  if (window.pageYOffset - 1 > sticky) {
		header.classList.add("sticky_header")
    navbar_wrapper.classList.add("sticky_nav_wrapper");
		navbar.classList.add("sticky_nav");
  } else {
		header.classList.remove("sticky_header")
    navbar_wrapper.classList.remove("sticky_nav_wrapper");
		navbar.classList.remove("sticky_nav");
  }
} 

function main()
{
	console.log("Started");
	navbar_home = document.getElementById("navbar_home");
	navbar_about = document.getElementById("navbar_about");
	navbar_contact = document.getElementById("navbar_contact");

	path = window.location.pathname;
	page = path.split("/").pop();
	console.log( page );

	if(page=="index.html" || page=="") navbar_home.classList.add("navbar_current");
	if(page=="about.html") navbar_about.classList.add("navbar_current");
	if(page=="contact.html") navbar_contact.classList.add("navbar_current");


	header = document.getElementById("header");
	navbar_wrapper = document.getElementsByClassName("navbar-wrapper")[0];	// Get the navbar
	navbar = document.getElementById("navbar");

 	sticky = navbar.offsetTop;	// Get the offset position of the navbar
  stickyNavbar()
	window.onscroll = function() {stickyNavbar()};
}

window.addEventListener("load",main);