/* Submit button behavior for contact form */
$("#contact-submit").click((event) => {

  event.preventDefault();
  let formData = {
    name: $("#name-input").val(),
    email: $("#email-input").val(),
    message: $("#message-input").val()
  };

  $("#contact-status").text("Sending...");

  $.ajax("https://malenchite-contact.herokuapp.com/contact",
    {
      type: "POST",
      data: JSON.stringify(formData),
      dataType: "json",
      contentType: "application/json"
    })
    .then(() => {
      $("#contact-status").text("Message submitted!");
      $("#name-input").val("");
      $("#email-input").val("");
      $("#message-input").val("");
    })
    .catch(() => {
      $("#contact-status").text("Error");
    });
});