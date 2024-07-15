import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <article className="contact active bg-eerie-black-2 border border-jet rounded-2xl p-4 shadow-shadow-1">
      <header>
        <h2 className="text-4xl text-white-2 font-semibold mb-8">Contact</h2>
      </header>
      <section className="contact-form mb-10">
        <form ref={form} onSubmit={sendEmail} className="form space-y-6">
          <div className="input-wrapper grid grid-cols-1 gap-6 md:grid-cols-1">
            <input
              type="text"
              name="from_name"
              className="form-input bg-eerie-black-2 text-white-2 text-lg font-normal p-3 border border-jet rounded-xl outline-none focus:border-orange-yellow-crayola"
              placeholder="성함 or 회사명"
              required
            />
            <input
              type="email"
              name="from_email"
              className="form-input bg-eerie-black-2 text-white-2 text-lg font-normal p-3 border border-jet rounded-xl outline-none focus:border-orange-yellow-crayola"
              placeholder="회신 받을 email"
              required
            />
            <input
              type="tel"
              name="phone"
              className="form-input bg-eerie-black-2 text-white-2 text-lg font-normal p-3 border border-jet rounded-xl outline-none focus:border-orange-yellow-crayola "
              placeholder="연락처"
              required
            />
          </div>
          <input type="hidden" name="to_email" value="csr4180@naver.com" />
          <textarea
            name="message"
            rows="5"
            className="form-input bg-eerie-black-2 text-white-2 text-lg font-normal p-3 border border-jet rounded-xl outline-none focus:border-orange-yellow-crayola resize-vertical w-full"
            placeholder="내용"
            required
          ></textarea>
          <button
            className="form-btn w-full bg-border-gradient-onyx text-orange-yellow-crayola flex justify-center items-center gap-2 p-3 rounded-xl font-medium shadow-shadow-3 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-400 hover:to-yellow-400"
            type="submit"
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
