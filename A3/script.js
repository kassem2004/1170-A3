function showNotification() {
    Notification.requestPermission().then(perm => {
      if (perm == "granted") {
          const notification = new Notification("notification", {
          body: "This is my website!!!",
          data: { hello: "This is my notif" },
          icon: "images/smile.jpg"
        });
  
        notification.addEventListener("error", e => {
          alert("error");
        });
      }
    });
  }



function color(bgColor, textColor){
    var allElements = document.querySelectorAll('*');

    for (var i = 0; i < allElements.length; i++) {
        var element = allElements[i];        
        element.style.background = bgColor;
        element.style.color = textColor;      
    }
}

function color1(bgColor, textColor){
    var allElements = document.querySelectorAll('*');

    for (var i = 0; i < allElements.length; i++) {
        var element = allElements[i];        
        element.style.background = bgColor;
        element.style.color = textColor;      
    }
}

function color2(bgColor, textColor){
    var allElements = document.querySelectorAll('*');

    for (var i = 0; i < allElements.length; i++) {
        var element = allElements[i];        
        element.style.background = bgColor;
        element.style.color = textColor;      
    }
}

function calculate() {
    const output = document.getElementById("output");
    var n = document.getElementById("input").value;
    if(isNaN(n)){
      output.textContent = 'Please enter valid numbers';
      return;
    }
    var last = 10*n;
    document.getElementById("output").innerHTML = "The product of 10 multiplied by " + n + " is " + last + ".";
  } 

function handler1(){
  const myButton = document.getElementById('myButton');
  myButton.style.backgroundColor = 'red';
}


var loop = document.getElementById("audio");

function enableLoop() { 
  loop.loop = true;
  loop.load();
} 

function disableLoop() { 
  loop.loop = false;
  loop.load();
} 


  
  