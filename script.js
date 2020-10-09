var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

document.getElementById("datetime").addEventListener("click",function() {
    alert("Current date and time (GMT)");
  });

  