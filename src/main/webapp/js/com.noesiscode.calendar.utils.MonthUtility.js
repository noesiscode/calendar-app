/**
 * Created with IntelliJ IDEA.
 * User: pouncilt
 * Date: 2/27/13
 * Time: 12:42 PM
 * To change this template use File | Settings | File Templates.
 */
var CalendarApp = CalendarApp || {};
CalendarApp.MonthUtility = CalendarApp.models || CalendarApp.namespace("com.noesiscode.calendar.utils.MonthUtility");
CalendarApp.MonthUtility.isDateInMonthView = function (targetDate, monthView) {
    var i, dateFoundInMonthView = false;
    for (i = 0; i < monthView.length; i = i + 1) {
        if (monthView[i].isWeekOf(targetDate)) {
            dateFoundInMonthView = true;
            break;
        }
    }
    return dateFoundInMonthView;
};
CalendarApp.MonthUtility.isDateNotInMonthView = function (targetDate, monthView) {
    var i, dateFoundInMonthView = true;
    for (i = 0; i < monthView.length; i = i + 1) {
        if (monthView[i].isWeekOf(targetDate)) {
            dateFoundInMonthView = false;
            break;
        }
    }
    return dateFoundInMonthView;
};