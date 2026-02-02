import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// ✅ Import project images
import optiBloodImg from '../assets/optiblood_image.png';
import nairobiRagImg from '../assets/rag_Nairobi.png';
import creditRiskImg from '../assets/AI_credit_risk_assesment.png';
import expenseMasterImg from '../assets/laravel-expenses-manager-table.png';
import yazuaPreviewImg from '../assets/yazuawebsite_image.png';

export function Projects() {
  const projects = [
    {
      title: 'OptiBlood – Intelligent Blood Supply Forecasting System',
      description:
        'OptiBlood is an intelligent machine learning system designed to improve blood bank operations by forecasting donor availability and predicting blood shortages. Using XGBoost regression and Auto-ARIMA time-series forecasting, the system delivers actionable insights, automated alerts, and risk scores that help hospitals and blood centers plan proactively, reduce shortages, and save lives.',
      image: optiBloodImg,
      tags: ['Python', 'XGBoost', 'Auto-ARIMA', 'Time Series', 'Healthcare AI'],
      liveUrl: '#',
      githubUrl: 'https://github.com/nyota777/OptiBlood',
    },
    {
      title: 'Nairobi-RAG – AI-Powered City Knowledge Chatbot',
      description:
        'Nairobi-RAG is a Retrieval-Augmented Generation (RAG) chatbot providing context-aware answers about Nairobi City, its history, National Park, and museums. Built using LangChain, FAISS, HuggingFace embeddings, and Google Gemini, it retrieves knowledge from curated sources and generates grounded responses with citations.',
      image: nairobiRagImg,
      tags: ['Streamlit', 'LangChain', 'FAISS', 'HuggingFace', 'Gemini AI'],
      liveUrl: '#',
      githubUrl: 'https://github.com/nyota777/Nairobi-RAG',
    },
    {
      title: 'Expense Master – Laravel-Based Expense Management System',
      description:
        'Expense Master is a secure Laravel-based expense management system that streamlines expense tracking and reporting. Features include authentication, real-time expense recording, and detailed financial reports.',
      image: expenseMasterImg,
      tags: ['Laravel', 'PHP', 'MySQL', 'Authentication', 'Financial Systems'],
      liveUrl: '#',
      githubUrl: 'https://github.com/nyota777/ExpenseMasterFinal',
    },
    {
      title: 'AI-Driven Credit Risk Assessment System',
      description:
        'A bank-grade, explainable ML system for assessing credit default risk among underbanked individuals and SME borrowers. Uses the Home Credit Default Risk dataset to predict default probability while emphasizing fairness, explainability, and regulatory compliance through SHAP.',
      image: creditRiskImg,
      tags: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP', 'Responsible AI'],
      liveUrl: '#',
      githubUrl: '#', // You will add later
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my work in AI, Machine Learning, and full-stack system development.
        </p>

        {/* Featured: Yazua Afrika */}
        <div className="mb-16 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-[#007ACC]/20 dark:bg-[#00A8E8]/20 text-[#007ACC] dark:text-[#00A8E8] rounded-full text-sm font-medium">
                Featured Project
              </span>
            </div>
            <h3 className="text-gray-900 dark:text-white mb-4 text-2xl md:text-3xl">
              Yazua Afrika – Organizational Website, Hosting & Email Infrastructure
            </h3>

            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Overview</h4>
                <p>
                  This was a real-world production project involving end-to-end delivery of an organizational website: development and deployment, domain management, DNS configuration, hosting migration, SSL/security fixes, and professional email infrastructure for Yazua Afrika.
                </p>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">What I Worked On</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Frontend website creation and improvements (HTML, CSS, JavaScript / React where applicable)</li>
                  <li>Deployment of the website to Netlify</li>
                  <li>Custom domain setup (yazuaafrika.com) and DNS configuration</li>
                  <li>Troubleshooting DNS propagation issues, HTTPS/HSTS errors, and broken asset paths (404 errors)</li>
                  <li>Fixing favicon and asset loading issues after deployment</li>
                  <li>Connecting and verifying the website with Google Search Console</li>
                  <li>Email infrastructure management using Zoho Mail</li>
                  <li>Restoring and validating multiple professional email accounts (info@, accounts@, register@, eric@)</li>
                  <li>Ensuring MX, SPF, and email routing records were correctly configured</li>
                  <li>Backup planning for critical email accounts</li>
                  <li>Coordinating between registrar, hosting provider, Netlify, and email services</li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Tech Stack & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'Git & GitHub',
                    'Netlify (hosting & deployment)',
                    'DNS management (registrar & hosting)',
                    'Zoho Mail (email hosting)',
                    'Google Search Console',
                    'SSL / HTTPS / DNS troubleshooting',
                  ].map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#007ACC]/10 dark:bg-[#00A8E8]/10 text-[#007ACC] dark:text-[#00A8E8] rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Challenges & Solutions</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Resolved domain and nameserver conflicts between hosting providers</li>
                  <li>Addressed DNS verification delays with correct record configuration and propagation checks</li>
                  <li>Restored missing email inboxes and fixed email delivery issues</li>
                  <li>Handled search engine verification and favicon indexing issues</li>
                  <li>Production debugging in a live environment to fix asset paths and security headers</li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-3">Project Preview</h4>
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 aspect-video max-w-4xl">
                  <ImageWithFallback
                    src={yazuaPreviewImg}
                    alt="Yazua Afrika organizational website homepage showing branding and main content sections"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-gray-900 dark:text-white font-semibold mb-3">Live Project Link</h4>
              <a
                href="https://yazuaafrika.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#007ACC] hover:bg-[#0066aa] text-white rounded-lg transition-colors duration-300 font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Live Website
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#007ACC]/10 dark:bg-[#00A8E8]/10 text-[#007ACC] dark:text-[#00A8E8] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-[#007ACC] hover:bg-[#0066aa] text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-2 border-[#007ACC] text-[#007ACC] dark:border-[#00A8E8] dark:text-[#00A8E8] rounded-lg hover:bg-[#007ACC] hover:text-white dark:hover:bg-[#00A8E8] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
