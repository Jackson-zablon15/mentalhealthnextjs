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
    console.log(formData)
    emailjs
      .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formData, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, 
      })
      .then(
        () => {
          console.log("information send successfully!");
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
EMAILJS_PRIVATE_KEY=your-private-key
EMAILJS_SERVICE_ID=your-service-id
EMAILJS_TEMPLATE_ID=your-template-id


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, email, message } = req.body;

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          name,
          email,
          message,
        },
      }),
    });

    if (response.ok) {
      return res.status(200).json({ message: 'Email sent successfully' });
    } else {
      return res.status(500).json({ message: 'Email sending failed' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
}


const sendForm = async (formData) => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();
  console.log(result.message);
};

*/
