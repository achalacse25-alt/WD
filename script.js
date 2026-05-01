// Wait for the page to fully load first
window.onload = function() {

  // Get the form element by its id
  var form = document.getElementById("contactForm");

  // This function runs when the form is submitted
  form.onsubmit = function(event) {

    // Prevent the page from refreshing on submit
    event.preventDefault();

    // Step 1: Read the values typed in the form fields
    var name    = document.getElementById("fullname").value;
    var email   = document.getElementById("email").value;
    var phone   = document.getElementById("phone").value;
    var service = document.getElementById("service").value;
    var message = document.getElementById("message").value;

    // Step 2: Save each value to localStorage
    localStorage.setItem("userName",    name);
    localStorage.setItem("userEmail",   email);
    localStorage.setItem("userPhone",   phone);
    localStorage.setItem("userService", service);
    localStorage.setItem("userMessage", message);

    // Step 3: Show the success message
    document.getElementById("successMsg").style.display = "block";

    // Step 4: Read back from localStorage and display it on the page
    document.getElementById("showName").innerHTML    = localStorage.getItem("userName");
    document.getElementById("showEmail").innerHTML   = localStorage.getItem("userEmail");
    document.getElementById("showPhone").innerHTML   = localStorage.getItem("userPhone") || "Not provided";
    document.getElementById("showService").innerHTML = localStorage.getItem("userService") || "Not selected";
    document.getElementById("showMessage").innerHTML = localStorage.getItem("userMessage");

    // Step 5: Show the stored data box
    document.getElementById("storedData").style.display = "block";

  };

};