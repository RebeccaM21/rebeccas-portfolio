import { RevealOnScroll } from "./RevealOnScroll";
import portrait from "../assets/portrait.png";

export default function Home({
  refs,
}: {
  refs: [
    React.RefObject<HTMLElement | null>,
    React.RefObject<HTMLElement | null>,
  ];
}) {
  const [homeRef, projectsRef] = refs;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      ref={homeRef}
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-xl max-h-xl flex items-center justify-center aspect-square">
          <img
            src={portrait}
            alt="portrait"
            className="rounded-full object-cover mt-12 mb-6"
          />
        </div>
        <div className="text-center z-10 px-4">
          <h1 className="mb-4">
            <span className="md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#594423] to-[#dcac61] bg-clip-text text-transparent leading-right">
              Rebecca Mpi
            </span>
          </h1>
          <p className="text-[#332611] text-lg mb-8 max-w-lg mx-auto">
            Results-driven software engineer with <strong>2+ years</strong> of
            experience in designing, developing, and deploying scalable web and
            software applications. <br /> Proficient in a wide range of
            technologies including&nbsp;
            <strong>React/React Native, Typescript and Node.JS</strong>, with a
            passion for solving complex problems.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() =>
                projectsRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#ae874b] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
