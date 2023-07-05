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
  userDetailsDiv.innerHTML += `
    <div class="user">
      <h2>User Details:</h2>
      <p>Name: <span>${user.name}</span> <button class="delete" data-field="name">Delete</button></p>
      <p>Email: <span>${user.email}</span> <button class="delete" data-field="email">Delete</button></p>
      <p>Phone: <span>${user.phone}</span> <button class="delete" data-field="phone">Delete</button></p>
    </div>
  `;

  // Reset the form
  userForm.reset();
});

// Handle delete button click
userDetailsDiv.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    var field = e.target.getAttribute('data-field'); // Get the data-field attribute value
    var content = e.target.previousElementSibling; // Get the corresponding content element

    // Remove the content associated with the field
    content.textContent = '';

    // Optionally, you can also remove the entire user div if desired
    // var userDiv = e.target.parentNode.parentNode;
    // userDiv.remove();
  }
});
