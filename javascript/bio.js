// Brief intro
class brief_bio extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        `
    }
}

customElements.define('bio', brief_bio)
