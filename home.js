
function showDate() {
    const now = new Date();
  
    const days = [   
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
      ]  

     const months = [
       "January",
       "February",
       "March",
       "April",
       "May",
       "June",
       "July",
       "August",
       "September",
       "October",
       "Nobember",
       "December",
     ]
  const date =
   `${days[now.getDay()]}
    ${now.getDate()}
    ${months[now.getMonth()]}
    ${now.getFullYear()}`; 
  
document.getElementById("date").innerHTML =
  date;
}
showDate();
setInterval(showDate,1000);



function openYellow() {
  window.location.href = 
    "MTN Portal/mtn.html";
}

function openAT() {
  window.location.href = 
    "AT Portal/at.html";
}

function openTelecel() {
  window.location.href = 
    "Telecel Portal/telecel.html";
}