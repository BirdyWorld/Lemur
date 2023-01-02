class Style
{
    constructor (jcss) {
        this.jcss = jcss;
    }
    toCSS (wrapper1 = '', wrapper2 = '') {
        this.css = '';
        for (var selector in this.jcss) {
            this.css += `${wrapper1} ${selector}, ${wrapper2} ${selector} {`;
            for (var property in this.jcss[selector]) {
                this.css += `${this.toCSSProperty(property)}:${this.jcss[selector][property]};`;
            }
            this.css += '}';
        }
        return this.css;
    }
    toCSSProperty (jcssProperty) {
        return jcssProperty.replace(/([A-Z])/, "-$1");
    }
}