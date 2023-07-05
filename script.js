var userForm = document.getElementById('userForm');
var userDetailsDiv = document.getElementById('userDetails');

userForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  // Create user object
  var user = {
    name: name,
    email: email,
    phone: phone
  };

  // Store user details in local storage
  localStorage.setItem('userDetails', JSON.stringify(user));

  // Display user details on the screen
  userDetailsDiv.innerHTML = `
    <h2>User Details:</h2>
    <p>Name: ${user.name}</p>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
  `;

  // Reset the form
  userForm.reset();
});


