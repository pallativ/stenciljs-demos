class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log("Tooltip Constructor");
        this._tooltipContainer;
        this._tooptipText = "Basic Text";
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        <style>
            div {
                background-color: black;
                color: white;
                position: relative;
                zIndex: 10;
            }
        </style>
           <span> ?</span>
            <slot>Default</slot>`;
    }
    connectedCallback() {
        if (this.hasAttribute("text")) {
            this._tooptipText = this.getAttribute("text");
        }
        const tooptipSpan = this.shadowRoot.querySelector("span");
        tooptipSpan.addEventListener(
            "mouseenter",
            this._showTooltip.bind(this)
        );
        tooptipSpan.addEventListener(
            "mouseleave",
            this._hideTooltip.bind(this)
        );
        this.shadowRoot.appendChild(tooptipSpan);
    }
    disconnectedCallback() {}
    attributeChangedCallback() {}

    _showTooltip() {
        this._tooltipContainer = document.createElement("div");
        this._tooltipContainer.textContent = this._tooptipText;
        this.shadowRoot.appendChild(this._tooltipContainer);
    }
    _hideTooltip() {
        this.shadowRoot.removeChild(this._tooltipContainer);
    }
}
customElements.define("ux-tooltip", Tooltip);
