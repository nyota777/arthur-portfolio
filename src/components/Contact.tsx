import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:nyotaarthur345@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 group"
                >
                  <div className="p-3 rounded-lg bg-[#007ACC]/10 dark:bg-[#00A8E8]/10 group-hover:bg-[#007ACC] dark:group-hover:bg-[#00A8E8] transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#007ACC] dark:text-[#00A8E8] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">nyotaarthur345@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+254743863767"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 group"
                >
                  <div className="p-3 rounded-lg bg-[#007ACC]/10 dark:bg-[#00A8E8]/10 group-hover:bg-[#007ACC] dark:group-hover:bg-[#00A8E8] transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#007ACC] dark:text-[#00A8E8] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">+254 743 863767</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="p-3 rounded-lg bg-[#007ACC]/10 dark:bg-[#00A8E8]/10">
                    <MapPin className="w-6 h-6 text-[#007ACC] dark:text-[#00A8E8]" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/nyota777/nyota777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-[#007ACC] hover:text-white dark:hover:bg-[#00A8E8] transition-all duration-300 text-gray-700 dark:text-gray-300"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arthur-nyota-5b2844241/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-[#007ACC] hover:text-white dark:hover:bg-[#00A8E8] transition-all duration-300 text-gray-700 dark:text-gray-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#007ACC] dark:focus:ring-[#00A8E8]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#007ACC] dark:focus:ring-[#00A8E8]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#007ACC] dark:focus:ring-[#00A8E8] resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#007ACC] hover:bg-[#0066aa] text-white rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Arthur Nyota. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}