const simplebuttonTemplate = document.createElement('template');
simplebuttonTemplate.innerHTML = `

<style>
</style>

<div>
    <div class="Button">
        <simple-button-component> Basic Button Elemet </simple-button-component>
    </div>
</div>
`

class SimpleButton extends HTMLElement{

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(simplebuttonTemplate.content);
    }

}

customElements.define('button-component', SimpleButton );