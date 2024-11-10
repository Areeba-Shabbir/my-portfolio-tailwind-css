export default function Skills() {
  return (
    <div className="px-4 sm:px-8 bg-black md:px-16 lg:px-24">
      <section className="skills-section py-16" id="skills">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <div className="skills-container mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Coding Skills */}
          <div className="skills-category">
            <h3 className="text-2xl font-semibold text-white mb-6">Coding Skills</h3>
            <div className="skills-list space-y-6">
              {[
                { skill: 'HTML', percentage: 85 },
                { skill: 'CSS', percentage: 75 },
                { skill: 'Typescript', percentage: 65 },
                { skill: 'Next.js', percentage: 85 }
              ].map(({ skill, percentage }) => (
                <div key={skill} className="skill-progress">
                  <h3 className="text-white text-lg flex justify-between items-center">
                    {skill} <span className="text-white">{percentage}%</span>
                  </h3>
                  <div className="w-full bg-gray-800 h-2 rounded-full mt-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="skills-category">
            <h3 className="text-2xl font-semibold text-white mb-6">Professional Skills</h3>
            <div className="skills-list space-y-6">
              {[
                { skill: 'Web Design', percentage: 65 },
                { skill: 'Resume Making', percentage: 85 },
                { skill: 'Portfolio Making', percentage: 90 }
              ].map(({ skill, percentage }) => (
                <div key={skill} className="skill-progress">
                  <h3 className="text-white text-lg flex justify-between items-center">
                    {skill} <span className="text-white">{percentage}%</span>
                  </h3>
                  <div className="w-full bg-gray-800 h-2 rounded-full mt-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
