import { Download, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-[#007ACC]">Arthur Nyota</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            AI & Machine Learning Engineering Student | Building intelligent solutions for real-world impact
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button className="px-8 py-3 bg-[#007ACC] hover:bg-[#0066aa] text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download CV
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 border-2 border-[#007ACC] text-[#007ACC] dark:border-[#00A8E8] dark:text-[#00A8E8] rounded-lg hover:bg-[#007ACC] hover:text-white dark:hover:bg-[#00A8E8] transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/nyota777/nyota777"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-[#007ACC] hover:text-white dark:hover:bg-[#00A8E8] transition-all duration-300 text-gray-700 dark:text-gray-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/arthur-nyota-5b2844241/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-[#007ACC] hover:text-white dark:hover:bg-[#00A8E8] transition-all duration-300 text-gray-700 dark:text-gray-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:nyotaarthur345@gmail.com"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-[#007ACC] hover:text-white dark:hover:bg-[#00A8E8] transition-all duration-300 text-gray-700 dark:text-gray-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}