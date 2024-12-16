// Employment duration calculator

export function employmentDuration(beginEmployment) {
    const startDate - new Date(beginEmployment);
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

    return { year, month, week, day };
}
