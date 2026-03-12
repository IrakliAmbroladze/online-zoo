import ContactForm from "./contact/ContactForm";
import { ContactUsCover } from "./contact/ContactUsCover";

export const ContactUs = () => {
  return (
    <div className="page-contact-us">
      <main className="main">
        <div className="container">
          <ContactUsCover />
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
