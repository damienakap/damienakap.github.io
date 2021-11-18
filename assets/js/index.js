
var header, navbar_wrapper, navbar, sticky;

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
	header = document.getElementById("header");
	navbar_wrapper = document.getElementsByClassName("navbar-wrapper")[0];	// Get the navbar
	navbar = document.getElementById("navbar");
 	sticky = navbar.offsetTop;	// Get the offset position of the navbar
	 window.onscroll = function() {stickyNavbar()};
}

window.addEventListener("load",main);