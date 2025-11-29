// Site navigation
class SideNavigation extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="sidebar">
            <a href="index.html">Home</a>
            <a href="contact.html">Contact</a>
            <a href="pwgen.html">Password Generator</a>
            <a href="https://github.com/kawilkins" target="_blank">GitHub</a>
            <a href="https://github.com/kawilkins/KevinWilkins/issues" target="_blank">Bug Report</a>
        </div>`
    }
}

customElements.define('side-nav', SideNavigation)

// Highlight current page in side navigation
document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const sidebarLinks = document.querySelectorAll(".sidebar a");

    sidebarLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath === linkPath || 
            (currentPath.endsWith("/") && currentPath.slice(0, -1) === linkPath)) {
            link.classList.add("active");
        } else if (currentPath === "/" && (linkPath === "/" || linkPath === "/index.html")) {
            link.classList.add("active");
        }
    });
});
