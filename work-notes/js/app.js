// Add clipboard object instance
new Clipboard('.btn');

// Declare constants for buttons and add Event Listeners
const compile = document.querySelector('#compileButton');
const reset = document.querySelector('#resetButton');

compile.addEventListener('click', compileWorkNotes);
reset.addEventListener('click', resetWorkNotes);

// Declare compile function
function compileWorkNotes() {
  let workNotes = "";
  let upi = document.querySelector("#upiTextInput").value;
  let username = document.querySelector("#usernameTextInput").value;
  let email = document.querySelector("#emailTextInput").value;
  let location = document.querySelector("#locationTextInput").value;
  let phone = document.querySelector("#phoneTextInput").value;
  let kb = document.querySelector("#kbTextInput").value;
  let action = document.querySelector("#actionTextArea").value;
  let vvr = document.querySelector("#vvrTextArea").value;

  workNotes += "UPI: " + upi;
  workNotes += "\n511: " + username;
  workNotes += "\nEmail: " + email;
  workNotes += "\nLocation: " + location;
  workNotes += "\nPhone: " + phone;
  workNotes += "\nKB: " + kb;
  workNotes += "\n\n\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\n" + action;
  workNotes += "\n\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\n\nVVR: " + vvr;

  console.log(workNotes);

  document.querySelector('#workNotes').innerHTML = workNotes;
}

// Declare reset function
function resetWorkNotes() {
  document.querySelector('#workNotes').innerHTML = "";
}
