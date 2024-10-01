// Site navigation
class TopNavigation extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="pwgen.html">Password Generator</a></li>
                <li><a href="https://github.com/kawilkins/KevinWilkins/issues" target="_blank">Bug Report</a></li>
            </ul>
        </nav>`
    }
}

customElements.define('top-navigation', TopNavigation)
