"use client";

import React, { useEffect, useRef } from "react";
import MapBox from "@/components/contact/map-box";
import PageHeader from "@/components/page-header";
import { FaRegPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import config from "@/config";

const { title } = config;

/**
 * TODO: #341 still need to update with another method to avoid client side not available metadata
 * export const metadata: Metadata = {
 *   title: `Contact | ${title}`,
 * };
 */

const Contact = () => {
  useEffect(() => {
    document.title = `Contact | ${title}`;
  }, [title]);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_vbuqjqf",
          "template_k0m5snj",
          form.current,
          "4itbfBdegtJAhQS1i"
        )
        .then(
          () => {
            alert("SUCCESS!");
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.log("Form reference is null");
    }
  };

  return (
    <article data-page="">
      <PageHeader header="Gaurav's Contact" />
      <section className="contact-form">
        <MapBox />
        <h3 className="h3 form-title">Contact Form</h3>
        <form ref={form} onSubmit={sendEmail} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="user_name"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />
            <input
              type="email"
              name="user_email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>
          <button className="form-btn" data-form-btn type="submit">
            <FaRegPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
