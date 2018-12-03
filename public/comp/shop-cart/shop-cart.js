import { html, render } from '/modules/lit-html/lit-html.js'

class shopCart extends HTMLElement {
    constructor() {
        super()
        this.shown = false
        this.attachShadow({mode: 'open'})
    }

    render() {
        return html`
            <style>
                :host {
                    display: block;
                }

                #cart {
                    position: relative;
                }

                #cart > button {
                    display: block;
                    background-color: transparent;
                    border-style: none;
                    outline: none;
                }

                #dropdown {
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    top: calc(100% + 1rem);
                    right: -1rem;
                    padding: 1rem;
                    margin-bottom: 2rem;
                    background-color: #e9ecef;
                    border-radius   : .3rem;
                    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
                    display: none;
                }

                #dropdown.visible {
                    display: block;
                }
            </style>
            <div id="cart">
                <button @click="${() => {this.toggle()}}">
                    <svg viewBox="0 0 510 510" width="48px" height="48px">
                        <path d="M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306    c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7    c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408    c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z" fill="#FFFFFF"/>
                    </svg>
                </button>
                <div id="dropdown" class="${this.shown ? 'visible' : ''}">
                    <slot></slot>
                </div>
            </div>
        `
    }

    update() {
        render(this.render(), this.shadowRoot)
    }

    connectedCallback() {
        this.update()
    }

    toggle() {
        this.shown = !this.shown
        this.update()
    }
}

customElements.define('shop-cart', shopCart)