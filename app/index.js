import document from "document";
import { geolocation } from "geolocation";

import { display } from "display";
display.autoOff = false;

let gpsStatus = document.getElementById("gps-status");
let gpsLat = document.getElementById("gps-lat");
let gpsLon = document.getElementById("gps-lon");
let gpsHeading = document.getElementById("gps-heading");
let gpsSpeed = document.getElementById("gps-speed");

console.log('hello from watch')
function refreshData() {

   geolocation.watchPosition(locationSuccess, locationError);

 } 
  

function locationSuccess(position) {
    console.log("GPS on", gpsStatus );
    console.log('latitude', position.coords.latitude)
    console.log('long', position.coords.longitude)

      // gpsStatus.innerText = "GPS on" ;
      // gpsLat.innerText = position.coords.latitude;
      // gpsLon.innerText = position.coords.longitude;
      // gpsHeading.innerText = position.coords.heading;
      // gpsSpeed.innerText = Math.round(position.coords.speed*3.6) + " KMH"; 
  
    }

function locationError(error) {
      console.log("Error: " + error.code,
                  "Message: " + error.message);
      // gpsLat.style.fill = "red";
      gpsStatus.innerText = "Connecting GPS";
      
    }



refreshData();
setInterval(refreshData, 9000);