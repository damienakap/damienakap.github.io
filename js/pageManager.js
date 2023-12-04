


/**
 * 
 * @param {HTMLElement} parent
 * @param {String} type
 * @param {String} path
 * @param {String} id 
 * @returns {Promise<HTMLElement>}
 */
function loadJsElement(parent, type="text/javascript", path, id)
{
    return new Promise( (resolve, reject) => {
        const jse = document.createElement("script");

        jse.type = type;
        jse.id = id;
        jse.src = path;

        jse.addEventListener("load", (e) => {
            resolve(jse);
        });

        jse.addEventListener("error", (e) => {
            jse.remove();
            reject();
        });

        parent.appendChild(jse);
    } );
}

const head = document.getElementsByTagName("head")[0];
const body = document.getElementsByTagName("body")[0];
const page_wrapper = document.getElementById("page_wrapper");

async function run()
{


    let st_css = loadCssElement(head, "css/style.css", "basic_style");

    st_css.then((res) => {console.log(res)} );
    

    let test = loadJsElement(app, "text/javascript", "js/test.js", "test_js");

    //console.log(x.nodeName);
    //console.log(x.id);

    //replaceElement(st_css,x);
    //swapElements(st_css,x);

}

document.addEventListener("DOMContentLoaded",run);