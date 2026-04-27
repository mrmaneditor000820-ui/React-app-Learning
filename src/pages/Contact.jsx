import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-6">
      
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="p-10 text-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 mb-6">
            Have a project idea or want to work together? Fill the form and let's create something amazing 🚀
          </p>

          <div className="space-y-4">
            <p>📧 Email: your@email.com</p>
            <p>📱 Phone: +92 300 0000000</p>
            <p>📍 Location: Karachi, Pakistan</p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="p-10 bg-white rounded-l-2xl">
          <form className="space-y-5">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition duration-300"
            >
              Send Message 🚀
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}

export default Contact;