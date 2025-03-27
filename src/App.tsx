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

const ExcelIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#217346"/>
    <path d="M7 4H17V20H7V4Z" fill="white"/>
    <path d="M9 8L11 12L13 8M8 16L10 12L12 16" stroke="#217346" strokeWidth="1.5"/>
    <path d="M7 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H7" stroke="white" strokeWidth="0.5"/>
    <path d="M17 4H19C19.5523 4 20 4.44772 20 5V19C19.5523 20 19.5523 20 19 20H17" stroke="white" strokeWidth="0.5"/>
  </svg>
);

const IBMIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#052FAD"/>
    <path d="M2 5H22M2 9H22M4 13H20M4 17H20M8 21H16" stroke="white" strokeWidth="2"/>
  </svg>
);

const PowerBIIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#F2C811"/>
    <path d="M4 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2Z" fill="#F2C811"/>
    <path d="M7 7H10V17H7V7Z" fill="white"/>
    <path d="M11 10H14V17H11V10Z" fill="white"/>
    <path d="M15 13H18V17H15V13Z" fill="white"/>
  </svg>
);

const SQLIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#4479A1"/>
    <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.58 21 12 21C16.42 21 20 19.21 20 17V7C20 4.79 16.42 3 12 3Z" fill="#4479A1"/>
    <ellipse cx="12" cy="7" rx="8" ry="4" fill="white" fillOpacity="0.3"/>
    <path d="M4 12V17C4 19.21 7.58 21 12 21C16.42 21 20 19.21 20 17V12C20 14.21 16.42 16 12 16C7.58 16 4 14.21 4 12Z" fill="#316192"/>
    <path d="M4 7V12C4 14.21 7.58 16 12 16C16.42 16 20 14.21 20 12V7C20 9.21 16.42 11 12 11C7.58 11 4 9.21 4 7Z" fill="#316192"/>
    <ellipse cx="12" cy="17" rx="8" ry="4" fill="white" fillOpacity="0.1"/>
  </svg>
);

const PythonIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#3776AB"/>
    <path d="M12 2C8.14 2 7 3.14 7 7V9H12V10H4C2.38 10 2 11.38 2 15C2 18.62 2.38 20 4 20H7V16C7 13.24 9.24 11 12 11H17C19.76 11 22 8.76 22 6V7C22 3.14 20.86 2 17 2H12Z" fill="#3776AB"/>
    <path d="M12 22C15.86 22 17 20.86 17 17V15H12V14H20C21.62 14 22 12.62 22 9C22 5.38 21.62 4 20 4H17V8C17 10.76 14.76 13 12 13H7C4.24 13 2 15.24 2 18V17C2 20.86 3.14 22 7 22H12Z" fill="#FFC107"/>
    <circle cx="9.5" cy="6.5" r="1.5" fill="white"/>
    <circle cx="14.5" cy="17.5" r="1.5" fill="white"/>
  </svg>
);

const AWSIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#FF9900"/>
    <path d="M18.7 10.3L17 11.3L15.3 10.3V8.7L17 7.7L18.7 8.7V10.3Z" fill="white"/>
    <path d="M13.7 14.3L12 15.3L10.3 14.3V12.7L12 11.7L13.7 12.7V14.3Z" fill="white"/>
    <path d="M8.7 10.3L7 11.3L5.3 10.3V8.7L7 7.7L8.7 8.7V10.3Z" fill="white"/>
    <path d="M13.7 6.3L12 7.3L10.3 6.3V4.7L12 3.7L13.7 4.7V6.3Z" fill="white"/>
    <path d="M13.7 18.3L12 19.3L10.3 18.3V16.7L12 15.7L13.7 16.7V18.3Z" fill="white"/>
  </svg>
);

const AzureIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0078D4"/>
    <path d="M13.05 4.24L6.56 18.05L2 18L7.09 9.24L13.05 4.24Z" fill="white"/>
    <path d="M13.05 4.24L14.5 13.5L22 18H6.56L13.05 4.24Z" fill="white" fillOpacity="0.8"/>
  </svg>
);

const PowerAutomateIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0066FF"/>
    <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" fill="#0066FF"/>
    <path d="M12 6L8 8V16L12 18L16 16V8L12 6Z" fill="white"/>
    <path d="M12 10L10 11V13L12 14L14 13V11L12 10Z" fill="#0066FF"/>
    <path d="M12 2V6M4 6L8 8M20 6L16 8M12 18V22M4 18L8 16M20 18L16 16" stroke="white" strokeWidth="0.5"/>
  </svg>
);

interface Skill {
  name: string;
  years: string;
  icon: string;
}

function Home() {
  const [selectedCert, setSelectedCert] = React.useState<string | null>(null);
  
  const socialIcons = [
    { icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/max-kimball/", label: "LinkedIn", color: "bg-neon-cyan" },
    { icon: <Github size={28} />, href: "https://github.com/mkimball14", label: "GitHub", color: "bg-neon-cyan" },
    { icon: <TableauIcon />, href: "https://public.tableau.com/app/profile/max.kimball14/vizzes", label: "Tableau", color: "bg-neon-cyan" },
    { icon: <Mail size={28} />, href: "mailto:maxkimball14@gmail.com", label: "Email", color: "bg-neon-cyan" }
  ];

  const skills: Skill[] = [
    { name: "Excel / Macros", years: "5 years", icon: "/portfolio/images/excel.png" },
    { name: "Tableau", years: "4 years", icon: "/portfolio/images/Tableau-Logo.png" },
    { name: "IBM Cognos", years: "3 years", icon: "/portfolio/images/ibmlogo.png" },
    { name: "Power BI", years: "2 years", icon: "/portfolio/images/powerbilogo.png" },
    { name: "Power Automate", years: "2 years", icon: "/portfolio/images/poweautomate.jpg" },
    { name: "SQL", years: "4 years", icon: "/portfolio/images/sqlserverlogo.png" },
    { name: "Python", years: "3 years", icon: "/portfolio/images/python-logo-png-open-2000.png" },
    { name: "AWS", years: "2 years", icon: "/portfolio/images/Amazon-Web-Services-AWS-Symbol.png" },
    { name: "Azure", years: "2 years", icon: "/portfolio/images/azurelogo.png" }
  ];

  const projects = [
    {
      id: "crypto-sentiment",
      title: "CLOUD & ML",
      subtitle: "Cryptocurrency Sentiment Analysis",
      description: "Built a cloud-based sentiment analysis service that predicts cryptocurrency market sentiment using ML models, deployed on AWS with CI/CD pipeline.",
      image: "/portfolio/images/cryptosentimentproject.png",
      details: {
        overview: "This is my final project for MSDS 434 at Northwestern. I built a web service that checks if people are saying positive or negative things about crypto on social media. It also tries to predict if the sentiment will be more positive or negative in the future.",
        technologies: ["FastAPI", "Docker", "AWS EC2", "Machine Learning", "GitHub Actions", "Python", "S3"],
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
        },
        projectStructure: [
          "app/",
          "-- models/              # Where the ML models live",
          "-- app.py              # Main API code",
          "-- train_forecast_model.py    # Creates the forecast model",
          "-- train_sentiment_model.py   # Creates the sentiment model",
          "-- requirements.txt    # Python packages used"
        ],
        courseInfo: {
          courseName: "MSDS 434 - Data Science & Cloud Computing",
          university: "Northwestern University",
          term: "Winter 2025"
        },
        setupInstructions: [
          "Clone this repo",
          "Make sure you have Docker installed",
          "Run 'docker-compose up --build'"
        ],
        futureIdeas: [
          "Get real-time data from Twitter or Reddit",
          "Make the predictions more accurate",
          "Add more cryptocurrencies",
          "Make the charts look nicer"
        ],
        knownIssues: [
          "The forecast model only has data from January 2021",
          "Sometimes the Docker build fails and needs to be restarted",
          "The GitHub Actions deployment can be flaky"
        ],
        learnings: [
          "Building and deploying web services",
          "Working with AWS",
          "Using Docker",
          "Setting up automated deployments",
          "How hard it is to get good training data!"
        ],
        awsDetails: [
          "An EC2 instance to run everything",
          "S3 to store some data",
          "GitHub Actions for automatic deployment"
        ]
      }
    },
    {
      id: "tableau-consulting",
      title: "TABLEAU",
      subtitle: "Consulting Project",
      description: "Created dashboards using scraped customer data from LinkedIn and visualized company growth by industry type and location. A/B Testing dashboards using data from Mailchimp.",
      image: "/portfolio/images/tableauconsultingproject.jpg",
      details: {
        overview: "Developed an interactive geographic visualization dashboard for a consulting client that displays customer growth by industry and location. This project involved data scraping from LinkedIn, data cleaning, and creating A/B testing dashboards using Mailchimp campaign data to optimize customer outreach strategies. I joined scraped LinkedIn data with Mailchimp campaign metrics and existing company CRM data to create a comprehensive view of customer engagement across regions.",
        technologies: ["Tableau", "Data Scraping", "Geographic Visualization", "A/B Testing", "Mailchimp API", "Data Cleaning", "Python", "Data Integration"],
        keyFeatures: [
          "Interactive map visualization with industry color coding",
          "Customer growth metrics by region and industry",
          "Customizable filters for time periods and company size",
          "A/B testing results dashboard for email campaigns",
          "Data integration from multiple sources (LinkedIn, Mailchimp, CRM)",
          "Automated data refresh pipeline"
        ],
        methodology: [
          "Collected customer profile data using LinkedIn scraping tools",
          "Cleaned and transformed data using Python scripts",
          "Geocoded company addresses for precise mapping",
          "Designed interactive Tableau dashboards with filtering capabilities",
          "Implemented A/B test analysis for email marketing campaigns using Mailchimp data",
          "Created automated data refresh schedule for client"
        ],
        clientImpact: [
          "30% increase in targeted outreach efficiency",
          "Identified 3 high-growth industry clusters previously overlooked",
          "Improved email campaign open rates by 22% using A/B testing insights",
          "Enabled data-driven decision making for marketing strategy",
          "Reduced time spent on manual reporting by 8 hours per week"
        ],
        challenges: [
          "Ensuring data privacy compliance when scraping LinkedIn profiles",
          "Dealing with incomplete location data requiring geocoding solutions",
          "Creating a reliable automated data pipeline for non-technical users",
          "Optimizing dashboard performance with large datasets",
          "Integrating disparate data sources with different schemas"
        ],
        dataInsights: [
          "Financial Services showed highest concentration in Northeast with 28% growth YoY",
          "Technology adoption rates varied significantly by geographic region",
          "Mid-size companies (100-500 employees) showed highest response rates to campaigns",
          "Western regions preferred different messaging than Eastern regions",
          "Industry growth patterns showed strong correlation with local economic indicators"
        ]
      }
    }
  ];

  const certifications = [
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "2021",
      image: "/portfolio/images/tableaudesktopspecialist.jpeg",
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
                  src="/portfolio/images/linkedinphoto.jpeg"
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
            Hi, I'm Max Kimball, a Business Intelligence Developer with over three years of experience in BI development and a master's in data science. I specialize in IBM Cognos, Tableau, and Power BI, bringing expertise in data modeling, report development, and administration. Currently pursuing my master's in data science at Northwestern University, I integrate cloud tools through AWS and Azure to enhance BI environments. My focus is on creating data-driven solutions that drive business decisions and improve operational efficiency.
          </p>
        </section>

        <div className="neon-divider"></div>

        {/* Skills Section */}
        <section className="py-10 px-6 bg-black/20">
          <h2 className="font-orbitron text-4xl font-bold text-center mb-8 text-white glow-text">Skills</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
              {skills.map((skill, index) => (
                <div key={index} className="w-full max-w-xs bg-deep-navy rounded-xl p-4 border border-neon-cyan/20 hover-glow transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    {skill.name === "Tableau" ? (
                      <a
                        href="https://public.tableau.com/app/profile/max.kimball14/vizzes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="w-20 h-20 mb-3 transform hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                          <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="font-orbitron text-lg font-semibold mb-1 text-white">{skill.name}</h3>
                        <p className="text-neon-cyan font-medium text-sm">{skill.years}</p>
                      </a>
                    ) : (
                      <>
                        <div className="w-20 h-20 mb-3 transform hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                          <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="font-orbitron text-lg font-semibold mb-1 text-white">{skill.name}</h3>
                        <p className="text-neon-cyan font-medium text-sm">{skill.years}</p>
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

export default App;// Test deployment Thu Mar 27 01:35:21 CDT 2025
