let array = ["if you want to confirm return type 'y' else 'no'", "Describe the problem with the product"]
let i = array.length;
function getBotResponse(input) {
  if (i > 0) return array[--i];
  else {
    if (input == 'y') {
      return "return initiated successfully";
    }
    else {
 
      return firstBotMessage();
    }
  }
}

