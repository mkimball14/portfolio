import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowLeft, Maximize, X, FileText } from 'lucide-react';

declare global {
  interface Window {
    tableau: {
      Viz: new (container: HTMLElement, url: string, options: {
        hideTabs?: boolean;
        hideToolbar?: boolean;
        width?: string;
        height?: string;
        onFirstInteractive?: () => void;
        onError?: () => void;
      }) => unknown;
    };
  }
}

interface ProjectLinks {
  predict: string;
  forecast: string;
}

interface BaseProjectDetails {
  overview: string;
  technologies: string[];
  keyFeatures: string[];
}

interface CryptoProjectDetails extends BaseProjectDetails {
  deployment: string;
  links: ProjectLinks;
  projectStructure: string[];
  courseInfo: {
    courseName: string;
    university: string;
    term: string;
  };
  setupInstructions: string[];
  futureIdeas: string[];
  knownIssues: string[];
  learnings: string[];
  awsDetails: string[];
}

type TableauProjectDetails = BaseProjectDetails;

interface TableauDashboardConfig {
  vizId: string;
  title: string;
}

interface TableauConsultingDetails extends TableauProjectDetails {
  methodology?: string[];
  clientImpact?: string[];
  challenges?: string[];
  dataInsights?: string[];
  dashboards?: TableauDashboardConfig[];
}

interface CognosProjectDetails extends BaseProjectDetails {
  reportStructure: string[];
  businessValue: string[];
  challenges: string[];
  pdfPath?: string;
  promptPageImage?: string;
}

interface PowerBIProjectDetails extends BaseProjectDetails {
  architecture?: {
    title: string;
    description: string;
    flow: string;
  };
  challenges?: string[];
  futureIdeas?: string[];
  powerbi?: {
    url: string;
  };
  images?: { src: string; caption: string }[];
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: CryptoProjectDetails | TableauProjectDetails | TableauConsultingDetails | CognosProjectDetails | PowerBIProjectDetails;
}

const TableauIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.654.174V2.377H9.682v.58h1.972V5.16h.696V2.957h1.97v-.58h-1.97V.174h-.348zm6.03 2.262l-.002 1.623v1.623h-2.957v.927h2.957v3.188H18.725l.011-1.582.02-1.576 1.465-.02 1.46-.01v-.927H18.728V2.436h-.522zm-12.407.06V5.686H2.291v.925H5.277V9.801h.985V6.61h3.013v-.925H6.262V2.496H5.77zm6.086 5.27v3.593H8.06v1.188h3.304v3.596h1.28v-3.596H15.953v-1.188H12.643V7.766h-.637zm9.721 1.55v2.221h-2.012v.811h2.012v2.261h.887v-2.261H24v-.811h-2.029V9.317h-.422zm-19.111.131V11.621H0v.621H1.973v2.194H2.64v-2.194h2v-.62H2.609V9.446h-.318zm15.709 4.516v3.254h-3.016v.927h3.016v3.217h1.072v-3.216H21.74v-.928H18.754v-3.254h-.533zm-12.463.008v3.246H2.262v.928h2.957v3.189H6.32v-3.189h2.955v-.928H6.32V13.97h-.55zm6.316 4.578l.002 1.103v1.1H9.566v.812h1.971v2.262h.928l.012-1.119.017-1.143H14.463v-.812h-2V18.549h-.465z" fill="currentColor" />
  </svg>
);

const projects: Project[] = [
  {
    id: "glp1-dashboard",
    title: "POWER BI & FABRIC",
    subtitle: "GLP-1 & Value-Based Care Analytics",
    description: "End-to-end Medallion Architecture pipeline on Microsoft Fabric with a Direct Lake semantic model and Power BI dashboard analyzing GLP-1 drug costs and clinical outcomes.",
    image: "/images/glp1/Executive Summary.jpg",
    details: {
      overview: "GLP-1 medications like Ozempic and Wegovy are dominating healthcare spending. Employers are seeing drug costs spike with no clear picture of whether those costs are actually improving patient health. I wanted to build something that went beyond a basic cost report and actually asked: are Value-Based Care providers delivering better clinical outcomes per dollar spent, or are we just paying more for the same results? I set up a Microsoft business account specifically for this project, activated a Fabric trial capacity, and built the whole thing end to end from a blank workspace.",
      technologies: ["Microsoft Fabric", "Power BI", "PySpark", "Delta Lake", "Python", "DAX", "TMDL", "Fabric REST API"],
      keyFeatures: [
        "Full Medallion Architecture pipeline on OneLake",
        "Direct Lake semantic model deployed via TMDL",
        "7 DAX measures including calculated iterators",
        "Row-level security based on UserPrincipalName",
        "Comprehensive 4-page Power BI dashboard"
      ],
      architecture: {
        title: "Medallion Architecture",
        description: "I structured the lakehouse in three layers rather than dumping CSVs directly into Power BI. Medallion gives each layer a single job.",
        flow: "CSV Files -> Bronze (raw copy) -> Silver (cleansed) -> Gold (star schema) -> Semantic Model -> Dashboard"
      },
      challenges: [
        "Trial capacity throttling: Fabric capacity hit HTTP 430 errors after failed notebook runs. Fixed by manually cancelling zombie sessions and switching to REST API-based execution.",
        "TMDL vs model.bim: Direct Lake works differently, requiring TMDL for semantic model version control instead of standard JSON.",
        "Columns showing as measures: Fixed implicit measures by adding `summarizeBy: none` to each column definition in the TMDL and redeploying via the endpoint."
      ],
      futureIdeas: [
        "Incremental loads with Delta MERGE instead of full overwrites.",
        "A proper Dim_Date table for DAX time intelligence functions.",
        "CI/CD for deployments using GitHub Actions.",
        "HIPAA controls for real data, including Microsoft BAA and column-level encryption."
      ],
      powerbi: {
        url: "https://app.powerbi.com/reportEmbed?reportId=51d901a7-edba-4bc3-aa31-892cf50c6002&autoAuth=true&ctid=8daf98aa-8f0c-4908-9f64-8c35a67d3f62"
      },
      images: [
        { src: "/images/glp1/Executive Summary.jpg", caption: "Executive Summary" },
        { src: "/images/glp1/GLP-1 Drug Analysis.jpg", caption: "GLP-1 Drug Analysis" },
        { src: "/images/glp1/Provider Performance.jpg", caption: "Provider Performance" },
        { src: "/images/glp1/Clinical Outcomes.jpg", caption: "Clinical Outcomes" },
        { src: "/images/glp1/FabricWorkspace.jpg", caption: "Fabric Workspace" },
        { src: "/images/glp1/SemanticModel.jpg", caption: "Semantic Model" }
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
    image: "https://github.com/user-attachments/assets/9224d06a-fa03-4a8c-ba4b-d3c91aae1468",
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
    description: "Created dashboards using scraped customer data from LinkedIn and visualized company growth by industry type and location.",
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

function isCryptoProject(details: CryptoProjectDetails | TableauProjectDetails | TableauConsultingDetails | CognosProjectDetails | PowerBIProjectDetails): details is CryptoProjectDetails {
  return 'deployment' in details && 'links' in details;
}

function isTableauConsultingProject(details: CryptoProjectDetails | TableauProjectDetails | TableauConsultingDetails | CognosProjectDetails | PowerBIProjectDetails): details is TableauConsultingDetails {
  return 'dataInsights' in details || 'methodology' in details;
}

function isCognosProject(details: CryptoProjectDetails | TableauProjectDetails | TableauConsultingDetails | CognosProjectDetails | PowerBIProjectDetails): details is CognosProjectDetails {
  return 'reportStructure' in details && 'businessValue' in details;
}

function isPowerBIProject(details: CryptoProjectDetails | TableauProjectDetails | TableauConsultingDetails | CognosProjectDetails | PowerBIProjectDetails): details is PowerBIProjectDetails {
  return 'architecture' in details || 'powerbi' in details;
}

function TableauDashboard({ vizId, title }: { vizId: string; title: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [iframeHeight, setIframeHeight] = useState(800);

  // Set iframe height based on container width for responsiveness
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        // For mobile screens, use a taller aspect ratio
        // For narrow screens (mobile), use a taller aspect ratio to improve visibility
        const aspectRatio = width < 640 ? 1.5 : 0.75; // taller on mobile, wider on desktop
        setIframeHeight(width * aspectRatio);
      }
    };

    // Initial height calculation
    updateHeight();

    // Update height on window resize
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Handle different Tableau URL formats
  let iframeUrl;
  if (vizId.startsWith('http')) {
    // It's a full URL
    iframeUrl = vizId;
  } else if (vizId.includes('shared/')) {
    // Shared link format
    const sharedId = vizId.split('shared/')[1].split('?')[0];
    iframeUrl = `https://public.tableau.com/shared/${sharedId}?:embed=y&:showVizHome=no&:toolbar=yes&:display_count=yes`;
  } else if (vizId.includes('/')) {
    // Standard workbook/view format
    iframeUrl = `https://public.tableau.com/views/${vizId}?:showVizHome=no&:embed=true&:toolbar=yes&:display_count=yes&:showVizHome=no`;
  } else {
    // Just a viz ID without workbook - could be a story or dashboard
    iframeUrl = `https://public.tableau.com/shared/${vizId}?:embed=y&:showVizHome=no`;
  }

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError('Failed to load dashboard');
    setIsLoading(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    // Prevent scrolling on body when modal is open
    if (!isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Clean up body style when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-deep-navy/50 z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-cyan"></div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-deep-navy/50 z-10">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      <div ref={containerRef} className="w-full min-h-[400px] bg-deep-navy rounded-2xl p-4 border border-neon-cyan/20 hover-glow transition-all duration-300 relative">
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 z-20 bg-neon-cyan/90 text-deep-navy p-2 rounded-full hover:bg-neon-cyan transition-all duration-200"
          aria-label="Toggle fullscreen"
        >
          <Maximize size={16} />
        </button>

        <iframe
          src={iframeUrl}
          style={{ border: 'none', width: '100%', height: `${iframeHeight}px` }}
          title={title}
          onLoad={handleLoad}
          onError={handleError}
          allow="fullscreen"
        />
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="w-full h-full max-w-[98vw] max-h-[98vh] sm:max-w-[95vw] sm:max-h-[95vh] bg-deep-navy rounded-xl p-2 sm:p-4 relative">
            <button
              onClick={toggleFullscreen}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-neon-cyan/90 text-deep-navy p-2 rounded-full hover:bg-neon-cyan transition-all duration-200"
              aria-label="Close fullscreen"
            >
              <X size={20} />
            </button>

            <h2 className="text-white text-lg sm:text-xl mb-2 sm:mb-4 font-orbitron">{title}</h2>

            <div className="w-full h-[calc(100%-40px)] sm:h-[calc(100%-60px)]">
              <iframe
                src={iframeUrl}
                style={{ border: 'none', width: '100%', height: '100%' }}
                title={`${title} (Fullscreen)`}
                allow="fullscreen"
              />
              {isPowerBIProject(project.details) && (
                <>
                  {project.details.powerbi && (
                    <div className="mb-12">
                      <h2 className="font-orbitron text-2xl text-white mb-4">Interactive Dashboard</h2>
                      <div className="w-full bg-deep-navy/50 rounded-xl overflow-hidden border border-neon-cyan/20">
                        <iframe 
                          title="Power BI Dashboard" 
                          width="100%" 
                          height="800" 
                          src={project.details.powerbi.url} 
                          frameBorder="0" 
                          allowFullScreen={true}>
                        </iframe>
                      </div>
                    </div>
                  )}

                  {project.details.architecture && (
                    <div className="mb-12">
                      <h2 className="font-orbitron text-2xl text-white mb-4">{project.details.architecture.title}</h2>
                      <p className="text-gray-300 mb-4">{project.details.architecture.description}</p>
                      <div className="bg-deep-navy p-6 rounded-xl border border-neon-cyan/20">
                        <code className="text-neon-cyan block overflow-x-auto whitespace-pre">
                          {project.details.architecture.flow}
                        </code>
                      </div>
                    </div>
                  )}

                  {project.details.challenges && (
                    <div className="mb-12">
                      <h2 className="font-orbitron text-2xl text-white mb-4">Technical Challenges</h2>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {project.details.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.details.futureIdeas && (
                    <div className="mb-12">
                      <h2 className="font-orbitron text-2xl text-white mb-4">Future Production Enhancements</h2>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {project.details.futureIdeas.map((idea, index) => (
                          <li key={index}>{idea}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.details.images && project.details.images.length > 0 && (
                    <div className="mb-12">
                      <h2 className="font-orbitron text-2xl text-white mb-6">Project Artifacts & Visuals</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.details.images.map((img, index) => (
                          <div key={index} className="flex flex-col">
                            <img
                              src={img.src}
                              alt={img.caption}
                              className="w-full rounded-xl border border-neon-cyan/20 hover-glow transition-all duration-300 mb-2"
                            />
                            <p className="text-center text-neon-cyan font-orbitron text-sm">{img.caption}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialIcons = [
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/max-kimball/", label: "LinkedIn" },
    { icon: <Github size={24} />, href: "https://github.com/mkimball14", label: "GitHub" },
    { icon: <TableauIcon />, href: "https://public.tableau.com/app/profile/max.kimball14/vizzes", label: "Tableau" },
    { icon: <Mail size={24} />, href: "mailto:maxkimball14@gmail.com", label: "Email" }
  ];

  if (!project) {
    return (
      <div className="min-h-screen bg-charcoal py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-orbitron text-white">Project not found</h1>
          <Link to="/" className="text-neon-cyan hover:text-neon-cyan/80 mt-4 inline-block">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-deep-navy rounded-2xl card-glow overflow-hidden">
        <div className="p-8">
          <Link
            to="/"
            className="inline-flex items-center text-neon-cyan hover:text-neon-cyan/80 mb-6"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </Link>

          <h1 className="font-orbitron text-3xl font-bold text-white mb-2 glow-text">
            {project.title} | {project.subtitle}
          </h1>

          <div className="mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl border border-neon-cyan/20 hover-glow transition-all duration-300"
            />
          </div>

          {id === 'crypto-sentiment' && (
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <a
                href="https://github.com/mkimball14/MSDS_434_Final_Project/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-neon-cyan text-deep-navy px-8 py-3 rounded-full font-orbitron font-medium hover-glow transition-all duration-300"
              >
                <Github size={20} />
                View Source Code
              </a>
            </div>
          )}

          <div className="space-y-8">
            <div>
              <h2 className="font-orbitron text-2xl text-white mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.details.overview}
              </p>
            </div>

            {project.details.technologies && (
              <div>
                <h2 className="font-orbitron text-2xl text-white mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.details.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-deep-navy rounded-full border border-neon-cyan/20 text-neon-cyan text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.details.keyFeatures && (
              <div>
                <h2 className="font-orbitron text-2xl text-white mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.details.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {isCryptoProject(project.details) && (
              <>
                <div>
                  <h2 className="font-orbitron text-2xl text-white mb-4">Deployment</h2>
                  <p className="text-gray-300 mb-4">{project.details.deployment}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.details.links.predict}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-neon-cyan text-deep-navy px-8 py-3 rounded-full font-orbitron font-medium hover-glow transition-all duration-300"
                    >
                      Live Predict API
                    </a>
                    <a
                      href={project.details.links.forecast}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-neon-cyan text-deep-navy px-8 py-3 rounded-full font-orbitron font-medium hover-glow transition-all duration-300"
                    >
                      Live Forecast Chart
                    </a>
                  </div>
                </div>

                <div>
                  <h2 className="font-orbitron text-2xl text-white mb-4">Project Structure</h2>
                  <div className="bg-deep-navy/50 p-4 rounded-lg">
                    <pre className="text-gray-300 font-mono text-sm">
                      {project.details.projectStructure.join('\n')}
                    </pre>
                  </div>
                </div>

                <div>
                  <h2 className="font-orbitron text-2xl text-white mb-4">Course Information</h2>
                  <p className="text-gray-300"><span className="text-neon-cyan">Course:</span> {project.details.courseInfo.courseName}</p>
                  <p className="text-gray-300"><span className="text-neon-cyan">University:</span> {project.details.courseInfo.university}</p>
                  <p className="text-gray-300"><span className="text-neon-cyan">Term:</span> {project.details.courseInfo.term}</p>
                </div>

                <div>
                  <h2 className="font-orbitron text-2xl text-white mb-4">Setup Instructions</h2>
                  <ol className="list-decimal list-inside space-y-2 text-gray-300">
                    {project.details.setupInstructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h2 className="font-orbitron text-2xl text-white mb-4">AWS Infrastructure</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.details.awsDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-orbitron text-2xl text-white mb-4">Key Learnings</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.details.learnings.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-orbitron text-2xl text-white mb-4">Future Ideas</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.details.futureIdeas.map((idea, index) => (
                      <li key={index}>{idea}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-orbitron text-2xl text-white mb-4">Known Issues</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.details.knownIssues.map((issue, index) => (
                      <li key={index}>{issue}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {isCognosProject(project.details) && (project.details.pdfPath || project.details.promptPageImage) && (
              <>
                <div className="mb-12">
                  <h2 className="font-orbitron text-2xl text-white mb-4">Project Artifacts</h2>

                  {project.details.promptPageImage && (
                    <div className="mb-8">
                      <h3 className="font-orbitron text-xl text-white mb-3">Prompt Page Interface</h3>
                      <p className="text-gray-300 mb-4">
                        The prompt page allows users to filter reports by Fiscal Year, Department, and Award Type before generating the PDF.
                      </p>
                      <img
                        src={project.details.promptPageImage}
                        alt="Cognos Report Prompt Page"
                        className="w-full rounded-xl border border-neon-cyan/20 hover-glow transition-all duration-300"
                      />
                    </div>
                  )}

                  {project.details.pdfPath && (
                    <div className="bg-deep-navy/50 p-6 rounded-xl border border-neon-cyan/20">
                      <h3 className="font-orbitron text-xl text-white mb-3">Generated Report</h3>
                      <p className="text-gray-300 mb-6">
                        This project resulted in a comprehensive PDF report used by department heads for allocation tracking.
                        You can view the full sample report below.
                      </p>
                      <a
                        href={project.details.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-neon-cyan text-deep-navy px-8 py-3 rounded-full font-orbitron font-medium hover-glow transition-all duration-300"
                      >
                        <FileText className="w-5 h-5" />
                        View Full PDF Report
                      </a>
                    </div>
                  )}
                </div>
              </>
            )}

            {isCognosProject(project.details) && !project.details.pdfPath && !project.details.promptPageImage && (
              <>
                {/* No artifacts to display currently */}
              </>
            )}

            {isCognosProject(project.details) && (
              <>
                {project.details.reportStructure && (
                  <div>
                    <h2 className="font-orbitron text-2xl text-white mb-4">Report Structure</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {project.details.reportStructure.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.details.businessValue && (
                  <div>
                    <h2 className="font-orbitron text-2xl text-white mb-4">Business Value</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {project.details.businessValue.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.details.challenges && (
                  <div>
                    <h2 className="font-orbitron text-2xl text-white mb-4">Technical Challenges</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {project.details.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}

            {isTableauConsultingProject(project.details) && (
              <>
                {/* Dynamic Dashboard Rendering */}
                {project.details.dashboards?.map((dashboard, index) => (
                  <div key={index} className="mb-12">
                    <h2 className="font-orbitron text-2xl text-white mb-4">{dashboard.title}</h2>
                    <TableauDashboard vizId={dashboard.vizId} title={dashboard.title} />
                  </div>
                ))}

                {project.details.methodology && (
                  <div>
                    <h2 className="font-orbitron text-2xl text-white mb-4">Methodology</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {project.details.methodology.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.details.clientImpact && (
                  <div>
                    <h2 className="font-orbitron text-2xl text-white mb-4">Client Impact</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {project.details.clientImpact.map((impact, index) => (
                        <li key={index}>{impact}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.details.dataInsights && (
                  <div>
                    <h2 className="font-orbitron text-2xl text-white mb-4">Key Data Insights</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {project.details.dataInsights.map((insight, index) => (
                        <li key={index}>{insight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.details.challenges && (
                  <div>
                    <h2 className="font-orbitron text-2xl text-white mb-4">Challenges & Solutions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {project.details.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="neon-divider"></div>

        <footer className="py-8 px-6 text-center">
          <div className="flex justify-center gap-4 mb-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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