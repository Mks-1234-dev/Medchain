"use client";
import React, { useState } from "react";

const EmailSection = ({ isSelected }) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      organization: e.target.Organization.value,
      position: e.target.Position.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <>
      <section
        id="contact"
        className=" md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        style={{ marginLeft: "10px" }}
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            We value your insights and contributions, whether you're shaping our direction as a board advisor, innovating with us as a developer, investing in our future, or engaging as an early user. We'd love to hear your thoughts, receive your feedback, or simply connect. Here's how you can best reach out to us and become an integral part of our journey.
          </p>
        </div>
        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="username@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label
                  htmlFor="Organization"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Organization
                </label>
                <input
                  name="Organization"
                  type="text"
                  id="Organization"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Your Organization"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Position"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Position
                </label>
                <input
                  name="Position"
                  type="text"
                  id="Position"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Your Position"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Subject of your message"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Message for us"
                />
              </div>

              <button
                type="submit"
                className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-lg cursor-pointer`}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
        <style jsx global>
          {`
            body::-webkit-scrollbar {
              height: 20%; /* height of the entire scrollbar */
              width: 8px; /* width of the entire scrollbar */
            }

            body::-webkit-scrollbar-track {
              border-radius: 20px; /* roundness of the scroll thumb */
              background: grey; /* color of the tracking area */
            }

            body::-webkit-scrollbar-thumb {
              background-color: black; /* color of the scroll thumb */
              border-radius: 20px; /* roundness of the scroll thumb */
              border: 3px solid orange; /* creates padding around scroll thumb */
            }
          `}
        </style>
      </section>
    </>
  );
};

export default EmailSection;
