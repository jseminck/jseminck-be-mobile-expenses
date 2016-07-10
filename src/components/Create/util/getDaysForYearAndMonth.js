import moment from 'moment';

/**
 * Creates a two-dimensional array including the day of the month for any
 * given weekday.
 *
 * [
 * week1: [mon, tue, wed, thu, fri, sat, sun],
 * week2-4: [mon, tue, wed, thu, fri, sat, sun],
 * week5: [mon, tue, wed, thu, fri, sat, sun],
 * ]
 *
 * @param {Number} year
 * @param {Number} month
 * @returns {Number[][]}
 */
export default function getDaysForYearAndMonth(year, month) {
    const momentDate = moment(`${year} ${month} 1`, 'YYYY MM dd');

    const daysInMonth = momentDate.daysInMonth();
    let dayOfWeek = momentDate.weekday();
    dayOfWeek--; // it is 1-based while our array is 0-based

    let days = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];

    let week = 0;

    for (let i = 1; i <= daysInMonth; i++) {
        days[week][dayOfWeek] = i;

        // Reset dayOfWeek and move to next week at the end of the week.
        if (dayOfWeek === 6) {
            week++;
            dayOfWeek = 0;
        } else {
            dayOfWeek++;
        }
    }

    return days;
}