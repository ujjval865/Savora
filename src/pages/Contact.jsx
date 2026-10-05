import React from "react";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  
 function handleSubmit(e) {
  e.preventDefault();

  // Name validation
  if (name.trim() === "") {
    setNameError("Name is required");
    return;
  }
  setNameError("");

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setEmailError("Please enter a valid email");
    return;
  }
  setEmailError("");

  // Message validation
  if (message.trim() === "") {
    setMessageError("Message is required");
    return;
  }
  setMessageError("");

  // Valid form
  console.log(name, email, subject, message);

  setIsSubmitting(true);

  // Clear fields
  setName("");
  setEmail("");
  setSubject("");
  setMessage("");
}
  return (
    <div className="min-h-screen bg-orange-50/40 px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto w-full max-w-5xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600">
            Get In Touch
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Have a question, suggestion, or feedback? We'd love to hear from
            you. Send us a message and we'll get back to you soon.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-3xl rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition duration-300 placeholder:text-gray-400 hover:border-orange-200 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
              {nameError && (
                <p className="mt-1 text-sm text-red-500">{nameError}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition duration-300 placeholder:text-gray-400 hover:border-orange-200 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-500">{emailError}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Subject
              </label>

              <input
                type="text"
                id="subject"
                placeholder="What is this about?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition duration-300 placeholder:text-gray-400 hover:border-orange-200 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition duration-300 placeholder:text-gray-400 hover:border-orange-200 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              ></textarea>
              {messageError && (
                <p className="mt-1 text-sm text-red-500">{messageError}</p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-orange-200 active:translate-y-0 sm:w-auto"
            >
              Send Message
            </button>
          </form>
          {isSubmitting && (
            <div className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-600">
              ✅ Message sent successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
