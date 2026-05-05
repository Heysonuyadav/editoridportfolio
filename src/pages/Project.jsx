import { useState } from "react";

const ProjectSection = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const projects = [
    {
      title: "Travel Agency",
      date: "22/12/19",
      video: "/videos/v1.mp4",
      thumbnail: "/assets/m7.png",
      link: "https://yourproject1.com"
    },
    {
      title: "Online Courier",
      date: "22/12/19",
      video: "/videos/v2.mp4",
      thumbnail: "/assets/m6.png",
      link: "https://yourproject2.com"
    },
    {
      title: "Online Health Service",
      date: "22/12/19",
      video: "/videos/v3.mp4",
      thumbnail: "/assets/m5.png",
      link: "https://yourproject3.com"
    },
    {
      title: "Travel Agency",
      date: "22/12/19",
      img: "/assets/m4.png",
      link: "https://new-portfolio-eta-swart.vercel.app/"
    },
    {
      title: "Restaurant",
      date: "22/12/19",
      img: "/assets/m2.png",
      link: "https://yourproject5.com"
    },
    {
      title: "Restaurant",
      date: "22/12/19",
      img: "/assets/m3.png",
      link: "https://yourproject6.com"
    },
  ];

  return (
    <div id="project" className="bg-gradient-to-br from-[#201e1e] via-[#131716] to-[#1d2422]">
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="mb-16 text-white">
          <h2 className="text-4xl font-bold mb-4">My Latest Project</h2>
          <p className="text-gray-300 max-w-xs text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">

                {/* 🎥 VIDEO PROJECT */}
                {project.video ? (
                  playingIndex === index ? (
                    <video
                      src={project.video}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      onClick={() => setPlayingIndex(index)}
                      className="relative w-full h-full"
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />

                      {/* ▶ Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/60 text-white px-4 py-2 rounded-full">
                          ▶ Play
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  /* 🖼 IMAGE PROJECT */
                  <img
                    src={project.img}
                    alt={project.title}
                    onClick={() => window.open(project.link, "_blank")}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

              </div>

              <div className="p-6 bg-black/40 backdrop-blur-md absolute bottom-0 w-full flex justify-between items-center border-t border-white/10">
                <div>
                  <h4 className="font-semibold text-sm">
                    {project.title} {project.date}
                  </h4>
                </div>

                <div
                  onClick={() => window.open(project.link, "_blank")}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-pink-500 group-hover:border-pink-500 transition-colors"
                >
                  <span className="text-xs">→</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default ProjectSection;