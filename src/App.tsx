import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import ProjectDetails from './ProjectDetails';
import ProjectCarousel from './ProjectCarousel';

const TableauIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.654.174V2.377H9.682v.58h1.972V5.16h.696V2.957h1.97v-.58h-1.97V.174h-.348zm6.03 2.262l-.002 1.623v1.623h-2.957v.927h2.957v3.188H18.725l.011-1.582.02-1.576 1.465-.02 1.46-.01v-.927H18.728V2.436h-.522zm-12.407.06V5.686H2.291v.925H5.277V9.801h.985V6.61h3.013v-.925H6.262V2.496H5.77zm6.086 5.27v3.593H8.06v1.188h3.304v3.596h1.28v-3.596H15.953v-1.188H12.643V7.766h-.637zm9.721 1.55v2.221h-2.012v.811h2.012v2.261h.887v-2.261H24v-.811h-2.029V9.317h-.422zm-19.111.131V11.621H0v.621H1.973v2.194H2.64v-2.194h2v-.62H2.609V9.446h-.318zm15.709 4.516v3.254h-3.016v.927h3.016v3.217h1.072v-3.216H21.74v-.928H18.754v-3.254h-.533zm-12.463.008v3.246H2.262v.928h2.957v3.189H6.32v-3.189h2.955v-.928H6.32V13.97h-.55zm6.316 4.578l.002 1.103v1.1H9.566v.812h1.971v2.262h.928l.012-1.119.017-1.143H14.463v-.812h-2V18.549h-.465z" fill="currentColor" />
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
    { name: "Excel / Macros", years: "5 years", icon: "/images/excel.png" },
    { name: "Tableau", years: "4 years", icon: "/images/Tableau-Logo.png" },
    { name: "IBM Cognos", years: "3 years", icon: "/images/ibmlogo.png" },
    { name: "Power BI", years: "2 years", icon: "/images/powerbilogo.png" },
    { name: "Power Automate", years: "2 years", icon: "/images/poweautomate.jpg" },
    { name: "SQL", years: "4 years", icon: "/images/sqlserverlogo.png" },
    { name: "Python", years: "3 years", icon: "/images/python-logo-png-open-2000.png" },
    { name: "AWS", years: "2 years", icon: "/images/Amazon-Web-Services-AWS-Symbol.png" },
    { name: "Azure", years: "2 years", icon: "/images/azurelogo.png" }
  ];

  const projects = [
    {
      id: "glp1-dashboard",
      title: "POWER BI & FABRIC",
      subtitle: "GLP-1 & Value-Based Care Analytics",
      description: "End-to-end Medallion Architecture pipeline on Microsoft Fabric with a Direct Lake semantic model and Power BI dashboard analyzing GLP-1 drug costs and clinical outcomes.",
      image: "/images/glp1/Executive Summary.jpg",
      details: {
        overview: "GLP-1 medications like Ozempic, Wegovy, and Mounjaro are dominating healthcare spending conversations right now. Employers are seeing drug costs spike with no clear picture of whether those costs are actually improving patient health. I wanted to build something that went beyond a basic cost report and actually asked: are Value-Based Care providers delivering better clinical outcomes per dollar spent, or are we just paying more for the same results? I set up a Microsoft business account specifically for this project, activated a Fabric trial capacity, and built the whole thing end to end. No pre-existing infrastructure, no template to start from.",
        technologies: ["Microsoft Fabric (F2 trial)", "Power BI", "PySpark", "Delta Lake", "Python", "DAX", "TMDL", "Fabric REST API"],
        keyFeatures: [
          "Full Medallion Architecture pipeline (Bronze/Silver/Gold) on OneLake",
          "Direct Lake semantic model deployed programmatically via Fabric REST API using TMDL",
          "Star schema with 7 DAX measures including calculated iterators",
          "Row-level security with USERPRINCIPALNAME() filtering",
          "4-page Power BI dashboard: Executive KPIs, Drug Analysis, Provider Performance, Clinical Outcomes",
          "8,000 claims, 200 providers, 5 specialties, 5 regions, 3 years of data (2022–2024), 7 GLP-1 drugs"
        ]
      }
    },
    {
      id: "tableau-server-optimization",
      title: "TABLEAU SERVER",
      subtitle: "Extract Performance Optimization",
      description: "Analyzed server audit logs to identify performance bottlenecks, optimize extract schedules, and reduce server load using custom Tableau administrative dashboards.",
      image: "/images/tableau-extract-analysis.png",
      details: {
        overview: "Optimization project tasked with identifying and resolving high-load periods on the Tableau Server caused by inefficient extract scheduling. By connecting directly to the Tableau Server PostgreSQL Workgroup Database, I built a comprehensive audit dashboard to visualize extract behaviors, identify concurrent high-volume jobs, and track failure rates. This analysis enabled a data-driven rescheduling strategy that significantly smoothed out server CPU and memory spikes.",
        technologies: ["Tableau Server Repository (PostgreSQL)", "SQL", "Tableau Desktop", "Data Engineering", "Performance Tuning"],
        keyFeatures: [
          "Granular heatmap analysis of extract schedules by day and hour",
          "Queue time vs. Job Duration correlation analysis",
          "Identification of 'Long Running' vs 'High Frequency' jobs",
          "Failure rate tracking and root cause categorization",
          "Automated alerts for extract delays exceeding thresholds"
        ],
        methodology: [
          "Established read-only connection to the internal Tableau Server PostgreSQL 'workgroup' database",
          "Queried the 'background_jobs', 'extracts', and 'historical_events' tables to reconstruct job history",
          "Created a 'Daily Calendar Heatmap' to visualize concurrency bottlenecks (e.g., 6 AM - 8 AM spikes)",
          "Analyzed 'Job Duration' distributions to separate lightweight refreshes from heavy ETL processes",
          "Proposed and implemented a staggered scheduling strategy, moving non-critical extracts to off-peak hours (10 PM - 4 AM)"
        ],
        clientImpact: [
          "Reduced average morning queue times by 45%",
          "Eliminated 90% of 'timeout' failures caused by resource contention",
          "Improved server responsiveness for interactive users during business hours",
          "Established a standard governance process for new extract scheduling"
        ],
        challenges: [
          "Decoding complex PostgreSQL schema relationships without official documentation for some internal tables",
          "Handling massive historical log data (millions of rows) efficiently within Tableau extracts",
          "Convincing business stakeholders to shift critical report refresh times to off-peak hours"
        ],
        dataInsights: [
          "Monday mornings had 3x the load of any other time block due to weekly accumulation",
          "15% of daily extracts were failing silently or retrying indefinitely, consuming resources",
          "Top 5 heavy extracts accounted for 40% of total processing duration",
          "Queue times correlated perfectly with extract failure rates, proving resource contention was the root cause"
        ],
        dashboards: [
          { vizId: "ExtractScheduleLoadTimes/ExtractScheduleLoadTimes", title: "Extract Schedule Load Times" }
        ]
      }
    },
    {
      id: "crypto-sentiment",
      title: "CLOUD & ML",
      subtitle: "Cryptocurrency Sentiment Analysis",
      description: "Built a cloud-based sentiment analysis service that predicts cryptocurrency market sentiment using ML models, deployed on AWS with CI/CD pipeline.",
      image: "/images/cryptosentimentproject.png",
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
      image: "/images/tableauconsultingproject.jpg",
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
        ],
        dashboards: [
          { vizId: "CustomerBehaviorABTestDashboard/ABTestDashboardOpens", title: "Open/Click Rate Dashboard" },
          { vizId: "shared/PSY8B88MX", title: "Opens/Clicks by Region" }
        ]
      }
    },
    {
      id: "research-grant-allocation",
      title: "IBM COGNOS",
      subtitle: "Research Grant Allocation",
      description: "Developed comprehensive Cognos reports for tracking and allocating research grants across departments, featuring dynamic prompt pages and detailed financial breakdowns.",
      image: "/images/ibmlogo.png",
      details: {
        overview: "Designed and implemented a complex IBM Cognos report to facilitate the allocation of research awards to various departments. This solution streamlines the financial tracking process, ensuring accurate distribution of funds and compliance with grant requirements. The report includes a user-friendly prompt page for filtering by fiscal year, department, and award type, generating a detailed PDF output for stakeholders.",
        technologies: ["IBM Cognos Analytics", "Oracle SQL", "Data Modeling", "Report Studio", "JavaScript"],
        keyFeatures: [
          "Dynamic Prompt Page with cascading filters",
          "Automated PDF generation and distribution",
          "Complex financial aggregation and calculation logic",
          "Department-level drill-through capabilities",
          "Compliance tracking and variance reporting"
        ],
        reportStructure: [
          "Prompt Page: User selection for FY, Department, and Award Type",
          "Summary Page: High-level overview of allocations",
          "Detail Pages: Granular transaction-level data"
        ],
        businessValue: [
          "Reduced manual reporting time by 40%",
          "Improved accuracy of grant allocations",
          "Enabled real-time budget tracking"
        ],
        challenges: [
          "Handling complex many-to-many relationships in grant data",
          "Optimizing SQL queries for large transaction volumes",
          "Designing for print-ready PDF output"
        ]
      }
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

        {/* Project Carousel */}
        <ProjectCarousel projects={projects} />

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
      <Route path="/portfolio" element={<Navigate to="/" replace />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;// Test deployment Thu Mar 27 01:35:21 CDT 2025
