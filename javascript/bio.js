// Brief intro
class briefBio extends HTMLElement {
    async connectedCallback() {
        try {
            // Fetch JSON data from bio_data.JSON
            const response = await fetch('/data/json/bio_data.json')
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
            console.error('bio_data: ', error);
            this.innerHTML = `<p>Error loading bio_data.</p>`;
        }
    }
}

class summaryBio extends HTMLElement {
    async connectedCallback() {
        try {
            const response = await fetch("/data/bio_summary.txt");
            const text = await response.text();
            if (!response.ok) throw new Error('Failure to load bio_summary: ${response.status}');

            const paragraphs = text
                .trim()
                .split(/\n\s*\n+/)
                .filter(p => p.trim() !== '');

            this.innerHTML = paragraphs
                .map(paragraph => `<p class="paragraph">${paragraph.trim()}</p>`)
                .join('\n');
        } catch (error) {
            console.error('bio_summary: ', error);
            this.innerHTML = `<p><code>Error loading bio_summary.</code></p>`;
        }
    }
}

customElements.define('brief-bio', briefBio)
customElements.define('summary-bio', summaryBio)
