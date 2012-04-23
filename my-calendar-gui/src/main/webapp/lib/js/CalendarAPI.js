var monthNames = [{"name": "January", "abbr": "Jan", "getTotalDays": function(year){return 31;}},
                  {"name": "February", "abbr": "Feb", "getTotalDays": function(year){if(year){return (year%4 == 0)?29:28;}else{throw exception("Expected parameter(Year) is not defined.");}}},
                  {"name": "March", "abbr": "Mar", "getTotalDays": function(year){return 31;}},
                  {"name": "April", "abbr": "Apr", "getTotalDays": function(year){return 30;}},
                  {"name": "May", "abbr": "May", "getTotalDays": function(year){return 31;}},
                  {"name": "June", "abbr": "Jun", "getTotalDays": function(year){return 30;}},
                  {"name": "July", "abbr": "Jul", "getTotalDays": function(year){return 31;}},
                  {"name": "August", "abbr": "Aug", "getTotalDays": function(year){return 31;}},
                  {"name": "September", "abbr": "Sept", "getTotalDays": function(year){return 30;}},
                  {"name": "October", "abbr": "Oct", "getTotalDays": function(year){return 31;}},
                  {"name": "November", "abbr": "Nov", "getTotalDays": function(year){return 30;}},
                  {"name": "December", "abbr": "Dec", "getTotalDays": function(year){return 31;}}];


/**
 * Creates a Day object that represents the day of the {@link Week}.
 * 
 * @class Represents a Day of the week or month.
 * @param date The date of the day.
 * @param weekIndex The week index of the month for this day.
 * 
 * @returns An instance of the Day class.
 * 
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
*/
function Day(/**<a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a>}*/date, 
			 /**<a href="http://www.w3schools.com/jsref/jsref_obj_number.asp">Number</a>}*/weekIndex){       
	this.date = date;
	this.weekIndex = (weekIndex === undefined)? -1: weekIndex;
	
	this.weekdayNames = [{"name": "Sunday", "abbr": "Sun."},
	                     {"name": "Monday", "abbr": "Mon."},
	                     {"name": "Tuesday", "abbr": "Tue."},
	                     {"name": "Wednesday", "abbr": "Wed."},
	                     {"name": "Thursday", "abbr": "Thu."},
	                     {"name": "Friday", "abbr": "Fri."},
	                     {"name": "Saturday", "abbr": "Sat."}];
	
	/**
	 * <p>Gets the weekday name.</p> 
	 * <p>This method could return for example: Sunday, 
	 * Sun., Monday, Mon., Tuesday, Tue., Wednesday, Wed., Thursday, Thu., 
	 * Friday, Fri., Saturday, or Sat.</p>
	 * 
	 * @param abbr An optional abbreviation flag the returns the abbreviated version 
	 * 				of the weekday name when set to true.
	 * 
	 * @returns {String} The name of the weekday.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	this.getWeekDay = function(/**Boolean*/abbr){
		return (abbr !== undefined && abbr == true)?
				this.weekdayNames[this.date.getDay()].abbr :
					this.weekdayNames[this.date.getDay()].name;
	};
	
	/**
	 * <p>Gets the date for the day of the month.</p>
	 * 
	 * @param abbr An optional flag that returns the abbreviated weekday name when flag is set to true.
	 * 
	 * @returns {String} The name of the weekday.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	this.getWeekDate = function(){
		return this.date.getDate();
	};
	
	/**
	 * <p>Gets the actual <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a> Object for the weekday.</p>
	 * 
	 * @param abbr An optional abbreviation flag the returns the abbreviated version 
	 * 				of the weekday name when set to true.
	 * 
	 * @returns {String} The name of the weekday.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	this.getDate = function(){
		return this.date;
	};
	
	/*this.toString = function(){
		alert("Day[weekday: " + this.weekday +", day: " + this.day + ", weekIndex: " + this.weekIndex + "]");
	};*/
}



/**
 * Creates a {@link Week} object that represents a calendar week in a calendar month.
 * 
 * @class Represents a {@link Week} of the {@link Month}.
 * @param weekdays An array of weekdays that represents a calendar week.
 * 
 * @returns An instance of the Week class based on the weekdays passed in.
 * 
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
*/
function Week(weekdays){
	this.weekdays = (weekdays === undefined)? new Array(): weekdays;
	this.sunday = (this.weekdays.length >= 1)? this.weekdays[0] : null;
	this.monday = (this.weekdays.length >= 2)? this.weekdays[1] : null;
	this.tuesday = (this.weekdays.length >= 3)? this.weekdays[2] : null;
	this.wednesday = (this.weekdays.length >= 4)? this.weekdays[3] : null;
	this.thursday = (this.weekdays.length >= 5)? this.weekdays[4] : null;
	this.friday = (this.weekdays.length >= 6)? this.weekdays[5] : null;
	this.saturday = (this.weekdays.length >= 7)? this.weekdays[6] : null;
	
	/**
	 * Determines if this instance of {@link Week} is the first week in the calendar month. 
	 * 
	 * @returns {Boolean} true if this instance of {@link Week} is the first week of the calendar month.
	 * Otherwise, it will return false.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	this.isFirstWeekInMonth = function(){
		for(var i = 0; i < this.weekdays.length; i++){
			if(this.weekdays[i].getWeekDate() == 1){
				return true;
			}
		}
		
		return false;
	};
	
	
	/**
	 * Determines if this instance of {@link Week} is the last week in the calendar month. 
	 * 
	 * @returns {Boolean} true if this instance of {@link Week} is the last week of the calendar month.
	 * Otherwise, it will return false.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	this.isLastWeekInMonth = function(){
		for(var i = 0; i < this.weekdays.length; i++){
			var monthIndex = this.weekdays[i].getDate().getMonth();
			var year = this.weekdays[i].getDate().getFullYear();
			var weekdate = this.weekdays[i].getWeekDate() ;
			var totalDaysInMonth = this.monthNames[monthIndex].getTotalDays(year);
			if(weekdate == totalDaysInMonth){
				return true;
			}
		}
		
		return false;
	};
}

/**
 * <p>Static field that is used to get calendar full name, abbreviated names, and total calendar days.</p>
 * @static
 * @field
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
*/
Week.prototype.monthNames = monthNames;






/**
 * Creates a {@link Month} object that represents the current calendar month.
 * 
 * @class Represents a calendar month.
 * @returns An instance of the Week class.
 * 
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
*/
function Month(){
	var that = this;
	this.TOTAL_WEEKDAYS = 7;
	/**
	 * <p>Represents all the weeks in the Month.  This field is populated during object creation.</p>
	 * @field
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	this.weeks = getWeeksInMonth(new Date());
	/**
	 * <p>Represents the name of the Month.  This field is populated during object creation.</p>
	 * @field
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	this.name = getMonthName((new Date()).getMonth(), false);
	
	/**
	 * <p>Gets month name.</p> 
	 * @private
	 * @param index Represents the position of the month in a month array.
	 * @param useAbbr An optional boolean flag that governs whether the 
	 * 				  full name of the month is returned or its abbreviation.
	 * 
	 * @returns {String} The name of the weekday.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	function getMonthName(/**<a href="http://www.w3schools.com/jsref/jsref_obj_number.asp">Number</a>*/index,
						  /**<a href="http://www.w3schools.com/jsref/jsref_obj_boolean.asp">Boolean</a>*/getAbbr){
		if(getAbbr) return monthNames[index].abbr;
		else return monthNames[index].name;
	};
	
	/**
	 * <p>Gets {@link Week} based on the <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a> pass in.</p> 
	 * @private 
	 * @param date Represents some arbitrary calendar date.
	 * 
	 * @returns {@link Week} An array of weekdays that represents an entire week that contains the <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a> passed in.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	function getWeek(/**<a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a>*/date){
		var weekdays = new Array();
		
		var weekDaysBefore = getRemainingWeekDaysBefore(new Date(date.getTime()));
		for(var weekday in getRemainingWeekDaysBefore(new Date(date.getTime()))){
			if(weekday !== undefined) weekdays[weekdays.length] = weekDaysBefore[weekday];
		}
		
		weekdays[weekdays.length] = new Day(new Date(date.getTime()));
		
		var weekDaysAfter = getRemainingWeekDaysAfter(new Date(date.getTime()));
		for(var weekday in weekDaysAfter){
			if(weekday !== undefined) weekdays[weekdays.length] = weekDaysAfter[weekday];
		}

		return new Week(weekdays);
	};
	
	
	/**
	 * <p>Gets {@link Week} before the <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a> pass in.</p> 
	 * @private 
	 * @param date Represents some arbitrary calendar date.
	 * 
	 * @returns {@link Week} An array of weekdays that represents an entire week that is before the <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a> passed in.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	function getWeekBefore(/**<a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a>*/date){
		var weekdays = new Array();
		var totalDays = that.TOTAL_WEEKDAYS+date.getDay();
		
		do{
			var d = new Date(date.setDate(date.getDate()-1));
			if(totalDays <= that.TOTAL_WEEKDAYS){
				var weekday = totalDays -1;
				weekdays[weekday] = new Day(d);
			}
		} while(totalDays-- >1);
		return new Week(weekdays);
	};
	
	/**
	 * <p>Gets {@link Week} after the <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a> pass in.</p> 
	 * @private 
	 * @param date Represents some arbitrary calendar date.
	 * 
	 * @returns {@link Week} An array of weekdays that represents an entire week that is after the <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a> passed in up to and including the last day in the week.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	function getWeekAfter(/**<a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a>*/date){
		var weekdays = new Array();
		var totalDays = (that.TOTAL_WEEKDAYS-1 - date.getDay()) + that.TOTAL_WEEKDAYS;
		
		do{
			var d = new Date(date.setDate(date.getDate()+1));
			if(totalDays <= that.TOTAL_WEEKDAYS){
				var weekday = that.TOTAL_WEEKDAYS - totalDays;
				weekdays[weekday] = new Day(d);
			}
		} while(totalDays-- > 1);
		return new Week(weekdays);
	};
	
	/**
	 * <p>Gets remaining weekdays left in the {@link Week} before the <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a> pass in.</p> 
	 * @private 
	 * @param date Represents some arbitrary calendar date.
	 * 
	 * @returns {@link Array} An array of the remaining weekdays of the week before is the <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a> passed in.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	function getRemainingWeekDaysBefore(/**<a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a>*/date){
		var weekdays = new Array();
		var weekday = date.getDay() -1;
		
		do{
			weekdays[weekday] = new Day(new Date(date.setDate(date.getDate()-1)));
		} while(weekday-- >0);
		
		return weekdays;
	};
	
	/**
	 * <p>Gets remaining weekdays left in the {@link Week} after the <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a> pass in.</p> 
	 * @private 
	 * @param date Represents some arbitrary calendar date.
	 * 
	 * @returns {@link Array} An array of the remaining weekdays of the week after the <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a> passed in.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	function getRemainingWeekDaysAfter(/**<a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a>*/date){
		var weekdays = new Array();
		var weekday = date.getDay()+1;
		
		do{
			weekdays[weekday] = new Day(new Date(date.setDate(date.getDate()+1)));
		} while(weekday++ < that.TOTAL_WEEKDAYS-1);
		
		return weekdays;
	};
	
	
	/**
	 * <p>Retrieves the first week in the calendar month.
	 * @private 
	 * @param {@link Week} Represents some arbitrary calendar week in a calendar month.
	 * 
	 * @returns {@link Week} The first week in calendar month.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	function getFirstWeekInMonth(/**{@link Week}*/someWeekInMonth){
		var firstWeekInMonth = null;
		
		do{
			if(someWeekInMonth.isFirstWeekInMonth()){
				firstWeekInMonth = someWeekInMonth;
			} else {
				someWeekInMonth = getWeekBefore(someWeekInMonth.sunday.getDate());
			}
		} while(firstWeekInMonth == null);
		
		return firstWeekInMonth;
	};
	
	/**
	 * <p>Retrieves all the weeks in a calendar month.
	 * @private 
	 * @param {@link Week} Represents some arbitrary calendar <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a> in a calendar month.
	 * 
	 * @returns {@link Week} The all the {@link Week}s in the calendar month.
	 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
	*/
	function getWeeksInMonth(/**<a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a>*/date){
		var weeksInMonth = new Array();
		var someWeekInMonth = getWeek(date);
		var firstWeekInMonth = getFirstWeekInMonth(someWeekInMonth);
		
		if(firstWeekInMonth != null){
			 weeksInMonth[0] = firstWeekInMonth;
			 weeksInMonth[1] = getWeekAfter(weeksInMonth[0].saturday.getDate());
			 weeksInMonth[2] = getWeekAfter(weeksInMonth[1].saturday.getDate());
			 weeksInMonth[3] = getWeekAfter(weeksInMonth[2].saturday.getDate());
			 
			 if(!weeksInMonth[3].isLastWeekInMonth()) weeksInMonth[4] = getWeekAfter(weeksInMonth[3].saturday.getDate());
			 if(!weeksInMonth[4].isLastWeekInMonth()) weeksInMonth[5] = getWeekAfter(weeksInMonth[4].saturday.getDate());
		}
		
		return weeksInMonth;
	};
}
/**
 * <p>Static field that is used to get calendar full name, abbreviated names, and total calendar days.</p>
 * @static
 * @field
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
*/
Month.prototype.monthNames = monthNames;

/**
 * <p>Static field that is used to get calendar total calendar days of the previous month.</p>
 * @static
 * @function
 * @param date Represents some arbitrary calendar date.
 * @return {@link <a href="http://www.w3schools.com/jsref/jsref_obj_number.asp">Number</a>} The total days in the previous month.
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
*/
Month.prototype.getPreviousMonthTotalDays = function(/**<a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a>*/date){
	if(date.getMonth() == 0){
		return this.monthNames[11].getTotalDays(date.getFullYear());
	} else {
		return this.monthNames[date.getMonth()-1].getTotalDays(date.getFullYear());
	}
	
};


/**
 * <p>Static function that is used to get the total calendar days of the next month.</p>
 * @static
 * @function
 * @param date Represents some arbitrary calendar date.
 * @return {@link <a href="http://www.w3schools.com/jsref/jsref_obj_number.asp">Number</a>} The total days in the next month.
 * @author <a href="mailto:pouncilt.developer@gmail.com">Tont&eacute; Pouncil</a>
*/
Month.prototype.getNextMonthTotalDays = function(/**<a href="http://www.w3schools.com/jsref/jsref_obj_date.asp">Date</a>*/date){
	if(date.getMonth() == 11){
		return this.monthNames[0].getTotalDays(date.getFullYear());
	} else {
		return this.monthNames[date.getMonth()+1].getTotalDays(date.getFullYear());
	}
};


