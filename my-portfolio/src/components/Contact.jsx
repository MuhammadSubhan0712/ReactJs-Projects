import React, { useState } from "react";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import Lottie from "lottie-react";
import contact from "../assets/contacts.json";
import { emailjs } from "@emailjs/browser";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        formData,
        process.env.PUBLIC_KEY
      )
      .then((response) => {
        alert("✔️ Message sent successfully ✔️");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("❌ Failed to send message. Please try again later 🔄");
        console.log(error);
      });
  };

  return (
    <>
      <section
        id="contact"
        className="relative bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4 overflow-hidden">
        {/* Floating background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/[0.03] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/*Styled header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-cyan-400/10 rounded-full border border-cyan-400/30 mb-6 mx-auto">
              <Mail className="w-6 h-6 text-cyan-400" />
              <span className="text-sm font-bold tracking-widest text-cyan-400 uppercase">
                Contact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Let's Connect
            </h2>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Contact info: */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/20 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas or
                  opportunities to be part of your visions.
                  <span className="block mt-2 text-cyan-400">
                    Let's build something amazing together!
                  </span>
                </p>

                {/* Social links: */}
                <div className="flex gap-6 mb-8">
                  {[
                    {
                      icon: <Facebook className="w-5 h-5" />,
                      color: "bg-blue-500/20",
                      hover: "hover:bg-blue-500/40",
                    },
                    {
                      icon: <Instagram className="w-5 h-5" />,
                      color: "bg-pink-500/20",
                      hover: "hover:bg-pink-500/40",
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      color: "bg-blue-400/20",
                      hover: "hover:bg-blue-400/40",
                    },
                    {
                      icon: <Github className="w-5 h-5" />,
                      color: "bg-gray-500/20",
                      hover: "hover:bg-gray-500/40",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 rounded-full ${social.color} ${social.hover} border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20`}>
                      {social.icon}
                    </a>
                  ))}
                </div>

                {/* Animated contact: */}
                <div className="w-full max-w-md mx-auto">
                  <Lottie animationData={contact} className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* Contact form: */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-pink-600/30 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <form
                onSubmit={handleSubmit}
                className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-red-400/20">
                <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">
                  Send a Message
                </h1>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-5 h-5 text-cyan-400" />
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300">
                      Your Name
                    </label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="mt-1 p-3 block w-full rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="from_name"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="mt-1 p-3 block w-full rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300">
                      Your Message
                    </label>
                  </div>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="What would you like to discuss?"
                    className="mt-1 p-3 block w-full rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="relative group w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-500 hover:from-red-600 hover:to-pink-700 hover:shadow-lg hover:shadow-red-500/30">
                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    SEND MESSAGE
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
