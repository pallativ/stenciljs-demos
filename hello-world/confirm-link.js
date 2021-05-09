class ConfirmLink extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener("click", (event) => {
            if (!confirm("Do you really want to gooooo."))
                event.preventDefault();
        });
    }
}
customElements.define("ux-confirm-link", ConfirmLink, { extends: "a" });
