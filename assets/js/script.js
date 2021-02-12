/* Submit button behavior for contact form */
function submitContactForm(form, event) {

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
      $("#contact-status").text("Message sent!");
      $("#name-input").val("");
      $("#email-input").val("");
      $("#message-input").val("");
    })
    .catch(() => {
      $("#contact-status").text("Error in sending");
    });
}

$("#contact-form").validate({
  rules: {
    name: {
      required: true,
      normalizer: function (value) {
        //Trim the value of element for whitespaces
        return $.trim(value);
      }
    },
    email: {
      required: true,
      email: true
    },
    message: {
      required: true,
      minlength: 10,
      normalizer: function (value) {
        //Trim the value of element for whitespaces
        return $.trim(value);
      }
    }
  },
  messages: {
    name: "Required",
    email: "Valid email required",
    message: {
      required: "Message required",
      minlength: "10 character minimum"
    }
  },
  submitHandler: submitContactForm,
  errorPlacement: (error, element) => {
    error.addClass("ml-5")
    error.insertBefore(element);
  }
})