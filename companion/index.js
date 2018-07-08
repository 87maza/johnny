// Import the Companion module
import { me } from "companion"
console.log('hello from companion')

// permissions.granted("run_background")
// Monitor for significant changes in physical location
me.monitorSignificantLocationChanges = true

// if (me.launchReasons.locationChanged) {
//   // The companion was started due to a significant change in physical location
  console.log("HELLO")
  console.log("Significant location change!")
  console.log(me.launchReasons.locationChanged)
  var pos = me.launchReasons.locationChanged.position
  console.log("Latitude: " + pos.coords.latitude,
              "Longitude: " + pos.coords.longitude)
//}