window.onload = function() {

  var form = document.getElementById("contactForm");

  form.onsubmit = function(event) {

    event.preventDefault();

    var name    = document.getElementById("fullname").value;
    var email   = document.getElementById("email").value;
    var phone   = document.getElementById("phone").value;
    var service = document.getElementById("service").value;
    var message = document.getElementById("message").value;

    localStorage.setItem("userName",    name);
    localStorage.setItem("userEmail",   email);
    localStorage.setItem("userPhone",   phone);
    localStorage.setItem("userService", service);
    localStorage.setItem("userMessage", message);

    document.getElementById("successMsg").style.display = "block";

    document.getElementById("showName").innerHTML    = localStorage.getItem("userName");
    document.getElementById("showEmail").innerHTML   = localStorage.getItem("userEmail");
    document.getElementById("showPhone").innerHTML   = localStorage.getItem("userPhone") || "Not provided";
    document.getElementById("showService").innerHTML = localStorage.getItem("userService") || "Not selected";
    document.getElementById("showMessage").innerHTML = localStorage.getItem("userMessage");

    document.getElementById("storedData").style.display = "block";

  };

};