import ContactForm from "../components/ContactForm"

function Contact() {
  return (
    <section>
      <h1 className="section-header">Contact</h1>
      <hr />
      <ContactForm />
      <div className="pb-3">
        Alternatively, you can email me at <a href="mailto:malenchite@gmail.com">malenchite@gmail.com</a>
      </div>
    </section>
  );
}

export default Contact;