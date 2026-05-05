const ContactSection = () => {
  return (
    <div id="contact" className="bg-gradient-to-br from-[#0c0c0c] via-[#181e1e] to-[#161e1e]">

      <section className="bg-portfolio-dark py-24 px-6 relative overflow-hidden">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
          
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-6 leading-tight text-[#ffffff]">
              Let's Talk About Your Project
            </h2>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="md:w-2/3 bg-white/14 backdrop-blur-2xl border border-white/60 p-10 rounded-2xl">

            <form 
              action="https://formsubmit.co/YOUR_EMAIL@gmail.com" 
              method="POST"
              className="space-y-6"
            >

              {/* Hidden fields */}
              <input type="hidden" name="_subject" value="New Portfolio Message 🚀" />
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-pink-500/50 transition"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-pink-500/50 transition"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-pink-500/50 transition"
                />
              </div>

              <textarea
                rows="5"
                name="message"
                placeholder="Brief about your project..."
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-pink-500/50 transition"
              ></textarea>

              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-11 rounded-lg transition-all active:scale-95"
              >
                Submit
              </button>

            </form>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;