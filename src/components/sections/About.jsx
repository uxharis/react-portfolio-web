import React from "react"
import RevealOnScroll from "../RevealOnScroll"

export default function About() {
  const frontendSkills = ["React", "TaildwindCSS", "Vanilla JS", "Bootstrap", "Wordpress"]
  const backendSkills = ["Node.js", "AWS", "Python", "MongoDB", "MySql"]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">About Me</h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertiese in building scalable web
              <br /> application and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border-white/10 border">
                <h3 className="text-xl font-bold mb-4">🖥️ Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((technology) => (
                    <span key={technology} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border-white/10 border text-left">
                <h3 className="text-xl font-bold mb-4">⚙️ Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((technology) => (
                    <span key={technology} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S in Computer Science</strong> - XYZ Univercity [2012-2013]
                </li>
                <li>
                  <strong>Lorem</strong> - XYZ Univercity [2013-2014]
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all text-left">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div className="">
                  <h4 className="font-semibold">Wordpresh Doverlper at FuduGo (2022 - Present) </h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae error nesciunt velit iusto eveniet minus unde excepturi dolorem officia sit.</p>
                </div>
                <div className="">
                  <h4 className="font-semibold">Lorem ispum (2020 - 2022) </h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae error nesciunt velit iusto eveniet minus unde excepturi dolorem officia sit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
