function ticketHandler(ticket, isIncrease) {
  const ticketClassValue = document.getElementById(ticket + "-class-value");
  const ticketClassValueNumber = parseInt(ticketClassValue.value);

  let ticketClassNewValue = ticketClassValueNumber;

  if (isIncrease == true) {
    ticketClassNewValue = ticketClassValueNumber + 1;
  }
  if (isIncrease == false && ticketClassNewValue > 0) {
    ticketClassNewValue = ticketClassValueNumber - 1;
  }

  ticketClassValue.value = ticketClassNewValue;

  calculateTicketPrice();
}

function calculateTicketPrice() {
  const firstClass = document.getElementById("first-class-value").value;
  const economyClass = document.getElementById("economy-class-value").value;
  const totalPrice = firstClass * 150 + economyClass * 100;
  const total = (document.getElementById("subtotal").innerText = totalPrice);
  const includedVat = (document.getElementById("vat").innerText =
    totalPrice * 0.1);
  const grandTotal = total + includedVat;
  document.getElementById("total-amount").innerText = grandTotal;
}



