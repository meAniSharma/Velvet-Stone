document.getElementById("paymentMethod").addEventListener("change", function () {
    const method = this.value;
    document.getElementById("cardDetails").style.display = method === "card" ? "block" : "none";
    document.getElementById("upiDetails").style.display = method === "upi" ? "block" : "none";
  });
  
  document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Payment successful! Receipt will be emailed.");
  });