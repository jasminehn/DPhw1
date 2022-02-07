//checks off all checkboxes when hovering over the continue button
function checkAll(){
  var x = document.getElementsByClassName("cb");
  for(var thing of x){
    thing.checked = true;
  }
}

//toggles hiding or showing the terms and conditions text
function toggleHide(){
  var x = document.getElementById("terms-text");
  x.classList.toggle('hide');
}

//alerts the user when they uncheck a checkbox
function checkChanged(){
  // Let's make this as annoying as possible
  if(document.getElementById("cb1").checked == false || document.getElementById("cb2").checked == false
  || document.getElementById("cb3").checked == false || document.getElementById("cb4").checked == false
  || document.getElementById("cb5").checked == false || document.getElementById("cb6").checked == false
  || document.getElementById("cb7").checked == false || document.getElementById("cb8").checked == false
  || document.getElementById("cb9").checked == false || document.getElementById("cb10").checked == false) {
    alert("Are you sure you want to do that?");
  }
}