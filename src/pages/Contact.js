import Container from "../components/Container";
import ContactForm from "../components/ContactForm"

function Contact() {
  document.title = "S Israel | Contact";

  return (
    <Container>
      <section>
        <h1 className="section-header">Contact</h1>
        <hr />
        <ContactForm />
        <div className="pb-3">
          Alternatively, you can email me at <a href="mailto:malenchite@gmail.com">malenchite@gmail.com</a>
        </div>
      </section>
    </Container>
  );
}

export default Contact;