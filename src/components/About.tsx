import {
  Briefcase,
  GraduationCap,
  User,
  Users,
  Target
} from 'lucide-react';

import profilePhoto from '../assets/profile-photo.jpeg';

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN */}
          <div className="space-y-6">

            {/* WHO I AM */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#007ACC]/10 dark:bg-[#00A8E8]/10">
                <User className="w-6 h-6 text-[#007ACC] dark:text-[#00A8E8]" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white mb-2">
                  Who I Am
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I am a student at Strathmore University with a strong interest
                  in AI and Machine Learning engineering. I have hands-on
                  experience integrating machine learning models into web,
                  mobile, and IoT systems. My focus areas include AI-driven
                  application development, full-stack web and mobile solutions,
                  and IoT development and integration, with an emphasis on
                  scalability and real-world impact. I thrive in collaborative
                  environments and actively volunteer in initiatives aligned
                  with the UN Sustainable Development Goals.
                </p>
              </div>
            </div>

            {/* CLUBS */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#007ACC]/10 dark:bg-[#00A8E8]/10">
                <Users className="w-6 h-6 text-[#007ACC] dark:text-[#00A8E8]" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white mb-2">
                  Club & Professional Affiliations
                </h3>
                <div className="text-gray-600 dark:text-gray-400 space-y-2">
                  <p>• SCESA (Strathmore Computer Engineering Students Association)</p>
                  <p>• Cyber Security Club, Strathmore University</p>
                  <p>
                    • SDG Hub Member – contributing to technology-driven solutions
                    aligned with the UN Sustainable Development Goals
                  </p>
                </div>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#007ACC]/10 dark:bg-[#00A8E8]/10">
                <Briefcase className="w-6 h-6 text-[#007ACC] dark:text-[#00A8E8]" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white mb-2">
                  Experience
                </h3>

                <div className="text-gray-600 dark:text-gray-400 space-y-4">
                  <div>
                    <p className="text-[#007ACC] dark:text-[#00A8E8] mb-1">
                      Isuzu EA
                    </p>
                    <p className="mb-2">Jan 2025 – Apr 2025</p>
                    <ul className="space-y-1 text-sm">
                      <li>• First-level end-user computing support</li>
                      <li>• Assisted with backup and recovery processes</li>
                      <li>• Supported automation projects using PowerApps & Power Automate</li>
                      <li>• Assisted in testing and rollout of digital tools</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-[#007ACC] dark:text-[#00A8E8] mb-1">
                      Kenya National Library Service (KNLS)
                    </p>
                    <p className="mb-2">Volunteer | Jan 2024 – Apr 2024</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Catalogued and digitized library materials</li>
                      <li>• Managed inventory using barcode scanning</li>
                      <li>• Assisted in organizing educational workshops</li>
                      <li>• Supported collaborative learning environments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10">

            {/* GLASSMORPHISM PROFILE CARD */}
            <div className="flex justify-center">
              <div className="
                relative
                w-72
                h-80
                rounded-3xl
                overflow-hidden
                backdrop-blur-xl
                bg-white/30
                dark:bg-gray-800/30
                border
                border-white/20
                dark:border-gray-700/40
                shadow-xl
              ">
                <img
                  src={profilePhoto}
                  alt="Arthur Nyota"
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-3xl
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>
            </div>

            {/* EDUCATION */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#007ACC]/10 dark:bg-[#00A8E8]/10">
                <GraduationCap className="w-6 h-6 text-[#007ACC] dark:text-[#00A8E8]" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white mb-2">
                  Education
                </h3>
                <div className="text-gray-600 dark:text-gray-400 space-y-4">
                  <div>
                    <p className="text-[#007ACC] dark:text-[#00A8E8] mb-1">
                      Strathmore University
                    </p>
                    <p>Bachelor’s Degree</p>
                    <p>Expected Graduation: June 2026</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-[#007ACC] dark:text-[#00A8E8] mb-1">
                      Light Academy High School
                    </p>
                    <p>Mean Grade: B+</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* HIGHLIGHT CARDS */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#007ACC]/10 to-[#00A8E8]/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#007ACC] to-[#00A8E8] mx-auto flex items-center justify-center text-white mb-3">
              <GraduationCap className="w-8 h-8" />
            </div>
            <p className="text-[#007ACC] dark:text-[#00A8E8]">University Student</p>
          </div>

          <div className="bg-gradient-to-br from-[#007ACC]/10 to-[#00A8E8]/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#007ACC] to-[#00A8E8] mx-auto flex items-center justify-center text-white mb-3">
              <Briefcase className="w-8 h-8" />
            </div>
            <p className="text-[#007ACC] dark:text-[#00A8E8]">AI & ML Focus</p>
          </div>

          <div className="bg-gradient-to-br from-[#007ACC]/10 to-[#00A8E8]/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#007ACC] to-[#00A8E8] mx-auto flex items-center justify-center text-white mb-3">
              <Target className="w-8 h-8" />
            </div>
            <p className="text-[#007ACC] dark:text-[#00A8E8]">SDG Volunteer</p>
          </div>
        </div>

      </div>
    </section>
  );
}
