var users = JSON.parse(localStorage.getItem('users'));

//function to find user by username
function findUserByUsername(username){
    for(var i = 0; i<users.length; i++){
        if(users[i].username === username){
            return users[i];
        }
    }
    return null;
}

// updates user info
function updateUsers(){
    localStorage.setItem('users', JSON.stringify(users));
}

// Withdraw money function
function withdrawMoney() {
    var withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);

    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        var user = findUserByUsername(localStorage.getItem('user'));
        user.balance -= withdrawAmount;
        updateUsers();
        document.getElementById('balance').textContent = user.balance.toFixed(2);
        alert('Withdrawal successful!');
    } else {
        alert('Invalid withdrawal amount!');
    }
}

// Transfer money function
function transferMoney() {
    var transferAmount = parseFloat(document.getElementById('transferAmount').value);
    var recipient = document.getElementById('recipient').value;

    if (transferAmount > 0 && transferAmount <= balance && recipient !== '') {
        var sender = findUserByUsername(localStorage.getItem('user'));
        var receiver = findUserByUsername(recipient);

        if (receiver) {
            sender.balance -= transferAmount;
            receiver.balance += transferAmount;
            updateUsers();
            document.getElementById('balance').textContent = sender.balance.toFixed(2);
            alert('Transfer successful!');
        } else {
            alert('Recipient not found!');
        }
    } else {
        alert('Invalid transfer amount or recipient!');
    }
}

function payBills(event) {
    event.preventDefault();
    var user = findUserByUsername(localStorage.getItem('user'));
    var billType = document.getElementById('bill-type').value;
    var amount = document.getElementById('amount').value;


    if (amount > 0 && amount <= balance) {

        user.balance -= amount;
        updateUsers();
        var message = document.getElementById('message');
        message.textContent = 'Bill paid successfully.';
    } else {
        alert('Not enough balance!');
    }
  }

//validation for signup
function validateSignupForm() {
    var username = document.getElementById("signup-username").value;
    var password = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById("signup-confirm-password").value;
  
    if (username === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields.");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    // Save the signup data to localStorage
    var newUser = {
        username:username,
        password: password,
        baalnce: 0.0
    }

    users.push(newUser);
    updateUsers();
    localStorage.setItem("signup-username", username);
    localStorage.setItem("signup-password", password);
    
    return true;
  }
  
  // Function to validate the login form
  function validateLoginForm() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
  
    if (username === "" || password === "") {
      alert("Please fill in all fields.");
      return false;
    }
  
    // Retrieve the signup data from localStorage
    var savedUsername, password, balance= findUserByUsername(username)
    // var savedUsername = localStorage.getItem("signup-username");
    // var savedPassword = localStorage.getItem("signup-password");
    
    if (username !== savedUsername || password !== savedPassword) {
      alert("Invalid username or password.");
      return false;
    }
    else{
        alert("Successfully LoggedIn.");
        window.location.href='dashboard.html'
        return true;
    }
  }

  
  function checkbalance(){
    document.getElementById("msg").style.visibility = 'visible';
  }