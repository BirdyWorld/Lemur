window.onload = function () {
    var styles = document.querySelector('#styles #input');
    var md = document.querySelector('#md #input');
    var result = document.querySelector('#result #output');
    update(md.value, new FormData(styles), result);
    md.oninput = function () {
        update(md.value, new FormData(styles), result);
    }
}
function update(md, styles, result) {
    var mdObj = new Markdown(md);
    result.innerHTML = mdObj.toHTML();
    var style = 'h1{';
    styles.forEach((value, key) => {
        style += key.replace(/([A-Z])/, "-$1");
        style += ': ';
        style += value;
        style += ';';
    });
    style += '}';
    console.log(style);
    document.querySelector('style#change').innerHTML = style;
}