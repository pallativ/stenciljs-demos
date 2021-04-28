class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log("Tooltip Constructor");
    }
}
customElements.define("ux-tooltip", Tooltip);
