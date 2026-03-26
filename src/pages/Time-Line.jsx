import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaFigma, FaJava } from "react-icons/fa";

export default function MyRole() {
  const skills = [
    { title: "Frontend Development", text: "Building modern, responsive UIs using React, Tailwind CSS.", icon: <FaReact /> },
    { title: "Backend Development", text: "Creating APIs & server logic using Java, Spring Boot, and REST architecture.", icon: <FaJava /> },
    { title: "Database Management", text: "Handling data efficiently using MYSQL, SQL & schema design.", icon: <FaDatabase /> },
    ];

  return (
    <section id="skills" className="px-10 py-36 bg-[#0d0f15] text-white">
      <div className="mt-20"></div>
      <h2 className="text-4xl font-semibold text-center">What I Do</h2>
      <div className="w-24 h-[3px] bg-[#6c6cff] mx-auto mt-4 rounded-full"></div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((s, i) => (
          <div key={i} className="bg-[#161922] p-6 rounded-xl border border-gray-700 hover:border-[#6c6cff] transition">
            <div className="text-3xl mb-4 text-[#a9adff]">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400 text-[15px]">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
