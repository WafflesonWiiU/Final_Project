
//hide images when user clicks button
function hideImages() {
    var x = document.getElementById("productImages");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  //Check if user was correct in their guess
  function guessCheck(){
    if (z == document.getElementById("numberInput").value){
      console.log ("good")
      document.getElementById("results").innerHTML = "you got the answer correct!";
    }
    else if (z > document.getElementById("numberInput").value){
      document.getElementById("results").innerHTML = "guess higher";
    }
    else if (z < document.getElementById("numberInput").value){
      document.getElementById("results").innerHTML = "guess less";
    }
      
    }
    
  
  var z = Math.floor(Math.random() * 101)
//generate a number
  function Rng(){
     z = Math.floor(Math.random() * 101)
  }