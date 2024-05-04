const email = document.getElementById("Email");
function ok() {
  if (email == "") {
    alert("enter a email First");
  } else {
    alert("Send Email Sucessfully");
    email.value = "";
  }
}

// contact form

function validateForm() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const subject = document.getElementById("subject").value;
  const agree = document.getElementById("agree").checked;

  const nameError = document.getElementById("name-error");
  const addressError = document.getElementById("address-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const subjectError = document.getElementById("subject-error");
  const agreeError = document.getElementById("agree-error");

  nameError.textContent = "";
  addressError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  subjectError.textContent = "";
  agreeError.textContent = "";

  let isValid = true;

  if (name === "" || /\d/.test(name)) {
    nameError.textContent = "Please enter your name properly.";
    isValid = false;
  }

  if (address === "") {
    addressError.textContent = "Please enter your address.";
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (password === "" || password.length < 6) {
    passwordError.textContent =
      "Please enter a password with at least 6 characters.";
    isValid = false;
  }

  if (subject === "") {
    subjectError.textContent = "Please select your course.";
    isValid = false;
  }

  if (!agree) {
    agreeError.textContent = "Please agree to the above information.";
    isValid = false;
  }

  return isValid;
}

// collps

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// input form

const fname = document.getElementById("fname");
const email1 = document.getElementById("email");
const fname1 = document.getElementById("fname1");
const fname2 = document.getElementById("fname2");

function hello1() {
  if (
    fname.value == "" ||
    (email.value == "" && fname1.value == "") ||
    fname2.value == ""
  ) {
    alert("PLEASE COMPLETE ALL \n INFORMATION - - - - ");
  }
  if (fname.value == "" || email.value == "") {
    alert("ENTER YOUR NAME \n AND EMAIL");
  } else if (fname1.value == "" || fname2.value == "") {
    alert("ENTER YOUR SUBJECT \n AND MESSAGE");
  } else if (fname.value == "" || fname1.value == "") {
    alert("ENTER YOUR NAME \n AND SUBJECT");
  } else if (email.value == "" || fname2.value == "") {
    alert("ENTER EMAIL NAME \n AND SUBJECT");
  } else {
    alert("MESSAGE SEND SUCCESSFULLY:");

    fname.value = "";
    email.value = "";
    fname1.value = "";
    fname2.value = "";
  }
}


// product



// /
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}