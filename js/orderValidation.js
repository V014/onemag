function validateForm() {
    var x = document.forms["orderForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out first");
      return false;
    }
  }