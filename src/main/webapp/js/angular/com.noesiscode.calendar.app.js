/*global CalendarMonthViewController,CalendarDayController */
/**
 * Created with JetBrains WebStorm.
 * User: pouncilt
 * Date: 11/16/12
 * Time: 7:19 PM
 * To change this template use File | Settings | File Templates.
 */
angular.module('NoesisCodeCalendarApp', ['NoesisCodeCalendar', 'NoesisCodeCalendarService']).
    config(['$routeProvider', function($routeProvider) {
        //$routeProvider.when('/calendar', {templateUrl: 'partials/calendar.html', controller: CalendarMonthViewController});
        $routeProvider.when('/calendarMonthView', {templateUrl: 'partials/calendar-month-view.html', controller: CalendarMonthViewController});
        $routeProvider.when('/calendarDayView', {templateUrl: 'partials/calendar-day-view.html', controller: CalendarDayViewController});
        $routeProvider.otherwise({redirectTo: '/calendarMonthView'});
    }]);


