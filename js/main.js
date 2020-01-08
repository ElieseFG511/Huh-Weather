/* -----------------------------------------------
   Function for retrieving the main weather info
   ----------------------------------------------- */

// Replace the lat/long below with the lat/long for your desired location.
// Get your city lat/long using https://www.latlong.net/
var latlong = '41.740681,-71.308609';

// Your unique API key. Place the long string of characters between the quotes.
var apikey = 'dbc46544c51b500d91926c7de6e93902';

// Access the DarkSky API for weather data. DO NOT EDIT THIS LINE.
$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+apikey+'/' + latlong)

// Display the weather content once it is loaded, not before.
.done(function(forecast) {
	// Your header section covers over the main weather info.
	// When the data is available, you will need to hide/remove this section
	// in order to see the main content. How you do this is up to you.
	
	// The most basic basic approach is to just hide the header (uncomment to use)
		
	// $('header').hide();
	
	// Other methods include animating the header away.
	// This can be done by adding a class name containing CSS animation
	// code to the header like this (uncomment to use)

	// $('header').addClass('anim');

	// This assumes you have written a class with the animation code
	// and named it .anim

	// Another way to remove the header is to provide a button and the event
	// to trigger what happens when the button is clicked (uncomment to use)

	$('.home').append('<div class="button"><p>Click for your B.S.</p></div>');
	$('.home .button').click(function(){
	  $('.home').hide();
	});

	// The following line calls a function to display
	// the main weather information. DO NOT EDIT THIS LINE.
	displayData(forecast);
})

// Print the data object feturned from DarkSky for all the details
// DO NOT EDIT THIS LINE.
.always(function(forecast) {
	console.log(forecast);
});



/* -----------------------------------------------
   Function for displaying the main weather info
   ----------------------------------------------- */

// All of the data comes from the "forecast" object returned
// from the DarkSky API. Inspect this page in the browser
// for a full list of data that can be used using the methods below.

function displayData(forecast){

	// Target an element in your interface and display
	// dynamic weather information inside of it

	// All of the data you need is located in the "Console" tab
	// when you inspect th code in the browser
	// Click the arrow next to the "Object" to drill down into the data
	// You can reference these data points in your code using the following
	// method(s).

	// For example, if I have an element <div class="today"> in my main content area
	// I can add data from the "Daily" array like this

	// $('.today').html(forecast.daily.data[0].temperatureHigh);
	
	// In this example, the high temperature for the first day of the week
	// (referenced by the number 0) is written as HTML inside the <div class="today"> element
	// If I want to round this number up, I would modify the code like this

	// $('.today').html(Math.round(forecast.daily.data[0].temperatureHigh));

	// If I want to display the same information for tomorrow, change the 0 to 1

	// $('.today').html(Math.round(forecast.daily.data[1].temperatureHigh));

	// If I want to display a summary of the weather
	// (like, "scattered thundershowers...") for today

	// $('.today').html(forecast.daily.data[0].summary);

	// If I want to modify the display of the page element based on the weather
	// I can access the "icon" property. This returns a value that can be used
	// as a CSS class name that you can create with your style details

	// Note – the value of "icon" above needs to be checked in the inspect
	// panel. It may say "rain". If this is the case, you could create a rule
	// inside your CSS called .rain and then add, maybe, a background color
	// or image. The full range of weather values returned by the "icon" property are

	// "clear-day", "clear-night", "rain", "snow", "sleet", "wind", "fog",
	// "cloudy", "partly-cloudy-day", "partly-cloudy-night", "hail",
	// "thunderstorm" and "tornado"


	// Data For Today 
	$('.weather .day').html(displayDay(0));
	$('.weather .icon').html(displayIcon(forecast.daily.data[0].icon));
	$('.weather h1').html(Math.round(forecast.daily.data[0].temperatureHigh));
	$('.weather h2').html(Math.round(forecast.daily.data[0].temperatureLow));

	// for week
	$('.fut-weath .day-1 .day').html(displayDay(1));
	$('.fut-weath .day-1 .temp-high').html(Math.round(forecast.daily.data[1].temperatureHigh));
	$('.fut-weath .day-1 .temp-low').html(Math.round(forecast.daily.data[1].temperatureLow));
	$('.fut-weath .day-1 .icon').html(displayIcon(forecast.daily.data[1].icon));

	$('.fut-weath .day-2 .day').html(displayDay(2));
	$('.fut-weath .day-2 .temp-high').html(Math.round(forecast.daily.data[2].temperatureHigh));
	$('.fut-weath .day-2 .temp-low').html(Math.round(forecast.daily.data[2].temperatureLow));
	$('.fut-weath .day-2 .icon').html(displayIcon(forecast.daily.data[2].icon));

	$('.fut-weath .day-3 .day').html(displayDay(3));
	$('.fut-weath .day-3 .temp-high').html(Math.round(forecast.daily.data[3].temperatureHigh));
	$('.fut-weath .day-3 .temp-low').html(Math.round(forecast.daily.data[3].temperatureLow));
	$('.fut-weath .day-3 .icon').html(displayIcon(forecast.daily.data[3].icon));

	$('.fut-weath .day-4 .day').html(displayDay(4));
	$('.fut-weath .day-4 .temp-high').html(Math.round(forecast.daily.data[4].temperatureHigh));
	$('.fut-weath .day-4 .temp-low').html(Math.round(forecast.daily.data[4].temperatureLow));
	$('.fut-weath .day-4 .icon').html(displayIcon(forecast.daily.data[4].icon));
	
	$('.fut-weath .day-5 .day').html(displayDay(5));
	$('.fut-weath .day-5 .temp-high').html(Math.round(forecast.daily.data[5].temperatureHigh));
	$('.fut-weath .day-5 .temp-low').html(Math.round(forecast.daily.data[5].temperatureLow));
	$('.fut-weath .day-5 .icon').html(displayIcon(forecast.daily.data[5].icon));

	$('.fut-weath .day-6 .day').html(displayDay(6));
	$('.fut-weath .day-6 .temp-high').html(Math.round(forecast.daily.data[6].temperatureHigh));
	$('.fut-weath .day-6 .temp-low').html(Math.round(forecast.daily.data[6].temperatureLow));
	$('.fut-weath .day-6 .icon').html(displayIcon(forecast.daily.data[6].icon));


	// $('.home .button').click(function(){
	//   $('.home').addClass('hidden');
	// })
	$('.home .button').click(function(){
	  $('header').removeClass('hidden');
	})

	$('header .main-content .weather .mo-info').click(function(){
	  $('header').addClass('hidden');
	})
	$('header .main-content .weather .mo-info').click(function(){
	  $('.more-info').removeClass('hidden');
	})



	$('.more-info .mo-info2').click(function(){
	  $('header').removeClass('hidden');
	})
	$('.more-info .mo-info2').click(function(){
	  $('.more-info').addClass('hidden');
	})


}


/* -----------------------------------------------
   Function for creating day of the week
   ----------------------------------------------- */

// based on a system where 0 = today, 1 = tomorrow, etc.
// note: the number system below does not immediately correlate
// for example, 0 for today does not line up with 0 for Sunday below
// how this works – in the return statement, d.getDay() gets today's date
// as a number (if today is Thursday, d.getDay() will be 4)
// adding "n" to this number gives you how many days from today.
// n is passed as an argument to the displayDay() function
// in the main body of the code above.
// if today is Thursday, the 4th day of the week,
// and the number 2 is passed as an argument, 
// the function will return the number 6. 6 maps to Saturday in the 
// weekday array below.

function displayDay(n){

	var d = new Date();
	var weekday = new Array();

	weekday[0] = "Sun";
	weekday[1] = "Mon";
	weekday[2] = "Tue";
	weekday[3] = "Wed";
	weekday[4] = "Thu";
	weekday[5] = "Fri";
	weekday[6] = "Sat";

	var dispDay = d.getDay() + n;

	// adjust number system for numbers over 6
	// subtract 7 from totals higher than 6
	// to keep the day numbers in the array range above
	if(dispDay > 6){
		dispDay = dispDay - 7;
	}

	return weekday[ dispDay ];

}


/* -----------------------------------------------
   Function for converting timestampt to readable text
   Source: https://stackoverflow.com/a/6078873
   ----------------------------------------------- */

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  var time = hour + ':' + min ;
  return time;
}


/* -----------------------------------------------
   Function for adding icon files
   ----------------------------------------------- */

function displayIcon(n){
	switch(n) {
		case "clear-day":
    		return '<img src="img/icons/Sun.svg" alt="Clear Day">';
    		break;
    	case "clear-night":
    		return '<img src="img/icons/Moon-Full.svg" alt="Clear Night">';
    		break;
    	case "rain":
    		return '<img src="img/icons/Cloud-Rain.svg" alt="Rain">';
    		break;
    	case "snow":
    		return '<img src="img/icons/Snowflake.svg" alt="Snow">';
    		break;
    	case "sleet":
    		return '<img src="img/icons/Cloud-Hail.svg" alt="Sleet">';
    		break;
    	case "wind":
    		return '<img src="img/icons/Wind.svg" alt="Wind">';
    		break;
    	case "fog":
    		return '<img src="img/icons/Cloud-Fog.svg" alt="Fog">';
    		break;
    	case "cloudy":
    		return '<img src="img/icons/Cloud.svg" alt="Cloudy">';
    		break;
    	case "partly-cloudy-day":
    		return '<img src="img/icons/Cloud-Sun.svg" alt="Partly Cloudy Day">';
    		break;
    	case "partly-cloudy-night":
    		return '<img src="img/icons/Cloud-Moon.svg" alt="Partly Cloudy Night">';
    		break;
    	case "hail":
    		return '<img src="img/icons/Cloud-Hail.svg" alt="Hail">';
    		break;
    	case "thunderstorm":
    		return '<img src="img/icons/Cloud-Lightening.svg" alt="Thunderstorm">';
    		break;
    	case "tornado":
    		return '<img src="img/icons/Tornado.svg" alt="Tornado">';
    		break;
  		default:
    		// code block
	}
}