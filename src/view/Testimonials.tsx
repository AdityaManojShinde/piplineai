"use client";
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aditya Shinde",
    role: "CTO, TechNova",
    quote:
      "PipelineAI has revolutionized our deployment process! We've seen a 40% reduction in deployment time and significantly fewer production issues.",
    image: "/icons/avatar1.svg",
    company: "TechNova",
  },
  {
    name: "Rudraksha",
    role: "Lead DevOps Engineer, CloudSphere",
    quote:
      "A must-have for any dev team serious about CI/CD. The AI-powered testing has caught critical bugs that would have otherwise made it to production.",
    image: "/icons/avatar2.svg",
    company: "CloudSphere",
  },
  {
    name: "Pushkar Kumar",
    role: "Engineering Manager, DataFlow",
    quote:
      "The intelligent pipeline suggestions have transformed how we approach our deployment strategy. Our team is more productive and our releases are more stable.",
    image: "/icons/avatar3.svg",
    company: "DataFlow",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 bg-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-green-500"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-500"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-purple-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-white mb-3 animate-fade-in">
          What Our Clients Say
        </h2>
        <p
          className="text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Trusted by engineering teams at innovative companies around the world
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-8 bg-gray-800 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col h-full animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 relative overflow-hidden">
                  <Image
                    src={t.image}
                    alt={`${t.name} avatar`}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-green-500 font-bold">{t.name}</h3>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-300 italic flex-grow text-left">
                "{t.quote}"
              </p>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-sm text-left">{t.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <button className="btn-green">Read More Success Stories</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
