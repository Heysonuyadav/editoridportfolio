import React from 'react';
import { User, Layout, Database, Mail } from 'lucide-react';

const Portfolio = () => {
  return (
    <div id='portfolio' className="min-h-screen bg-gradient-to-br from-[#131731] via-[#301f1f] to-[#24342b] text-white font-sans selection:bg-pink-500">

      {/* Navigation */}
      <nav className="flex justify-center gap-8 py-8 text-sm opacity-80">
        <a href="#portfolio" className="hover:text-pink-400">Home</a>
        <a href="#skill" className="hover:text-pink-400">Services</a>
        <a href="#project" className="hover:text-pink-400">Projects</a>
        <a href="#contact" className="hover:text-pink-400">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-32 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h4 className="text-xl mb-2">Hi, I am <span className="font-bold">Sonu   K-Yadav</span></h4>
          <h1 className="text-6xl font-bold mb-6 bg-amber-700 from-pink-400 to-orange-300 bg-clip-text text-transparent leading-tight">
            Web Developer <br /> and Video Editor
          </h1>
          <p className="text-gray-400 mb-8 max-w-md">with 3+ years experience in the Digital World.In video Editing</p>
          <div className="flex gap-4">
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="bg-pink-500 px-8 py-3 rounded-md font-medium hover:bg-pink-600 transition"
            >
              Hire me
            </button>

            <button
              onClick={() => window.open("https://wa.me/7481953933", "_blank")}
              className="border border-white/20 px-8 py-3 rounded-md font-medium hover:bg-white/10 transition"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-[#22231d] to-transparent rounded-full absolute"></div>

          <img
            src="/assets/mig1.png"
            alt="Anela Johnson"
            className="w-105 h-100 object-cover relative z-10 scale-110 rounded-full"
          />

        </div>
      </section>

      {/* How We Work (Glassmorphism Cards) */}
      <section className="bg-[#151515] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How We Work</h2>
          <p className="text-gray-500 mb-16 max-w-lg mx-auto text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard
              icon={<Layout className="text-blue-400" />}
              title="Your Brief about The project"
              color="blue"
            />
            <GlassCard
              icon={<Database className="text-pink-400" />}
              title="Doing Research On the Project"
              color="pink"
            />
            <GlassCard
              icon={<User className="text-yellow-400" />}
              title="Finalizing the Design"
              color="yellow"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Glassmorphism Card
const GlassCard = ({ icon, title, color }) => (
  <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/9 p-8 backdrop-blur-md transition hover:bg-white/10">
    <div className={`w-12 h-12 rounded-lg bg-opacity-20 flex items-center justify-center mb-6 
        ${color === 'blue' ? 'bg-blue-500' : color === 'pink' ? 'bg-pink-500' : 'bg-yellow-500'}`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    </p>
    <button className="text-xs uppercase tracking-widest font-bold opacity-60 group-hover:opacity-100 transition">Read More</button>
  </div>
);

export default Portfolio;