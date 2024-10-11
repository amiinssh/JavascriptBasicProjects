let locationButton = document.getElementById("get-location");
let locationDiv = document.getElementById("location-details");

locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, checkError);
    } else {
        locationDiv.innerText = "Browser does not support Geolocation.";
    }
});

const checkError = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            locationDiv.innerText = "Please allow access to location.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationDiv.innerText = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            locationDiv.innerText = "The request to get location timed out.";
            break;
        default:
            locationDiv.innerText = "An unknown error occurred.";
    }
};

const showLocation = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);

    if (response.ok) {
        const data = await response.json();
        
        if (data.address) {
            locationDiv.innerText = `${data.address.city}, ${data.address.country}`;
        } else {
            locationDiv.innerText = "Unable to retrieve address.";
        }
    } else {
        locationDiv.innerText = "Failed to fetch location data.";
    }
};
