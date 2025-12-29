import { 
  Code2, 
  Palette, 
  Database, 
  Layout, 
  Smartphone, 
  Cloud,
  GitBranch,
  Sparkles,
  Network,
  Brain,
  Cpu,
  BarChart3
} from 'lucide-react';

export function Skills() {
  const skills = [
    { name: 'AI & Machine Learning', icon: Brain, level: 90 },
    { name: 'Frontend Development', icon: Code2, level: 88 },
    { name: 'IoT Development', icon: Cpu, level: 85 },
    { name: 'Mobile Development', icon: Smartphone, level: 82 },
    { name: 'Networking', icon: Network, level: 80 },
    { name: 'Database Management', icon: Database, level: 85 },
    { name: 'Power BI', icon: BarChart3, level: 78 },
    { name: 'Cloud Services', icon: Cloud, level: 80 },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-gray-900 dark:text-white mb-4">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A diverse set of skills that enable me to bring ideas to life
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-[#007ACC]/10 to-[#00A8E8]/10 group-hover:from-[#007ACC]/20 group-hover:to-[#00A8E8]/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#007ACC] dark:text-[#00A8E8]" />
                  </div>
                </div>
                <h3 className="text-gray-900 dark:text-white mb-3">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-[#007ACC] to-[#00A8E8] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-[#007ACC] dark:text-[#00A8E8] mb-3">Languages</h4>
            <p className="text-gray-600 dark:text-gray-400">
              JavaScript, TypeScript, Python, HTML, CSS, SQL
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-[#007ACC] dark:text-[#00A8E8] mb-3">Frameworks</h4>
            <p className="text-gray-600 dark:text-gray-400">
              React, Next.js, Vue, Node.js, Express, TailwindCSS
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-[#007ACC] dark:text-[#00A8E8] mb-3">Tools</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Git, Docker, Figma, AWS, VS Code, Postman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}