// Starting the function for form validation
function validate() {
   if (document.form.name.value == "") {
      alert("Please provide your name!"); //alert notification
      document.form.name.focus();
      return false; //return value
   }
   if (document.form.email.value == "") {
      alert("Please provide your Email!"); //alert notification
      document.form.email.focus();
      return false; //return value
   } else {
      alert("Thank you for your valuable feedback");
   }

}
// End of external JS for form validation