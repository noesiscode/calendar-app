/*global NoesisCode, console*/
/**
 * Created with IntelliJ IDEA.
 * User: pouncilt
 * Date: 12/23/12
 * Time: 2:02 PM
 * To change this template use File | Settings | File Templates.
 */
var CalendarApp = CalendarApp || {};
CalendarApp.models = CalendarApp.models || CalendarApp.namespace("com.noesiscode.calendar.models");
CalendarApp.models.EventTransformer = CalendarApp.namespace("com.noesiscode.calendar.models.EventTransformer");
CalendarApp.models.EventTransformer.transformJSONEvents = function (jsonEvents) {
    'use strict';
    var i, events = [];
    if ((jsonEvents === undefined) || (jsonEvents === null) || (!Array.isArray(jsonEvents))) {
        throw new NoesisCode.exceptions.InvalidParameterException("jsonEvents must be of type Array.");
    }
    console.log("jsonEvents.length: " + jsonEvents.length);
    for (i = 0; i < jsonEvents.length; i = i + 1) {
        if (jsonEvents[i] !== undefined && jsonEvents[i] !== null) {
            events[i] = new CalendarApp.models.Event(jsonEvents[i]);
        }
    }
    return events;
};