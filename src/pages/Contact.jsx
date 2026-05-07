import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6 py-20 overflow-hidden">

      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-6xl grid md:grid-cols-2 rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

        {/* BLUR EFFECTS */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-sky-500/30 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-cyan-400/30 blur-[120px] rounded-full"></div>

        {/* LEFT SIDE */}
        <div className="relative z-10 p-12 flex flex-col justify-center text-white">

          <span className="inline-block w-fit px-5 py-2 rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-400 text-sm mb-6">
            ✨ Get In Touch
          </span>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Let’s Build Something
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-10">
            Have a project idea or want to work together?
            Send me a message and let’s create a modern
            digital experience together.
          </p>

          {/* INFO */}
          <div className="space-y-5">

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-2xl">📧</div>
              <div>
                <h3 className="font-semibold text-sky-400">Email</h3>
                <p className="text-gray-300">your@email.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-2xl">📱</div>
              <div>
                <h3 className="font-semibold text-sky-400">Phone</h3>
                <p className="text-gray-300">+92 300 0000000</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-2xl">📍</div>
              <div>
                <h3 className="font-semibold text-sky-400">Location</h3>
                <p className="text-gray-300">Karachi, Pakistan</p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative z-10 bg-white p-12 rounded-l-[40px]">

          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Send Message
          </h2>

          <p className="text-gray-500 mb-8">
            Fill out the form below and I’ll get back to you soon.
          </p>

          <form className="space-y-6">

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Your Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Your Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-bold text-lg hover:scale-[1.02] transition duration-300 shadow-lg shadow-sky-500/30"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;