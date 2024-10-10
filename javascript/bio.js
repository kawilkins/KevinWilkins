// Brief intro
class briefBio extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <b>Current role:</b> MIS Administrator</br>
        <b>Projects and Responsibilities:</b>
            <ul>
                <li>Migrated employee emails to Microsoft Exchange</li>
                <li>Responded to and resolve employee trouble tickets</li>
                <li>Migrated servers from KVM system to VMware solution</li>
                <li>Participated in on-call rotation</li>
            </ul>
        <b>Time with employer:</b> 5 years `
    }
}

customElements.define('brief-bio', briefBio)
