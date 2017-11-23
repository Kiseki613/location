
var watchID;

var locationOptions = { 
	maximumAge: 10000, 
	timeout: 6000, 
	enableHighAccuracy: true 
};






//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
	
	//set up listener for button click
	
    $('#startLocationButton').on('click', updatePosition);
	$('#stopLocationButton').on('click', stopPosition);

	//change time box to show message
	$('#time').val("Press the button to get location data");
	
});


//Call this function when you want to get the current position
function updatePosition() {
	
	//change time box to show updated message
	$('#time').val("Getting data...");
	
	//instruct location service to get position with appropriate callbacks
	watchID = navigator.geolocation.watchPosition(successPosition, failPosition, locationOptions);
}


//called when the position is successfully determined
function successPosition(position) {
	
	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	var time = new Date (position.timestamp);
    
    var date = time.toDateString();
    
	var latitude = position.coords.latitude;
    
    var longitude = position.coords.longitude;

        
        
        
	
	//OK. Now we want to update the display with the correct values
	$('#time').val(date);
	$('#lattext').val(latitude);
    $('#longtext').val(longitude);
	
}

function stopPosition() {
	
	$('#time').val("Press to stop get location data");
	navigator.geolocation.clearWatch(watchID);
}


//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);
	
}