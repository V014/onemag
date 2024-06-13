function validateForm() {
    var x = document.forms["orderForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out first");
      return false;
    }
  }

function price() {
  var selectedMagType = document.forms["orderForm"]["MagPrint"].value;
  var price = document.getElementById("Price");
  if (selectedMagType == "Physical") {
    price.innerText = "Cost: Mk40,000";
  } else if (selectedMagType == "Digital"){
    price.innerText = "Cost: Mk7,000";
  } else {
    price.innerText = "Choose Magazine type!";
  }
}