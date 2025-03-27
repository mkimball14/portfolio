import React from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const TableauIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3H8V5H6V3Z" fill="currentColor"/>
    <path d="M10 3H12V5H10V3Z" fill="currentColor"/>
    <path d="M14 3H16V5H14V3Z" fill="currentColor"/>
    <path d="M6 7H8V9H6V7Z" fill="currentColor"/>
    <path d="M10 7H12V9H10V7Z" fill="currentColor"/>
    <path d="M14 7H12V9H14V7Z" fill="currentColor"/>
    <path d="M6 11H8V13H6V11Z" fill="currentColor"/>
    <path d="M10 11H12V13H10V11Z" fill="currentColor"/>
    <path d="M14 11H16V13H14V11Z" fill="currentColor"/>
    <path d="M6 15H8V17H6V15Z" fill="currentColor"/>
    <path d="M10 15H12V17H10V15Z" fill="currentColor"/>
    <path d="M14 15H16V17H14V15Z" fill="currentColor"/>
    <path d="M6 19H8V21H6V19Z" fill="currentColor"/>
    <path d="M10 19H12V21H10V19Z" fill="currentColor"/>
    <path d="M14 19H16V21H14V19Z" fill="currentColor"/>
  </svg>
);

function ProjectDetails() {
  const { id } = useParams();
  
  const socialIcons = [
    { icon: <Linkedin size={24} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={24} />, href: "#", label: "GitHub" },
    { icon: <TableauIcon />, href: "#", label: "Tableau" },
    { icon: <Mail size={24} />, href: "#", label: "Email" }
  ];

  return (
    <div className="min-h-screen bg-charcoal py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-deep-navy rounded-2xl card-glow overflow-hidden">
        <div className="p-8">
          <h1 className="font-orbitron text-3xl font-bold text-white mb-6 glow-text">TABLEAU | U.S. TECH LAYOFFS</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200"
              alt="Dashboard Preview"
              className="w-full rounded-xl border border-neon-cyan/20 hover-glow transition-all duration-300"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-orbitron text-2xl text-white mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                Dynamic analysis of tech layoffs in the US during Jan 2022 - Jan 2023. This project was created to analyze and visualize the impact of layoffs in the tech industry.
              </p>
            </div>

            <div>
              <h2 className="font-orbitron text-2xl text-white mb-4">Key Questions Explored</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Which industries had the highest number of layoffs?</li>
                <li>Which companies had the highest number of layoffs?</li>
                <li>How did layoffs trend over the last year?</li>
                <li>What was the average number of layoffs per month?</li>
              </ul>
            </div>

            <div>
              <h2 className="font-orbitron text-2xl text-white mb-4">Dashboard Creation Process</h2>
              <ul className="list-decimal list-inside text-gray-300 space-y-2">
                <li>Created a Parameter, Subset Labels, and Top N filter</li>
                <li>Created a column/bar chart ranking the top 10 industries</li>
                <li>Added an AVG reference line to column chart</li>
                <li>Created a bar chart ranking the top N companies</li>
                <li>Created a line chart with callouts for key insights</li>
                <li>Added subtitles to each chart for context</li>
                <li>Set charts, filters, and KPIs into containers</li>
                <li>Formatted the entire dashboard for consistency</li>
              </ul>
            </div>

            <div>
              <h2 className="font-orbitron text-2xl text-white mb-4">Key Insights</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>E-Commerce and Social Media made up 25% of total layoffs</li>
                <li>The top 5 companies made up almost 50% of total layoffs</li>
                <li>January 2023 layoffs were 93% of total layoffs for 2022</li>
              </ul>
            </div>

            <div>
              <h2 className="font-orbitron text-2xl text-white mb-4">Technical Skills Used</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Parameters', 'Top N filters', 'Subset labels', 'Reference lines', 'Calculated fields', 'LOD expressions'].map((skill, index) => (
                  <div key={index} className="bg-deep-navy p-4 rounded-xl border border-neon-cyan/20 text-neon-cyan text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="https://public.tableau.com/views/USTechLayoffs/Dashboard1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-neon-cyan text-deep-navy px-8 py-3 rounded-full font-orbitron font-medium hover-glow transition-all duration-300"
            >
              View Live Dashboard
            </a>
          </div>
        </div>

        <div className="neon-divider"></div>

        <footer className="py-8 px-6 text-center">
          <div className="flex justify-center gap-4 mb-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-3 bg-deep-navy rounded-xl text-neon-cyan border border-neon-cyan hover-glow transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400 font-orbitron">© 2024 Maximilian Kimball</p>
        </footer>
      </div>
    </div>
  );
}

export default ProjectDetails;