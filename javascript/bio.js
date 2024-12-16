// Brief intro
class briefBio extends HTMLElement {
    connectedCallback(){
        const startDate = new Date("2019-03-27");
        const now = new Date();
        const diffDate = now - startDate;
        const timeSince = new Date(diffDate);

        const convertYear = 365.25 * 24 * 3600 * 1000;
        const convertMonth = convertYear / 12;
        const convertWeek = 7 * 24 * 3600 * 1000;
        const convertDay = 24 * 3600 * 1000;

        const year = Math.floor(diffDate / convertYear);
        const remainderYear = diffDate % convertYear;
        const month = Math.floor(remainderYear / convertMonth);
        const remainderMonth = remainderYear % convertMonth;
        const week = Math.floor(remainderMonth / convertWeek);
        const remainderWeek = remainderMonth % convertWeek;
        const day = Math.floor(remainderWeek / convertDay);

        console.log("Start Date:", startDate);
        console.log("Current Date:", now);
        console.log("Years:", year, "Months:", month, "Weeks:", week, "Days:", day);

        this.innerHTML = `
        <b>Current role:</b> MIS Administrator</br>
        <b>Projects and Responsibilities:</b>
            <ul>
                <li>Migrated employee emails to Microsoft Exchange</li>
                <li>Responded to and resolve employee trouble tickets</li>
                <li>Migrated servers from KVM system to VMware solution</li>
                <li>Participated in on-call rotation</li>
            </ul>
        <b>Time with employer:</b> ${year} years, ${month} months, ${week} weeks, ${day} days `;
    }
}

class summaryBio extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <p class="paragraph">
            I am an MIS Administrator for an Internet Service Provider (ISP).
            My primary day-to-day responsibilities include responding to and resolving end user trouble tickets and participating in the on-call rotation.
            I also oversee configuring, imaging, and troubleshooting end user work stations.
            Other projects and tasks are assigned to me as needed.
        </p>
        <p class="paragraph">
            I have worked a project that migrated our company email and file share to Microsoft Exchange, OneDrive, and SharePoint.
            Most recently I have been assigned to assist in our project of migrating our servers from a Kernel-based VM system to a new VMware solution.
        </p>
        <p class="paragraph">
            Outside of working hours I enjoy reading and discussing topics and questions related to science, technology, and philosophy.
            I am very passionate about learning and desire to share what I know.
            It is edifying and a privilege to be able to work in a field that is constantly discovering solutions to better our world.
            Each challenge presents an opportunity for continued learning, resolution of an issue, and encountering a different perspective.
            There is always something new to learn!
        </p>
        <p class="paragraph">
            I have a few projects that can be found on my <a href="https://github.com/kawilkins" class="hyperlink" target="_blank">GitHub</a>.
            These projects mainly include work in HTML/CSS, JavaScript, and C++.
            While the extent of my work is smaller than I would like I am proactive in challenging myself.`
    }
}

customElements.define('brief-bio', briefBio)
customElements.define('summary-bio', summaryBio)
