const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-[#101010] via-[#090909] to-[#0f1011]">

    <footer className="py-20 px-6 border-t border-white/5 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-green-300">Contact</h2>
        <a 
          href="mailto:anela@example.com" 
          className="text-2xl md:text-4xl font-medium text-gray-300 hover:text-[#4e3f] transition"
          >
          ysonu3603@gmail.com
        </a>
        
        <div className="flex justify-center gap-6 mt-12">
          {/* Social Icons Placeholder */}
          <div className="w-10 h-10 rounded-full border text-white border-white/12 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition">🌐</div>
          <div className="w-10 h-10 rounded-full border text-white border-white/12 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition">in</div>
        </div>

        <div className="flex justify-center gap-8 mt-20 text-xs text-gray-600 uppercase tracking-widest">
          <a href="#portfolio" className="hover:text-white">Home</a>
          <a href="#skill" className="hover:text-white">Services</a>
          <a href="#project" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
          </div>
  );
};

export default Footer ;
