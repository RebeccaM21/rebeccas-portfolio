import { RevealOnScroll } from "./RevealOnScroll";

export default function Projects({
  ref,
}: {
  ref: React.RefObject<HTMLElement | null>;
}) {
  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen flex items-center justify-center pu-20"
    >
      <RevealOnScroll>
        <div className=" bg-[#dcac61] rounded-xl pb-4 pt-4 max-w-5xl mx-auto px-4">
          <h2 className="text-center mb-6">
            <span className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#594423] to-[#ae874b] bg-clip-text text-transparent text-center">
              Featured Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://github.com/RebeccaM21/real-estate-app"
              className="p-6 bg-[#ae874b] rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Real-Estate-Native</h3>
              <p className="text-black mb-4"> Details about project</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Nativewind", "Typescript", "Expo"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-[#dcac61] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </a>
            <a
              href="https://github.com/RebeccaM21/weather-app"
              className="p-6 bg-[#ae874b] rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Weather-App</h3>
              <p className="text-black mb-4"> Details about project</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Typescript", "OpenWeather API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-[#dcac61] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
