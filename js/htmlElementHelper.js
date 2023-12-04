/**
 * 
 * @param {HTMLElement} child
 * @returns {Number} 
 */
export function indexOfChild(child)
{
    return Array.from(child.parentNode.children).indexOf(child);
}

/**
 * Swap element 1 and element 2
 * @param {HTMLElement} e1
 * @param {HTMLElement} e2
 */
export function swapElements(e1,e2)
{
    let p1 = e1.parentNode;
    let i1 = indexOfChild(e1);
    let c1  = p1.childElementCount;
    console.log(i1);
    console.log(c1);

    // move e1 to e2
    e2.replaceWith(e1);

    // move e2 to e1 (old position)
    let c1_before = p1.children[i1];
    if(c1_before == undefined)
    {
        p1.appendChild(e2);
        return;
    }

    c1_before.before(e2);

}

/**
 * 
 * @param {HTMLElement} parent
 * @param {String} path
 * @param {String} id 
 * @returns {Promise<HtmlElement>} 
 */
export function loadCssElement(parent, path, id)
{
    return new Promise( (resolve,reject) => {
        const css = document.createElement("link");

        css.id = id;
        css.rel = "stylesheet";
        css.href = path;
        
        css.addEventListener("load", (e) => {
            resolve(css);
        });

        css.addEventListener("error", (e) => {
            css.remove();
            reject();
        });

        parent.appendChild(css);
        
    } );
}

/**
 * 
 * @param {HTMLElement} parent
 * @param {String} type
 * @param {String} path
 * @param {String} id 
 * @returns {Promise<HTMLElement>}
 */
export function loadJsElement(parent, type="text/javascript", path, id)
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