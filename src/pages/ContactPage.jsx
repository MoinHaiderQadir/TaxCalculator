import React, { useState } from "react";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Simulate form submission or API call
    console.log("Email:", email);
    console.log("Message:", message);

    // Set response message
    setResponse("Your message has been successfully submitted!");

    // Reset form fields and response after 2 seconds
    setTimeout(() => {
      setEmail(""); // Reset email
      setMessage(""); // Reset message
      setResponse(""); // Clear response message
    }, 2000);
  };

  return (
    <div className="py-28 min-h-screen bg-base-200 flex items-center justify-center">
      <div className="mt-8 overflow-hidden max-w-4xl bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side - Contact Info */}
          <div className="p-6 bg-gray-100 sm:rounded-lg">
            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
              Get in touch:
            </h1>
            <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
              Fill in the form to start a conversation
            </p>

            {/* Address */}
            <div className="flex items-center mt-8 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
              NIC Building, Hyderabad, Sindh
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center mt-4 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
              03083522326
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center mt-2 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
              tcal@gmail.com
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full flex flex-col justify-center items-center p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-700">Contact Us</h2>
            <form
              className="w-full max-w-sm"
              onSubmit={handleSubmit} // Form submission handler
            >
              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} // Update message state
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Response Message */}
            {response && (
              <p className="mt-4 text-green-600 font-semibold">{response}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
