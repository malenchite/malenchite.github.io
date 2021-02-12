/* Submit button behavior for contact form */
function submitContactForm(form, event) {

  event.preventDefault();
  let formData = {
    name: $("#name-input").val(),
    email: $("#email-input").val(),
    message: $("#message-input").val()
  };

  $("#contact-submit").attr("disabled", true);
  $("#contact-submit").text("Sending...");
  $("#contact-status").text("");

  $.ajax("https://malenchite-contact.herokuapp.com/contact",
    {
      type: "POST",
      data: JSON.stringify(formData),
      dataType: "json",
      contentType: "application/json"
    })
    .then(() => {
      $("#contact-status").text("Message sent!");
      $("#contact-form").trigger("reset");
    })
    .catch(() => {
      $("#contact-status").text("Error in sending");
    })
    .always(() => {
      $("#contact-submit").attr("disabled", false);
      $("#contact-submit").text("Submit");
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
    email:
    {
      required: "Required",
      email: "Invalid address"
    },
    message: {
      required: "Required",
      minlength: "10 character minimum"
    }
  },
  submitHandler: submitContactForm,
  errorPlacement: (error, element) => {
    error.addClass("ml-5")
    error.insertBefore(element);
  }
})