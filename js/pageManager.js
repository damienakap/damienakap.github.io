

import {loadCssElement,loadJsElement} from '../js/htmlElementHelper.js';


const head = document.getElementsByTagName("head")[0];
const body = document.getElementsByTagName("body")[0];
const page_wrapper = document.getElementById("page_wrapper");

const html_element_helper = document.getElementById("html_element_helper_js");


let currentPage = sessionStorage.getItem("currentPage");


async function switchPage(newPage)
{

    switch(newPage) {
        case "home":
            sessionStorage.setItem("currentPage","home");
            break;
        default:
            currentPage = "home"
            sessionStorage.setItem("currentPage","home");
    }
    console.log("CurrentPage: "+currentPage);
}

async function run()
{
    /* let st_css = loadCssElement(head, "css/base.css", "basic_style");
    st_css.then((res) => {console.log(res)} );
    

    let test = loadJsElement(page_wrapper, "module", "js/test.js", "test_js");
    test.then((res) => {console.log(res)} ); */

    switchPage(currentPage);

}

document.addEventListener("DOMContentLoaded",run);