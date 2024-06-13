function validateForm() {
    var x = document.forms["orderForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out first");
      return false;
    }
  }

function price() {
  var x = document.forms["orderForm"]["MagPrint"].value;
  if (x == "Physical") {
    console.log('MK40000');
  } else{
    console.log('MK7000');
  }
}