const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("thank you");
  };
  return (
    <div className="form-container">
      <div className="info">
        <h1>Get in touch</h1>
        <p>
          Whether you have a question, or would like to say hello, we're happy
          to hear from you. Please use the form to send us a message and we'll
          get back to you as soon as we can. Whether you have a question, or
          would like to say hello, we're happy to hear from you. Please use the
          form to send us a message and we'll get back to you as soon as we can.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>
            <span>*</span> Your Name
          </span>
          <input type="text" required placeholder="First and last name" />
        </label>

        <label>
          <span>
            <span>*</span> Your Email Address
          </span>
          <input type="email" required placeholder="Enter your email" />
        </label>

        <label>
          <span>
            <span>*</span> Subject
          </span>
          <input type="text" required placeholder="Enter the subject" />
        </label>

        <label>
          <span>
            <span>*</span> Message
          </span>
          <textarea
            rows="5"
            required
            placeholder="Enter your message"
          ></textarea>
        </label>
        <button className="btn btn--green">
          <span>Send message</span>
          <img src="icons/arrow.svg" alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
