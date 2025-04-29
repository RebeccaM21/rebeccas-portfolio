import linkedInLogo from "../assets/linkedIn.webp";

export default function Navbar({
  refs,
}: {
  refs: [
    React.RefObject<HTMLElement | null>,
    React.RefObject<HTMLElement | null>,
    React.RefObject<HTMLElement | null>,
  ];
}) {
  const [homeRef, aboutRef, projectsRef] = refs;

  const scrollToAboutSection = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjectsSection = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="https://www.linkedin.com/in/rebecca-m-00574a182/"
            className=" flex bg-[#ae874b] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
          >
            <img className="w-6 h-6 object-scale-down" src={linkedInLogo}></img>
            Connect with Me
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <button
              className="text-[#332611] hover:text-white transition-colors"
              onClick={() =>
                homeRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Home
            </button>
            <button
              className="text-[#332611] hover:text-white transition-colors"
              onClick={() => scrollToAboutSection()}
            >
              About Me
            </button>
            <button
              className="text-[#332611] hover:text-white transition-colors"
              onClick={() => scrollToProjectsSection()}
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
