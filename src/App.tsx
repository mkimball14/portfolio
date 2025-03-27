import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import ProjectDetails from './ProjectDetails';

const TableauIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 1.5h3v3h-3v-3zM4.5 1.5h3v3h-3v-3zM16.5 1.5h3v3h-3v-3z" fill="currentColor"/>
    <path d="M10.5 19.5h3v3h-3v-3zM4.5 19.5h3v3h-3v-3zM16.5 19.5h3v3h-3v-3z" fill="currentColor"/>
    <path d="M10.5 10.5h3v3h-3v-3zM1.5 10.5h3v3h-3v-3zM19.5 10.5h3v3h-3v-3z" fill="currentColor"/>
    <path d="M10.5 4.5h3v3h-3v-3zM4.5 4.5h3v3h-3v-3zM16.5 4.5h3v3h-3v-3z" fill="currentColor"/>
    <path d="M10.5 16.5h3v3h-3v-3zM4.5 16.5h3v3h-3v-3zM16.5 16.5h3v3h-3v-3z" fill="currentColor"/>
    <path d="M10.5 7.5h3v3h-3v-3zM1.5 7.5h3v3h-3v-3zM19.5 7.5h3v3h-3v-3z" fill="currentColor"/>
    <path d="M10.5 13.5h3v3h-3v-3zM1.5 13.5h3v3h-3v-3zM19.5 13.5h3v3h-3v-3z" fill="currentColor"/>
  </svg>
);

function Home() {
  const [selectedCert, setSelectedCert] = React.useState<string | null>(null);
  
  const socialIcons = [
    { icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/max-kimball/", label: "LinkedIn", color: "bg-neon-cyan" },
    { icon: <Github size={28} />, href: "https://github.com/mkimball14", label: "GitHub", color: "bg-neon-cyan" },
    { icon: <TableauIcon />, href: "https://public.tableau.com/app/profile/max.kimball14/vizzes", label: "Tableau", color: "bg-neon-cyan" },
    { icon: <Mail size={28} />, href: "mailto:maxkimball14@gmail.com", label: "Email", color: "bg-neon-cyan" }
  ];

  const skills = [
    { name: "Excel / Macros", years: "5 years", icon: "https://img.icons8.com/color/96/000000/microsoft-excel-2019--v1.png" },
    { name: "Tableau", years: "4 years", icon: "https://img.icons8.com/color/96/000000/tableau-software.png" },
    { name: "IBM Cognos", years: "3 years", icon: "https://img.icons8.com/color/96/000000/ibm.png" },
    { name: "Power BI", years: "2 years", icon: "https://img.icons8.com/color/96/000000/power-bi.png" },
    { name: "Power Automate", years: "2 years", icon: "/images/poweautomate.jpg" },
    { name: "SQL", years: "4 years", icon: "https://img.icons8.com/color/96/000000/sql.png" },
    { name: "Python", years: "3 years", icon: "https://img.icons8.com/color/96/000000/python.png" },
    { name: "AWS", years: "2 years", icon: "https://img.icons8.com/color/96/000000/amazon-web-services.png" },
    { name: "Azure", years: "2 years", icon: "https://img.icons8.com/fluency/96/000000/azure-1.png" }
  ];

  const projects = [
    {
      id: "crypto-sentiment",
      title: "CLOUD & ML",
      subtitle: "Cryptocurrency Sentiment Analysis",
      description: "Built a cloud-based sentiment analysis service that predicts cryptocurrency market sentiment using ML models, deployed on AWS with CI/CD pipeline.",
      image: "https://github.com/user-attachments/assets/9224d06a-fa03-4a8c-ba4b-d3c91aae1468",
      details: {
        overview: "Developed a web service that analyzes social media sentiment about cryptocurrencies and forecasts future sentiment trends using machine learning models.",
        technologies: ["FastAPI", "Docker", "AWS EC2", "Machine Learning", "GitHub Actions"],
        keyFeatures: [
          "Sentiment analysis API endpoint",
          "Time series forecasting model",
          "Interactive forecast visualization",
          "Containerized deployment",
          "Automated CI/CD pipeline"
        ],
        deployment: "AWS EC2 with Docker containers",
        links: {
          predict: "http://ec2-35-86-159-254.us-west-2.compute.amazonaws.com:8080/predict",
          forecast: "http://ec2-35-86-159-254.us-west-2.compute.amazonaws.com:8080/forecast_chart/7"
        }
      }
    },
    {
      id: "tableau-layoffs",
      title: "TABLEAU",
      subtitle: "U.S. Tech Layoffs",
      description: "Dynamic analysis of tech layoffs in the US during Jan 2022 - Jan 2023.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400"
    },
    {
      id: "marketing-dashboard",
      title: "TABLEAU",
      subtitle: "Marketing Dashboard",
      description: "Developed a summary of company account activity.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400"
    },
    {
      id: "tableau-consulting",
      title: "TABLEAU",
      subtitle: "Consulting Project",
      description: "Created dashboards using scraped customer data from LinkedIn and visualized company growth by industry type and location. A/B Testing dashboards using data from Mailchimp.",
      image: "/images/tableauconsultingproject.jpg"
    }
  ];

  const certifications = [
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "2021",
      image: "/images/tableaudesktopspecialist.jpeg",
      description: "Certified in creating and publishing Tableau visualizations, connecting to data sources, and understanding core Tableau Desktop functionality."
    }
  ];

  return (
    <div className="min-h-screen bg-charcoal py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-deep-navy rounded-2xl card-glow overflow-hidden">
        {/* Header Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
          <div className="relative text-center py-16 px-6">
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-cyan rounded-full blur opacity-75"></div>
                <img
                  src="/images/linkedinphoto.jpeg"
                  alt="Profile"
                  className="relative w-40 h-40 rounded-full object-cover border-4 border-neon-cyan glow-border"
                />
              </div>
              <h1 className="font-orbitron text-5xl font-bold tracking-wider text-white uppercase mt-8 mb-2 glow-text">
                MAXIMILIAN KIMBALL
              </h1>
              <p className="font-orbitron text-2xl text-neon-cyan mb-10">Data Analyst | BI Developer</p>
              
              <div className="flex justify-center gap-6 mb-10">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-deep-navy rounded-2xl text-neon-cyan border border-neon-cyan hover-glow transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <a
                href="https://drive.google.com/file/d/1uZcfmpHXk7n6I1mTkMcu6nuJL7Iwc91U/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-neon-cyan text-deep-navy px-10 py-4 rounded-full text-lg font-orbitron font-semibold hover-glow transition-all duration-300"
              >
                View Resume
              </a>
            </div>
            
            <ChevronDown className="w-10 h-10 mx-auto text-neon-cyan animate-bounce" />
          </div>
        </div>

        <div className="neon-divider"></div>

        {/* About Section */}
        <section className="py-16 px-6">
          <h2 className="font-orbitron text-4xl font-bold text-center mb-8 text-white glow-text">About Me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-center text-lg leading-relaxed">
            Hi! I'm Maximilian Kimball, and I'm a Business Intelligence Developer. I focus on creating reports and visualizations for data-forward companies. I've been focused on creating business insights that drive decision making with top companies - ultimately - reports that connect to all stakeholders. I've spent 5+ years developing reports that save time and money.
          </p>
        </section>

        <div className="neon-divider"></div>

        {/* Skills Section */}
        <section className="py-16 px-6 bg-black/20">
          <h2 className="font-orbitron text-4xl font-bold text-center mb-12 text-white glow-text">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {skills.map((skill, index) => (
                <div key={index} className="w-full max-w-xs bg-deep-navy rounded-2xl p-8 border border-neon-cyan/20 hover-glow transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    {skill.name === "Tableau" ? (
                      <a
                        href="https://public.tableau.com/app/profile/max.kimball14/vizzes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <img src={skill.icon} alt={skill.name} className="w-32 h-32 mb-6 transform hover:scale-110 transition-transform duration-300" />
                        <h3 className="font-orbitron text-xl font-semibold mb-2 text-white">{skill.name}</h3>
                        <p className="text-neon-cyan font-medium">{skill.years}</p>
                      </a>
                    ) : (
                      <>
                        <img src={skill.icon} alt={skill.name} className="w-32 h-32 mb-6 transform hover:scale-110 transition-transform duration-300" />
                        <h3 className="font-orbitron text-xl font-semibold mb-2 text-white">{skill.name}</h3>
                        <p className="text-neon-cyan font-medium">{skill.years}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="neon-divider"></div>

        {/* Projects Section */}
        <section className="py-16 px-6">
          <h2 className="font-orbitron text-4xl font-bold text-center mb-12 text-white glow-text">Featured Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 bg-deep-navy rounded-2xl p-8 border border-neon-cyan/20 hover-glow transition-all duration-300">
                <div className="md:w-1/2">
                  <h3 className="font-orbitron text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-neon-cyan font-medium mb-3">{project.subtitle}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-block bg-neon-cyan text-deep-navy px-8 py-3 rounded-full text-sm font-orbitron font-medium hover-glow transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
                <Link to={`/project/${project.id}`} className="md:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-2xl border border-neon-cyan/20 hover-glow transition-all duration-300"
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <div className="neon-divider"></div>

        {/* Professional Certifications Section */}
        <section className="py-16 px-6 bg-black/20">
          <h2 className="font-orbitron text-4xl font-bold text-center mb-12 text-white glow-text">Professional Certifications</h2>
          <div className="max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-deep-navy rounded-2xl p-8 border border-neon-cyan/20 hover-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      onClick={() => setSelectedCert(cert.image)}
                      className="w-64 h-64 object-contain transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                  <div className="md:w-2/3 text-center md:text-left">
                    <h3 className="font-orbitron text-2xl font-bold mb-2 text-white">{cert.title}</h3>
                    <p className="text-neon-cyan font-medium mb-2">Issued by {cert.issuer} | {cert.date}</p>
                    <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Modal for enlarged certificate */}
          {selectedCert && (
            <div 
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedCert(null)}
            >
              <div className="relative max-w-4xl w-full">
                <img 
                  src={selectedCert} 
                  alt="Certificate"
                  className="w-full h-auto rounded-xl"
                />
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 text-white bg-deep-navy p-2 rounded-full hover:bg-neon-cyan hover:text-deep-navy transition-all duration-300"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </section>

        <div className="neon-divider"></div>

        {/* Work Experience Section */}
        <section className="py-16 px-6">
          <h2 className="font-orbitron text-4xl font-bold text-center mb-12 text-white glow-text">Work Experience</h2>
          <div className="space-y-8">
            {/* Northwestern University */}
            <div className="bg-deep-navy rounded-2xl p-8 border border-neon-cyan/20 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-2xl font-bold text-white">Business Intelligence Developer</h3>
              <p className="text-neon-cyan text-lg mt-1">Northwestern University</p>
              <div className="mt-1">
                <span className="text-neon-cyan">10/2022 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>Developed advanced reports in IBM Cognos and Tableau using complex queries, data models, and Oracle SQL testing to enhance reporting and validate data integrity.</li>
                <li>Managed Power BI licenses and workspaces, including Azure AD group administration, while troubleshooting issues for Power BI, Cognos, and Tableau Server. Researched and evaluated Microsoft Fabric for potential adoption.</li>
                <li>Led Cognos and Tableau Server upgrades, tested AWS S3 Connector integrations, and managed Azure-based setups for OneDrive/SharePoint API.</li>
                <li>Developed an initial Azure Function script with Python and Power Automate to scan for vulnerable passwords in SharePoint files, collaborating with developers in GitHub using VS Code and managing branches.</li>
              </ul>
            </div>

            {/* IHDA */}
            <div className="bg-deep-navy rounded-2xl p-8 border border-neon-cyan/20 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-2xl font-bold text-white">Business Analyst Intern</h3>
              <p className="text-neon-cyan text-lg mt-1">Illinois Housing Development Authority</p>
              <div className="mt-1">
                <span className="text-neon-cyan">06/2021 - 08/2021</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>Developed QA Testing Reports for rental housing application websites during both testing and production phases. Helped identify over 15 bugs and communicated with development team to fix these issues in MS SQL Server.</li>
                <li>Identified over 500 critical vulnerabilities in the network using MS Security.</li>
                <li>Generated Power BI reports to visualize security findings and support decision-making.</li>
              </ul>
            </div>

            {/* USDA */}
            <div className="bg-deep-navy rounded-2xl p-8 border border-neon-cyan/20 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-2xl font-bold text-white">Technical Support Intern</h3>
              <p className="text-neon-cyan text-lg mt-1">US Department of Agriculture</p>
              <div className="mt-1">
                <span className="text-neon-cyan">06/2019 - 08/2019</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>Resolved help desk tickets related to operating systems, networks, hardware, and software.</li>
                <li>Assisted in installing uniform software packages across USDA systems.</li>
                <li>Reimaged and maintained over 300 computers in eight weeks, ensuring operational efficiency.</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="neon-divider"></div>

        {/* Contact Section */}
        <section className="py-16 px-6 bg-black/20">
          <h2 className="font-orbitron text-4xl font-bold text-center mb-12 text-white glow-text">Contact Me</h2>
          <form className="max-w-lg mx-auto space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-4 rounded-xl bg-deep-navy border border-neon-cyan/30 text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan hover-glow transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 rounded-xl bg-deep-navy border border-neon-cyan/30 text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan hover-glow transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-deep-navy border border-neon-cyan/30 text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan hover-glow transition-all duration-300"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-neon-cyan text-deep-navy px-10 py-4 rounded-full text-lg font-orbitron font-semibold hover-glow transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        <div className="neon-divider"></div>

        {/* Footer */}
        <footer className="py-12 px-6 text-center">
          <div className="flex justify-center gap-6 mb-6">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-deep-navy rounded-2xl text-neon-cyan border border-neon-cyan hover-glow transition-all duration-300"
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;