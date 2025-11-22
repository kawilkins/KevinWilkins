// Site navigation
class SideNavigation extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="sidebar">
            <a href="index.html">Home</a>
            <a href="contact.html">Contact</a>
            <a href="https://github.com/kawilkins" target="_blank">GitHub</a>
            <a href="pwgen.html">Password Generator</a>
            <a href="https://github.com/kawilkins/KevinWilkins/issues" target="_blank">Bug Report</a>
        </div>`
    }
}

customElements.define('side-nav', SideNavigation)
