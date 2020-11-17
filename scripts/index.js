function RegistrationController(){
  this.check = "check";
}

function setEvents(){
  document.getElementById('submit_button').addEventListener('click', this.show_confirmation.bind(this));
}

function show_confirmation(){
  document.getElementById('account_confirm').innerHTML = "You have made an account";
  console.log("Working");
}


