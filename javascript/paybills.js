function payBills(event) {
    event.preventDefault();
    var billType = document.getElementById('bill-type').value;
    var amount = document.getElementById('amount').value;
  
    // Perform validation and payment logic here
    // ...
  
    var message = document.getElementById('message');
    message.textContent = 'Bill paid successfully.';
  }