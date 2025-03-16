'use client';

import React from "react";
import { Star, ArrowRight } from "../components/Icons";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, delay = 0 }) => (
  <div className={`bg-gray-800 p-6 rounded-lg border border-gray-700 animate-fade-in animation-delay-${delay}`}>
    <div className="flex text-yellow-400 mb-4">
      <Star className="h-5 w-5" />
      <Star className="h-5 w-5" />
      <Star className="h-5 w-5" />
      <Star className="h-5 w-5" />
      <Star className="h-5 w-5" />
    </div>
    <blockquote className="text-gray-300 mb-4">"{quote}"</blockquote>
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold">
        {author.charAt(0)}
      </div>
      <div className="ml-3">
        <p className="text-white font-medium">{author}</p>
        <p className="text-gray-400 text-sm">{role}, {company}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "PipelineAI has transformed our deployment process. We've reduced our build times by 45% and caught critical bugs before they reached production.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechNova",
      delay: 0
    },
    {
      quote: "The AI-powered test prioritization is a game-changer. Our CI pipeline is now 3x faster while maintaining the same level of confidence in our releases.",
      author: "Michael Chen",
      role: "DevOps Lead",
      company: "DataSphere",
      delay: 100
    },
    {
      quote: "Setting up our CI/CD pipeline used to take weeks. With PipelineAI, we were up and running in hours with a better setup than we could have built ourselves.",
      author: "Jessica Williams",
      role: "Engineering Manager",
      company: "CloudScale",
      delay: 200
    },
    {
      quote: "The insights provided by PipelineAI helped us identify bottlenecks we didn't even know existed. Our deployment frequency has doubled since implementation.",
      author: "David Rodriguez",
      role: "Lead Developer",
      company: "Quantum Software",
      delay: 300
    },
    {
      quote: "As a startup, we needed a CI/CD solution that could grow with us. PipelineAI's scalable platform has been perfect, from our first MVP to our enterprise clients.",
      author: "Emma Thompson",
      role: "Founder",
      company: "InnovateTech",
      delay: 400
    },
    {
      quote: "The security scanning features have caught several critical vulnerabilities that our previous tools missed. It's like having an extra security engineer on the team.",
      author: "Robert Kim",
      role: "Security Architect",
      company: "SecureWave",
      delay: 500
    }
  ];

  return (
    <div id="testimonials" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase animate-slide-left">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl animate-slide-right animation-delay-100">
            Trusted by Innovative Teams
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto animate-fade-in animation-delay-200">
            See what our customers are saying about how PipelineAI has transformed their development workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              delay={testimonial.delay}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in animation-delay-600">
          <p className="text-gray-400 mb-4">Join hundreds of companies delivering better software, faster</p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105">
            Read More Success Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
