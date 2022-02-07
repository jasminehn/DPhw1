/*function expandTerms() {
    var x = document.getElementById("terms-text");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}*/

function checkAll2() {
    document.getElementById("checkbox").checked = true;
}

function checkAll1() {
    //document.getElementById("checkbox").checked = true;
    var x = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var checkbox of x) {
        checkbox.checked = true;
    } 
}

function checkAll(source) {
    checkboxes = document.getElementById("checkbox").checked
    for(var checkbox in checkboxes)
    checkbox.checked = source.checked;
}

function toggleHide(){
  var x = document.getElementById("terms-text");
  x.classList.toggle('hide');
}

function checkChanged(){
  // Let's make this as annoying as possible
  if(document.getElementById("checkbox").checked == false){
    alert("Are you sure you want to do that? If so, click OK.");
  }
}