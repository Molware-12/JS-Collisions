document.addEventListener("keydown", function(event){
  var d = document.getElementById("dino");
  var dLong = parseInt(d.style.top) || 0;
  var dLateral = parseInt(d.style.left) || 0;

  var o = document.getElementById("obstacle");
  var oLong = parseInt(o.style.top) || 0;
  var oLateral = parseInt(o.style.left) || 0;

  switch(event.key){
      case "w":
        dLong -= 5;
        d.style.top = dLong + "px";
      break;
      
      case "a":
        dLateral -= 5;
        d.style.left = dLateral + "px";
      break;

      case "s":
        dLong += 5;
        d.style.top = dLong + "px";
      break;

      case "d":
        dLateral += 5;
        d.style.left = dLateral + "px";
      break;

      case "ArrowUp":
        oLong -= 5;
        o.style.top = oLong + "px";
      break;

      case "ArrowLeft":
        oLateral -= 5;
        o.style.left = oLateral + "px";
      break;

      case "ArrowRight":
        oLateral += 5;
        o.style.left = oLateral + "px";
      break;

      case "ArrowDown":
        oLong += 5;
        o.style.top = oLong + "px";
      break;
    }
});

function control() {
  var choice = prompt("Which circle would you like to control with the cursor?\nType 'blue' or 'green': ");

  if (choice == "blue") {
    var blue = document.getElementById("dino");

    document.addEventListener("mousemove", function(event) {
      var mouseX = event.clientX;
      var mouseY = event.clientY;
      blue.style.top = mouseY + "px";
      blue.style.left = (mouseX + 20) + "px";
    });
  } else if (choice == "green") {
    var green = document.getElementById("obstacle");

    document.addEventListener("mousemove", function(event) {
      var mouseX = event.clientX;
      var mouseY = event.clientY;
      green.style.top = mouseY + "px";
      green.style.left = (mouseX + 20) + "px";
    });
  }
}

function collision() {
    var dino = document.getElementById("dino");
    var obby = document.getElementById("obstacle");
  
    var aCir = dino.getBoundingClientRect();
    var bCir = obby.getBoundingClientRect();
    var dinoRadius = aCir.width / 2;
    var obbyRadius = bCir.width / 2;

    var a = aCir.x - bCir.x;
    var b = aCir.y - bCir.y;

    var distance = Math.sqrt(a **2 + b **2);
    var sum = dinoRadius + obbyRadius;

    if (
        distance <= sum
    ) {
      return true;
    }
  
    return false;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    setInterval(function () {
      if (collision()==true) {
        document.getElementById("display").innerHTML = "Contact";
        window.location.reload();
      } else if (collision()==false){
        document.getElementById("display").innerHTML = "No contact";
      }
    }, 1);
  });
