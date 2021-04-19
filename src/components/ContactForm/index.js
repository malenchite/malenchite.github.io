import { useForm } from "react-hook-form"
import validator from "email-validator"
import "./style.css"

function ContactForm() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-3">
        <label id="name-field">Name</label>{<span className="ml-5 error">{errors.name?.message}</span>}
        <input id="name-input" name="name" type="text" className="form-control" placeholder="Name" aria-label="Name"
          aria-describedby="name-field"
          {...register("name", { required: "Required" })} />
      </div>
      <div className="mb-3">
        <label id="email-field">Email</label>{<span className="ml-5 error">{errors.email?.message}</span>}
        <input id="email-input" name="email" type="email" className="form-control" placeholder="Email" aria-label="Email"
          aria-describedby="email-field"
          {...register("email",
            {
              required: "Required",
              validate: email => validator.validate(email) ? true : "Invalid Address"
            })
          }
        />
      </div>
      <div>
        <label id="message-field">Message</label>{<span className="ml-5 error">{errors.message?.message}</span>}
        <textarea id="message-input" name="message" rows={5} className="form-control"
          placeholder="Message of at least 10 characters" aria-label="Message" aria-describedby="message-field"
          {...register("message",
            {
              required: "Required",
              minLength: { value: 10, message: "10 character minimum" }
            })
          }
        />
      </div>
      <button id="contact-submit" className="btn contact-submit" type="submit">Submit</button>
      <span id="contact-status" className="ml-3"></span>
    </form >
  );
}

export default ContactForm;

