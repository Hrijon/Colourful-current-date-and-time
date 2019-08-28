
  

  var d = new Date();

  var day = d.getDay();
  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  var hours = d.getHours();
  var minutes = d.getMinutes();


  document.getElementById("day").style.color = "red";
  document.getElementById("day").innerHTML = day;

  document.getElementById("date").style.color = "green";
  document.getElementById("date").innerHTML = date;

  document.getElementById("month").style.color = "yellow";
  document.getElementById("month").innerHTML = month;
  
  document.getElementById("year").style.color = "blue";
  document.getElementById("year").innerHTML = year;

  document.getElementById("hours").style.color = "brown";
  document.getElementById("hours").innerHTML = hours;

  document.getElementById("minutes").style.color = "brown";
  document.getElementById("minutes").innerHTML = minutes;

  