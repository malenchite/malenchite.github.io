import "./style.css"

function ContactForm() {
  return (
    <form id="contact-form" >
      <div className="mb-3">
        <label id="name-field">Name</label>
        <input id="name-input" name="name" type="text" className="form-control" placeholder="Name" aria-label="Name"
          aria-describedby="name-field" required />
      </div>
      <div className="mb-3">
        <label id="email-field">Email</label>
        <input id="email-input" name="email" type="email" className="form-control" placeholder="Email" aria-label="Email"
          aria-describedby="email-field" required />
      </div>
      <div>
        <label id="message-field">Message</label>
        <textarea id="message-input" name="message" rows={5} className="form-control"
          placeholder="Message of at least 10 characters" aria-label="Message" aria-describedby="message-field" required />
      </div>
      <button id="contact-submit" className="btn contact-submit" type="submit">Submit</button>
      <span id="contact-status" className="ml-3"></span>
    </form >
  );
}

export default ContactForm;

