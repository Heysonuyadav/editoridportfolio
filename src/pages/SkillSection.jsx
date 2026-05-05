
import { Layout } from "lucide-react";

const SkillsSection = () => {
  return (
    <div id="skill" className="bg-gradient-to-br from-[#0d0f0f] via-[#191c1a] to-[#0b0e0c] ">

    
    <section className="max-w-6xl mx-auto px-6 py-24 flex  flex-col md:flex-row gap-16 items-center">
      {/* Left: Introduction & Stats */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-6 text-[#18ab93]">My Skills</h2>
        <p className="text-white mb-12 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>
        
        <div className="flex gap-12">
          <div>
            <span className="text-5xl font-extrabold text-white">10</span>
            <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Years of<br/>Experience</p>
          </div>
          <div>
            <span className="text-5xl font-extrabold text-white">211</span>
            <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Satisfied<br/>Clients</p>
          </div>
        </div>
      </div>

      {/* Right: Skill Cards */}
      <div className="md:w-1/2 space-y-4 w-full">
        <SkillTile icon={<Layout size={20}/>} title="User Experience" color="bg-pink-500" />
        <SkillTile icon={<div className="w-5 h-5 border-2 border-blue-400 rounded-sm"/>} title="User Interface" color="bg-blue-500" />
        <SkillTile icon={<div className="w-5 h-5 bg-yellow-400 rotate-45"/>} title="Product Design" color="bg-yellow-500" />
      </div>
    </section>
  </div>
  );
};

const SkillTile = ({ icon, title, color }) => (
  <div className="flex items-center gap-6 p-6 rounded-xl bg-white/9 border border-white/40 backdrop-blur-md hover:bg-white  text-white hover:text-black transition group">
    <div className={`p-3 rounded-lg ${color} bg-opacity-20 text-white`}>
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-gray-400 hover:text-gray-800 text-xs mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
    </div>
  </div>
);
export default SkillsSection;