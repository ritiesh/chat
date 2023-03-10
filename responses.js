let array = ["if you want to confirm return type 'yes' else 'no'", "Describe the problem with the product"]
let i = array.length;
function getBotResponse(input) {
  if (i > 0) return array[--i];
  else {
    if (input == "yes") {
      return "return initiated successfully";
    }
    else {
      return "Order return has been cancelled";
    }
  }
}

