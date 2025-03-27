import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Github, Linkedin, Mail, ArrowLeft } from 'lucide-react';

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

interface TableauProjectDetails extends BaseProjectDetails {}

interface TableauConsultingDetails extends TableauProjectDetails {
  methodology?: string[];
  clientImpact?: string[];
  challenges?: string[];
  dataInsights?: string[];
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: CryptoProjectDetails | TableauProjectDetails | TableauConsultingDetails;
}

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

const projects: Project[] = [
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
    id: "tableau-layoffs",
    title: "TABLEAU",
    subtitle: "U.S. Tech Layoffs",
    description: "Dynamic analysis of tech layoffs in the US during Jan 2022 - Jan 2023.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200",
    details: {
      overview: "Created an interactive dashboard to analyze and visualize the impact of layoffs in the tech industry.",
      technologies: ["Tableau", "Data Analysis", "Data Visualization"],
      keyFeatures: [
        "Interactive filters",
        "Industry breakdown",
        "Temporal analysis",
        "Company comparisons"
      ]
    }
  },
  {
    id: "marketing-dashboard",
    title: "TABLEAU",
    subtitle: "Marketing Dashboard",
    description: "Developed a summary of company account activity.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200",
    details: {
      overview: "Created a comprehensive marketing analytics dashboard to track and analyze account activity.",
      technologies: ["Tableau", "Marketing Analytics", "Data Visualization"],
      keyFeatures: [
        "Account activity tracking",
        "Performance metrics",
        "Trend analysis",
        "ROI calculations"
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
      ]
    }
  }
];

function isCryptoProject(details: CryptoProjectDetails | TableauProjectDetails | TableauConsultingDetails): details is CryptoProjectDetails {
  return 'deployment' in details && 'links' in details;
}

function isTableauConsultingProject(details: CryptoProjectDetails | TableauProjectDetails | TableauConsultingDetails): details is TableauConsultingDetails {
  return 'dataInsights' in details || 'methodology' in details;
}

function TableauDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    
    // Add the script to the document
    document.body.appendChild(script);
    
    // Setup the Tableau visualization after the script loads
    script.onload = () => {
      if (containerRef.current) {
        const vizElement = containerRef.current.querySelector('.tableauViz') as HTMLElement;
        
        if (vizElement) {
          const width = containerRef.current.offsetWidth;
          
          // Set responsive styles
          if (width > 800) {
            vizElement.style.width = '100%';
            vizElement.style.height = '800px';
          } else if (width > 500) {
            vizElement.style.width = '100%';
            vizElement.style.height = '700px';
          } else {
            vizElement.style.width = '100%';
            vizElement.style.height = '600px';
          }
        }
      }
    };
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="rounded-xl overflow-hidden border border-neon-cyan/20 hover-glow transition-all duration-300">
      <div className='tableauPlaceholder' id='viz1743042347348' style={{position: 'relative', width: '100%', height: '800px'}}>
        <noscript>
          <a href='#'>
            <img alt='Industry Distribution Dashboard' src='https://public.tableau.com/static/images/YC/YC4JKYG3S/1_rss.png' style={{border: 'none'}} />
          </a>
        </noscript>
        <object className='tableauViz' style={{display:'none'}}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='path' value='shared&#47;YC4JKYG3S' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;YC&#47;YC4JKYG3S&#47;1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>
    </div>
  );
}

function TableauABTestingDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    
    // Add the script to the document
    document.body.appendChild(script);
    
    // Setup the Tableau visualization after the script loads
    script.onload = () => {
      if (containerRef.current) {
        const vizElement = containerRef.current.querySelector('.tableauViz') as HTMLElement;
        
        if (vizElement) {
          const width = containerRef.current.offsetWidth;
          
          // Set responsive styles
          if (width > 800) {
            vizElement.style.width = '100%';
            vizElement.style.height = '800px';
          } else if (width > 500) {
            vizElement.style.width = '100%';
            vizElement.style.height = '700px';
          } else {
            vizElement.style.width = '100%';
            vizElement.style.height = '600px';
          }
        }
      }
    };
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="rounded-xl overflow-hidden border border-neon-cyan/20 hover-glow transition-all duration-300">
      <div className='tableauPlaceholder' id='viz1743042548360' style={{position: 'relative', width: '100%', height: '800px'}}>
        <noscript>
          <a href='#'>
            <img alt='A/B Testing Dashboard' src='https://public.tableau.com/static/images/JH/JHWYCNGQH/1_rss.png' style={{border: 'none'}} />
          </a>
        </noscript>
        <object className='tableauViz' style={{display:'none'}}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='path' value='shared&#47;JHWYCNGQH' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;JH&#47;JHWYCNGQH&#47;1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>
    </div>
  );
}

function TableauPerformanceDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    
    // Add the script to the document
    document.body.appendChild(script);
    
    // Setup the Tableau visualization after the script loads
    script.onload = () => {
      if (containerRef.current) {
        const vizElement = containerRef.current.querySelector('.tableauViz') as HTMLElement;
        
        if (vizElement) {
          const width = containerRef.current.offsetWidth;
          
          // Set responsive styles
          if (width > 800) {
            vizElement.style.width = '100%';
            vizElement.style.height = '800px';
          } else if (width > 500) {
            vizElement.style.width = '100%';
            vizElement.style.height = '700px';
          } else {
            vizElement.style.width = '100%';
            vizElement.style.height = '600px';
          }
        }
      }
    };
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="rounded-xl overflow-hidden border border-neon-cyan/20 hover-glow transition-all duration-300">
      <div className='tableauPlaceholder' id='viz1743042780677' style={{position: 'relative', width: '100%', height: '800px'}}>
        <noscript>
          <a href='#'>
            <img alt='Performance Dashboard' src='https://public.tableau.com/static/images/HB/HB3388M57/1_rss.png' style={{border: 'none'}} />
          </a>
        </noscript>
        <object className='tableauViz' style={{display:'none'}}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='path' value='shared&#47;HB3388M57' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;HB&#47;HB3388M57&#47;1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>
    </div>
  );
}

function TableauGrowthDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    
    // Add the script to the document
    document.body.appendChild(script);
    
    // Setup the Tableau visualization after the script loads
    script.onload = () => {
      if (containerRef.current) {
        const vizElement = containerRef.current.querySelector('.tableauViz') as HTMLElement;
        
        if (vizElement) {
          const width = containerRef.current.offsetWidth;
          vizElement.style.width = '100%';
          vizElement.style.height = `${width * 0.75}px`;
        }
      }
    };
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="rounded-xl overflow-hidden border border-neon-cyan/20 hover-glow transition-all duration-300">
      <div className='tableauPlaceholder' id='viz1743042898126' style={{position: 'relative', width: '100%', height: '600px'}}>
        <noscript>
          <a href='#'>
            <img alt='Growth Trends Dashboard' src='https://public.tableau.com/static/images/NR/NRF6X4RTN/1_rss.png' style={{border: 'none'}} />
          </a>
        </noscript>
        <object className='tableauViz' style={{display:'none'}}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='path' value='shared&#47;NRF6X4RTN' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;NR&#47;NRF6X4RTN&#47;1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>
    </div>
  );
}

function TableauStoryDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    
    // Add the script to the document
    document.body.appendChild(script);
    
    // Setup the Tableau visualization after the script loads
    script.onload = () => {
      if (containerRef.current) {
        const vizElement = containerRef.current.querySelector('.tableauViz') as HTMLElement;
        
        if (vizElement) {
          vizElement.style.width = '100%';
          vizElement.style.height = '800px';
        }
      }
    };
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="rounded-xl overflow-hidden border border-neon-cyan/20 hover-glow transition-all duration-300">
      <div className='tableauPlaceholder' id='viz1743043021491' style={{position: 'relative', width: '100%', height: '800px'}}>
        <noscript>
          <a href='#'>
            <img alt='Project Story Dashboard' src='https://public.tableau.com/static/images/RC/RCCTPFX9H/1_rss.png' style={{border: 'none'}} />
          </a>
        </noscript>
        <object className='tableauViz' style={{display:'none'}}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='path' value='shared&#47;RCCTPFX9H' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;RC&#47;RCCTPFX9H&#47;1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>
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
      <div className="max-w-4xl mx-auto bg-deep-navy rounded-2xl card-glow overflow-hidden">
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
            
            {isTableauConsultingProject(project.details) && (
              <>
                <div className="mb-12">
                  <h2 className="font-orbitron text-2xl text-white mb-4">Open/Click Rate Dashboard</h2>
                  <TableauDashboard />
                </div>
                
                <div className="mb-12">
                  <h2 className="font-orbitron text-2xl text-white mb-4">Unsubscribe Rate Dashboard</h2>
                  <TableauABTestingDashboard />
                </div>
                
                <div className="mb-12">
                  <h2 className="font-orbitron text-2xl text-white mb-4">Opens/Clicks by Region</h2>
                  <TableauPerformanceDashboard />
                </div>
                
                <div className="mb-12">
                  <h2 className="font-orbitron text-2xl text-white mb-4">Company Growth Details</h2>
                  <TableauGrowthDashboard />
                </div>
                
                <div className="mb-12">
                  <h2 className="font-orbitron text-2xl text-white mb-4">Industry Distribution Dashboard</h2>
                  <TableauStoryDashboard />
                </div>
                
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