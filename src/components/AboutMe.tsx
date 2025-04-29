import { RevealOnScroll } from "./RevealOnScroll";

export default function AboutMe({
  ref,
}: {
  ref: React.RefObject<HTMLElement | null>;
}) {
  const frontendSkills = [
    "React",
    "React Native",
    "Typescript",
    "Next.JS",
    "Tailwind CSS",
  ];
  const backendSkills = ["Node.JS", "Golang", "MongoDB", "GraphQL"];

  return (
    <>
      <section
        id="about-me"
        className="min-h-screen flex items-center justify-center py-20"
        ref={ref}
      >
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4 bg-[#dcac61] rounded-xl pt-4">
            <h2 className="text-center">
              <span className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#594423] to-[#ae874b] bg-clip-text text-transparent text-center">
                About Me
              </span>
            </h2>
            <div className="rounded-xl p-8 border-white/10 hover:translate-y-1 transition-all">
              <p className="text-black mb-6">
                Proactice and problem-solving mindset, passionate about
                continuously learning. Excellent attention to detail and strong
                communicator, capable of working in high-functioning teams.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl bg-[#ae874b] p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((skill, key) => (
                      <span
                        key={key}
                        className="bg-blue-100/10 text-white py-1 px-3 rounded-full text-sm hover:bg-[#dcac61] hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-[#ae874b] p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((skill, key) => (
                      <span
                        key={key}
                        className="bg-blue-100/10 text-white py-1 px-3 rounded-full text-sm hover:bg-[#dcac61] hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6  bg-[#ae874b] rounded-xl hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Education</h3>
                  <ul className="list-disc list-inside text-[#594423] space-y-2">
                    <li>
                      <strong>BSC. Cognitive Neuroscience & Psychology</strong>
                      &nbsp; - University of Manchester (2018-2021)
                    </li>
                    <li>
                      <strong>
                        3 A levels (AAA) in Biology, Chemistry & Psychology
                      </strong>
                      &nbsp;- Langley Grammar School
                    </li>
                    <li>
                      <strong>
                        12 GCSE's (A* - B) including Mathematics, Triple
                        Sciences & English
                      </strong>
                      &nbsp;- Langley Grammar School
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold mt-4 mb-4">
                    Certifications
                  </h3>
                  <ul className="list-disc list-inside text-[#594423] space-y-2">
                    <li>
                      <strong>Learn Python 3 Course - Codecademy</strong>
                      &nbsp;(Issued Nov 2022)
                    </li>
                    <li>
                      <strong>Agile Explorer - IBM Skills Network</strong>
                      &nbsp;(Issued September 2022)
                    </li>
                    <li>
                      <strong>Learn JavaScript Course - Codecademy</strong>
                      &nbsp;(Issued June 2022)
                    </li>
                    <li>
                      <strong>Learn How To Code Course - Codecademy</strong>
                      &nbsp;(Issued December 2021)
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-[#ae874b] rounded-xl hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                  <div className="space-y-4 text-[#594423]">
                    <div>
                      <h4>
                        <strong>Software Engineer @Holland and Barrett</strong>
                        &nbsp;(July 2024 - Present)
                      </h4>
                      <br />
                      <p>
                        <i>
                          Led the migration of the checkout page within the app
                          to a company-wide backend tool, ensuring seamless
                          integration and improved functionality
                        </i>
                      </p>
                    </div>
                    <div>
                      <h4>
                        <strong>Graduate Software Engineer @IMGArena</strong>
                        &nbsp;(April 2023 - June 2024)
                      </h4>
                      <br />
                      <p>
                        <i>
                          Performed highly across four teams (two back-end and
                          two front-end focussed) to contribute to the delivery
                          of scalable and well-tested JavaScript applications
                          using React and Next.JS
                        </i>
                      </p>
                    </div>
                    <div>
                      <h4>
                        <strong>Digital Futures Coding Bootcamp</strong>
                        &nbsp;(June 2022 - August 2022)
                      </h4>
                      <br />
                      <p>
                        <i>
                          Completed the academy with a 100% pass rate in all
                          seven coding challenges. Designed and built full-stack
                          web applications primarily in React, JavaScript and
                          Node.JS, and testing all using React Testing Library.
                        </i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
