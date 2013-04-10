basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-*.js',
  'app/lib/jquery/jquery-1.7.2.js',
  'app/js/com.noesiscode.js',
  'app/js/com.noesiscode.extentions.Console.js',
  'app/js/com.noesiscode.extentions.ObjectExtention.js',
  'app/js/com.noesiscode.extentions.StringExtention.js',
  'app/js/com.noesiscode.extentions.DateExtention.js',
  'app/js/com.noesiscode.exceptions.Errors.js',
  'app/js/com.noesiscode.utils.NumberUtility.js',
  'app/js/com.noesiscode.utils.converters.date.DateConverter.js',
  'app/js/com.noesiscode.models.Person.js',
  'app/js/com.noesiscode.calendar.CalendarAPI.js',
  'app/js/com.noesiscode.calendar.utils.MonthUtility.js',
  'app/js/com.noesiscode.calendar.models.exceptions.Errors.js',
  'app/js/com.noesiscode.calendar.models.Event.js',
  'app/js/com.noesiscode.calendar.models.EventTransformer.js',
  'app/js/com.noesiscode.calendar.models.Day.js',
  'app/js/com.noesiscode.calendar.models.Week.js',
  'app/js/com.noesiscode.calendar.models.Month.js',
  'app/js/angular/com.noesiscode.calendar.app.js',
  'app/js/angular/com.noesiscode.calendar.controller.js',
  'app/js/angular/com.noesiscode.calendar.component.js',
  'app/js/angular/com.noesiscode.calendar.service.js',
  'test/lib/angular/angular-mocks.js',
  'test/unit/Tester.js',
  'test/unit/jasmine/TesterSpec.js',
  'test/unit/jasmine/DateConverterSpec.js',
  'test/unit/jasmine/NumberUtilitySpec.js',
  'test/unit/jasmine/NameSpaceSpec.js',
  'test/unit/jasmine/ArraySpec.js',
  'test/unit/jasmine/EventSpec.js',
  'test/unit/jasmine/PersonSpec.js',
  'test/unit/jasmine/CalendarSpec.js'
];

// list of files to exclude
exclude = ['app/lib/angular/angular-*.min.js'];

// enable / disable watching file and executing tests whenever any file changes
// CLI --auto-watch --no-auto-watch
autoWatch = false;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
// CLI --browsers Chrome,Firefox,Safari
browsers = ['Chrome', 'Firefox'];
// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit'
// CLI --reporters progress
reporters = ['dots','junit'];
junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
// Auto run tests on start (when browsers are captured) and exit
// CLI --single-run --no-single-run
singleRun = true;