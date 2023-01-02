window.onload = function () {
    var styles = document.querySelector('#styles #input');
    var md = document.querySelector('#md #input');
    var result = document.querySelector('#result #output');
    var style = document.querySelector('#result style');
    updateValues();
    function updateValues() {
        update(md.value, new FormData(styles), result, style);
    }
    md.oninput = updateValues;
    styles.oninput = updateValues;
}
function update(md, styles, result, style) {
    var mdObj = new Markdown(md);
    result.innerHTML = mdObj.toHTML();
    var styleObj = new Style(formDataToJCSS(styles));
    style.innerHTML = styleObj.toCSS('#result #output', '.preview');
}

function formDataToJCSS(formData) {
    const obj = {};
    formData.forEach((value, key) => {
        var selector = key.split('_')[0];
        var property = key.split('_')[1];
        if (!obj[selector])
            obj[selector] = {};
        obj[selector][property] = value;
    });
    return obj;
}  