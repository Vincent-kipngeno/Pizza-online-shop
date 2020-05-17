function order(size, crust, quantity, deliver, location) {
  this.size = size;
  this.crust = crust;
  this.quantity = quantity;
  this.deliver = deliver;
  this.location = location;
  this.toppings = [];
  }
var singlePizzaPrice;
var deliveryPrice = 300;
order.prototype.price = function () {
  var smallPrice = 500;
  var mediumPrice = 1000;
  var largePrice = 1500;
  var crustPrice;
  var singleToppingPrice;
  var toppingsPrice = 0;
  var totalPrice;
  switch (this.crust) {
    case "crispy":
      crustPrice = 50;
      break;
    case "stuffed":
      crustPrice = 80;
      break;
    case "glutten-free":
      crustPrice = 100;
      break;
    case "flatbread":
      crustPrice = 120;
      break;
    default:
      crustPrice = 0;
  }
  if (this.size == "small") {
    this.toppings.forEach(function(topping) {
      switch (topping) {
        case "pepperoni":
          singleToppingPrice = 60;
          break;
        case "onions":
          singleToppingPrice = 40;
          break;
        case "sausage":
          singleToppingPrice = 100;
          break;
        case "bacon":
          singleToppingPrice = 150;
          break;
        case "extra-cheese":
          singleToppingPrice = 100;
          break;
        case "black-olives":
          singleToppingPrice = 100;
          break;
        default:
          singleToppingPrice = 0;
      }
      toppingsPrice += singleToppingPrice;
    });
    singlePizzaPrice = toppingsPrice + crustPrice + smallPrice;
    if (this.deliver == "yes") {
      totalPrice = (singlePizzaPrice * this.quantity) + deliveryPrice;
    } else {
      totalPrice = singlePizzaPrice * this.quantity;
    }
  }
  if (this.size == "medium") {
    this.toppings.forEach(function(topping) {
      switch (topping) {
        case "pepperoni":
          singleToppingPrice = 100;
          break;
        case "onions":
          singleToppingPrice = 80;
          break;
        case "sausage":
          singleToppingPrice = 140;
          break;
        case "bacon":
          singleToppingPrice = 200;
          break;
        case "extra-cheese":
          singleToppingPrice = 150;
          break;
        case "black-olives":
          singleToppingPrice = 120;
          break;
        default:
          singleToppingPrice = 0;
      }
      toppingsPrice += singleToppingPrice;
    });
    singlePizzaPrice = toppingsPrice + crustPrice + mediumPrice;
    if (this.deliver == "yes") {
      totalPrice = (singlePizzaPrice * this.quantity) + deliveryPrice;
    } else {
      totalPrice = singlePizzaPrice * this.quantity;
    }
  }
  if (this.size == "large") {
    this.toppings.forEach(function(topping) {
      switch (topping) {
        case "pepperoni":
          singleToppingPrice = 140;
          break;
        case "onions":
          singleToppingPrice = 120;
          break;
        case "sausage":
          singleToppingPrice = 180;
          break;
        case "bacon":
          singleToppingPrice = 250;
          break;
        case "extra-cheese":
          singleToppingPrice = 200;
          break;
        case "black-olives":
          singleToppingPrice = 140;
          break;
        default:
          singleToppingPrice = 0;
      }
      toppingsPrice += singleToppingPrice;
    });
    singlePizzaPrice = toppingsPrice + crustPrice + largePrice;
    if (this.deliver == "yes") {
      totalPrice = (singlePizzaPrice * this.quantity) + deliveryPrice;
    } else {
      totalPrice = singlePizzaPrice * this.quantity;
    }
  }
  return totalPrice;
};
order.prototype.orderDetails = function () {
  return ("<span style = 'color: red'>" + this.size + " sized pizza(s):</span>" +
          "<ul>" +
            "<li>Crust: " + this.crust + "</li>" +
            "<li>Topping(s):" + this.toppings.join(', ') + "</li>" +
            "<li>Quantity: " + this.quantity + "</li>" +
            "<li>Delivery: " + this.deliver + "</li>" +
            "<li>Location: " + this.location + "</li>" +
            "<li style = 'color: black;'> Charge: Kshs" + this.price() + "</li>" +
          "</ul>");
};
function handler(noOfPizzas, deliver, location){
  var pizzaSize = $(".size").val();
  var pizzaCrust = $(".crust").val();
  if (deliver == "no") {
    var area = "none";
  } else {
    var area = location;
  }
  newOrder = new order (pizzaSize, pizzaCrust, noOfPizzas, deliver, area);
  $.each($("input[name='topping']:checked"), function(){
    newOrder.toppings.push($(this).val());
  });
}
