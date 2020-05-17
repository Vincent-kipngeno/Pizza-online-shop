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
