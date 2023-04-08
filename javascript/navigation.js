// Site navigation
class TopNavigation extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="changelog.html">Change Log</a></li>
                <li><a href="pwgen.html">Password Generator</a></li>
            </ul>
        </nav>`
    }
}

customElements.define('top-navigation', TopNavigation)