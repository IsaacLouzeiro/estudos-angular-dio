class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        // base component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("title");

        // estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: ${this.getAttribute("color")};
                font-size: ${this.getAttribute("font-size")};
                margin: 0;
                margin-bottom: 1rem;
                margin-top: 2rem;
            }
        `

        // enviar para a shadow
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)
    }
}

customElements.define('titulo-dinamico', TituloDinamico);