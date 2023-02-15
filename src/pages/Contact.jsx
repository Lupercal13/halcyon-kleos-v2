import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div id="contact" className="w-[75%] lg:max-w-[800px]  m-auto md:pl-20 p-4 py-16">
      <h1 className="pt-4 pb-8 text-4xl font-bold text-center text-gray-100">
        Booking Inquiries
      </h1>
      <form
        action="https://getform.io/f/d25d9251-7a81-4330-afc5-44c0f0c49ffb"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2 text-gray-100">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-pink-600 bg-transparent"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex  border-pink-600 bg-transparent"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2 text-gray-100">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-pink-600 bg-transparent"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2 text-gray-100">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 border-pink-600 rounded-lg p-3 flex  bg-transparent"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2 text-gray-100">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 border-pink-600 rounded-lg p-3 border-gradient-to-r bg-transparent"
            name="message"
            rows="10"
          ></textarea>
        </div>
        <button className="bg-gradient-to-r from-orange-400 to-pink-600 text-gray-100 text-xl leading-4 tracking-wider font-semibold mt-4 w-full p-4 rounded-lg hover:scale-[100.5%]">
          Send Message
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
