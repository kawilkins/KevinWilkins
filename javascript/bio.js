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
                <li>Evaluated and upgraded workstations to be compliant with Microsoft Intune</li>
                <li>Responded to and resolved end user trouble tickets</li>
                <li>Migrated servers from KVM system to VMware solution</li>
                <li>Participated in on-call rotation</li>
                <li>Performed routine system maintenance, including OS and software upgrades</li>
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
            Other projects and tasks are assigned to me as needed and I see every task as an opportunity to learn and strengthen my knowledge base.
        </p>
        <p class="paragraph">
            I migrated my organization's email and file share to Microsoft Exchange, OneDrive, and SharePoint.
            This also included evaluating existing end user workstations and upgrading them to be compliant with Microsoft Intune.
            I also provided assistance migrating our server from a Kernel-based VM (KVM) system to a new VMware solution.
            Additionally, I installed CAT 5e Ethernet cabling to connect additional equipment to my organization's network while being mindful of security and best practice.
        </p>
        <p class="paragraph">
            Outside of working hours I enjoy reading and discussing topics and questions related to science, technology, and philosophy.
            I am very passionate about learning and desire to share what I know.
            It is edifying and a privilege to be able to work in a field that is constantly discovering solutions to better our world.
            Each challenge presents an opportunity for continued learning, resolution of an issue, and encountering a different perspective.
            There is always something new to learn!
        </p>
        <p class="paragraph">
            At home I maintain a Proxmox Virtual Environment (PVE) that runs a small fleet of Linux virtual machines (VM).
            All servers maintain their updates using <b>ansible</b> which features custom <b>systemd</b> service files that enable scheduling updates to happen automatically.
            I have also set up an open source cloud based monitoring tool and learned how to tweak custom alerts sent to me via Discord.
        </p>`
    }
}

customElements.define('brief-bio', briefBio)
customElements.define('summary-bio', summaryBio)
