/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: 
   Date:   

*/

// Execute (call) the function to run and display the countdown clock
runClock();
setInterval("runClock()", 1000); // setInterval will repeat the function based on given time in milliseconds.


// Function to create and run the countdown clock
function runClock() {

   // Store the current date and time
   let currentDay = new Date(); // Date pulls date and time from browser. in parenthesis we can explicitly declare a value.
   let dateStr = currentDay.toLocaleDateString(); // makes date into mm/dd/yyy format
   let timeStr = currentDay.toLocaleTimeString(); // makes time into hh:mm:ssAM/PM

   // Display current date and time in the element w ID of dateNow
   document.getElementById("dateNow").innerHTML = dateStr + "<br/>" + timeStr;

   // Calculate the days until January 1st
   let newYear = new Date("January 1, 2018");
   let nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   let daysLeft = (newYear - currentDay)/(1000*60*60*24); // divide by milliseconds*seconds*minutes*hours

   // Calculate the hours left in the current day
   let hrsLeft = (daysLeft - Math.floor(daysLeft))*24 
   //subtract daysLeft whole number from daysLeft decimal value then multiply by 24 (hours)

   // Calculate the minutes left in the current hour
   let minsLeft = (hrsLeft - Math.floor(hrsLeft))*60

   //Calculate the seconds left in the current hour
   let secsLeft = (minsLeft - Math.floor(minsLeft))*60

   // Display time left until New Year's Eve
   document.getElementById("days").textContent = Math.floor(daysLeft); // floor returns a whole num.
   document.getElementById("hrs").textContent = Math.floor(hrsLeft); 
   document.getElementById("mins").textContent = Math.floor(minsLeft); 
   document.getElementById("secs").textContent = Math.floor(secsLeft); 
}