// Brief intro
class briefBio extends HTMLElement {
    async connectedCallback() {
        try {
            // Fetch JSON data from bio_data.JSON
            const response = await fetch('/json/bio_data.json')
            if (!response.ok) throw new Error('Failure to load bio_data')
            const bioData = await response.json();

            // Time calculation
            const startDate = new Date(bioData.startDate);
            const now = new Date();
            const diffDate = now - startDate;

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

            // Build responsibilities list
            const responsibilities = bioData.responsibilities
                .map(item => `<li>${item}</li>`)
                .join('');

            // Build projects list
            const projects = bioData.projects
                .map(item => `<li>${item}</li>`)
                .join('');

            this.innerHTML = `
            <b>Current role:</b> ${bioData.currentRole}<br><br>
            <b>Responsibilities:</b>
            <ul style="margin-top: 4px; margin-bottom: 12px;">${responsibilities}</ul>
            <b>Projects:</b>
            <ul style="margin-top: 4px; margin-bottom: 12px;">${projects}</ul>
            <b>Time with employer:</b> ${year} years, ${month} months, ${week} weeks, ${day} days `;
        } catch (error) {
            console.error('bio_data:', error);
            this.innerHTML = `<p>Error loading bio_data.</p>`;
        }
    }
}

class summaryBio extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p class="paragraph">
            As an MIS Administrator, I am responsible for resolving end-user support requests and managing the configuration, imaging, and troubleshooting of workstations.
            My on-call responsibilities involve responding to server alerts after hours to ensure my organization's technical infrastructure is performing optimally.
            Beyond my assigned responsibilities, I seek opportunities to contribute by volunteering my assistance to support my colleagues projects and tasks.
            I approach every task and project as an opportunity to contribute to the organization's success while continuing to develop my knowledge and skills.
        </p>
        <p class="paragraph">
            I migrated my organization's email and file share to Microsoft Exchange, OneDrive, and SharePoint.
            This also included evaluating existing end user workstations and upgrading them to be compliant with Microsoft Intune.
            I also provided assistance migrating our Linux virtual machines from a legacy system to a fresher and modern solution.
            Additionally, I installed and connected additional equipment to my organization's network while being mindful of security and best practice.
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
