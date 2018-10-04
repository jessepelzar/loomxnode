

window.onload = function() {
  submit.onclick = function() {
    var name = document.querySelector('input[id="NameInput"]').value;
    var org = document.querySelector('input[id="OrganizationInput"]').value;
    var email = document.querySelector('input[id="EmailInput"]').value;
    var phone = document.querySelector('input[id="PhoneInput"]').value;
    var string = "Thank you ";
    string += name;
    string +=", we'll contact you shortly";
        alert(string);
  }
}
