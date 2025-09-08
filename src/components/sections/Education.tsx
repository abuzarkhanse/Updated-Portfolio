"use client";

import { motion } from "framer-motion";

const education = [
  {
    title: "BS Software Engineering",
    place: "Pak-Austria Fachhochschule: Institute of Applied Sciences & Technology (PAF-IAST)",
    period: "Oct 2022 – Present (7th Semester)",
    description: "Currently pursuing Software Engineering with focus on web development, AI, and modern software practices.",
  },
  {
    title: "FSc / HSSC – Pre-Engineering",
    place: "Al-Azhar Institute, Swat Panr",
    period: "2020 – 2022",
    description: "Completed Higher Secondary School Certificate in Pre-Engineering with a strong foundation in Mathematics and Physics.",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative flex flex-col justify-center items-center min-h-screen bg-black text-white px-6 py-16"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-wide"
      >
        Education
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-3xl w-full">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500"></div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full border-4 border-black shadow-lg"></div>

              {/* Content */}
              <div
                className={`bg-gray-900 rounded-2xl shadow-lg p-6 md:w-[45%] ${
                  index % 2 === 0 ? "md:ml-10" : "md:mr-10"
                }`}
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-1">
                  {edu.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">{edu.period}</p>
                <p className="text-gray-400 text-sm mb-2">{edu.place}</p>
                <p className="text-gray-400 text-sm">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
