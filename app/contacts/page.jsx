"use client";
import React, { useState } from "react";
import ContactIntro from "../../components/contactus/ContactIntro";
import ContactInfo from "../../components/contactus/ContactInfo";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [messageSend, setMessageSend] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [registered, setRegistered] = useState(false);
  const [submiting, setSubmiting] = useState(false);

  const onSubmit = async (formData, e) => {
    const { name, email, phone, message } = formData
    setSubmiting(true);
    emailjs
      .sendForm("service_be6qg9y", "template_1kzcx9k", e.target, {
        publicKey: "MrKtDiM4rOW05oIyz",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          reset();
          setSubmiting(false);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      <ContactIntro />
      <section className="py-10" style={{ background: "var(--soft-white)" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "var(--deep-red)" }}
            >
              Get in Touch
            </h2>
            <p className="text-lg" style={{ color: "var(--charcoal-black)" }}>
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--charcoal-black)" }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                  placeholder="Your full name"
                  aria-label="Enter your full name"
                  {...register("name")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--charcoal-black)" }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                  placeholder="your.email@example.com"
                  aria-label="Enter your email address"
                  {...register("email")}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--charcoal-black)" }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                placeholder="+255 123 456 789"
                aria-label="Enter your phone number"
                {...register("phone")}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--charcoal-black)" }}
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                placeholder="Tell us how we can help you..."
                aria-label="Enter your message"
                {...register("message")}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block outline-none px-6 py-4 rounded-lg font-bold text-md bg-[var(--deep-red)] text-white shadow-lg transition-colors duration-200 focus:ring-2 focus:ring-[var(--deep-red)] focus:ring-offset-2"
                aria-label="Send message"
              >
                {submiting ? "processing..." : "send"}
              </button>
            </div>
          </form>
        </div>
      </section>
      <ContactInfo />
    </>
  );
};

export default ContactUs;

/*

*/
