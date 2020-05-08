/*
This javascript function pulls the data from the contact form and sends it to your contact form php script
*/

function contactForm() {
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    data = {
      name: $("#input_name").val(),
      email: $("#input_email").val(),
      subject: $("#input_subject").val(),
      message: $("#input_message").val(),
    };
    $.post("./assets/php/contact_form.php", data).done(function (response) {
      alert(response);
    });
  });
}
