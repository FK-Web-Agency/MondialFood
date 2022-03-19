import { useState, useEffect } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify';
import ReCAPTCHA from 'react-google-recaptcha';
import isEmail from 'validator/lib/isEmail';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Section } from './styled';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const Form = () => {
  const [_document, set_document] = useState(null);
  const [value, setValue] = useState(null);
  const [emailValidate, setEmailValidate] = useState(null);

  useEffect(() => {
    set_document(document);
  }, []);

  // Handle Input
  const handleChange = (e) => {
    document.getElementById(e.target.id).value = DOMPurify.sanitize(
      e.target.value
    );
    if (e.target.id === 'email') setEmailValidate(e.target.value);
  };

  const handleRecaptcha = (value) => setValue(value);

  function sendEmail(e) {
    let settings = {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    e.preventDefault();

    // Recaptcha not Validate
    !value &&
      toast.warn('Merci de confirmer que vous étes un humain!', settings);

    // Email not right
    !isEmail(_document.querySelector('#email').value) &&
      toast.warn('Merci de renseigner un email valide', settings);

    if (value && isEmail(emailValidate)) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            toast.success(
              "Merci de m'avoir contacter, je reviens vers vous dans les plus bref délais ! ",
              settings
            );
          },
          (error) => {
            toast.error(
              "Il y a eu une error de l'envoie de votre message, merci de contacter par email walymamadouthiam@gmail.com",
              settings
            );
          }
        );

      // Reset form's fields
      e.target.reset();
    }
  }

  return (
    <Section>
      <h2 className="title">Contact us for more informations</h2>
      <Container onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Names</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Insert your names"
            name="name"
            id="name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            placeholder="Insert your emails"
            name="email"
            id="email"
          />
        </div>

        <div className="textarea">
          <label htmlFor="message">Message</label>
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Write your message"></textarea>
        </div>
        <div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
            onChange={handleRecaptcha}
          />
          <a className="button">Send message</a>
        </div>
      </Container>
      <ToastContainer />
    </Section>
  );
};

export const Container = styled.form`
  display: grid;
  justify-content: center;
  div {
    width: 30rem;
    height: 4rem;
    position: relative;
    margin-bottom: 2rem;

    label {
      position: absolute;
      top: -0.75rem;
      left: 1.25rem;
      font-size: var(--small-font-size);
      background-color: var(--body-color);
      z-index: 10;
    }

    input,
    textarea {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid var(--text-color-light);
      background: none;
      color: var(--text-color);
      outline: none;
      padding: 1.5rem;
      border-radius: 0.75rem;
      z-index: 1;
    }

    textarea {
      resize: none;
    }
  }
  .textarea {
    height: 11rem;
  }

  a {
    background-color: var(--first-color);
    color: #fff;
    &:hover {
      background-color: var(--first-color-alt);
    }
  }

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 2fr auto;
    gap: 1.5rem;

    div{
        width: 100%;
    }
    div:nth-child(2) {
      justify-self: end;
    }

    .textarea {
      grid-column: 1/-1;
      width: auto;

      textarea {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 567px) {
    div {
      width: 20rem;
    }
  }
`;

export default Form;
