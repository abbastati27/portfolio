import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight, Info } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "AstroSense — AI Astrology Assistant",
    description:
      "An AI-powered astrology chatbot that intelligently detects user intent, validates required birth details, and delivers accurate astrology predictions via automated workflows.",
    fullDescription:
      "AstroSense is an AI-powered astrology chatbot built entirely using n8n automations. It dynamically identifies the user's astrology query intent (such as marriage, career, health, etc.), checks whether essential birth details are available, and smartly asks users for only the missing information. Once inputs are complete, the system automatically calls the relevant VedicAstroAPI endpoint, retrieves astrology insights, and passes them to a second LLM that generates precise, context-bound responses — ensuring accuracy, structure, and reliability throughout the conversation flow.",
    image:
      "https://www.nadiastrologyonline.com/img/vedic-astrology.jpg?w=600&q=80",
    tags: ["n8n", "Automation", "LLM", "API Integration"],
    github: "https://github.com/abbastati27",
    category: "AI/ML",
    features: [
      {
        icon: "🔍",
        title: "Intent Detection",
        description:
          "Identifies the type of astrology query and required inputs automatically.",
      },
      {
        icon: "🤖",
        title: "Smart Conversation Flow",
        description:
          "Requests missing user information dynamically to complete predictions.",
      },
      {
        icon: "🌐",
        title: "API Integration",
        description:
          "Fetches accurate astrology data using VedicAstroAPI through HTTP workflows.",
      },
      {
        icon: "🧠",
        title: "Dual-LLM Orchestration",
        description:
          "Uses one LLM for decision logic and another for final astrology responses.",
      },
    ],
    skills: [
      "n8n",
      "Automation Pipelines",
      "LLMs",
      "VedicAstroAPI",
      "Workflow Orchestration",
      "JSON Handling",
    ],
  },
  {
    title: "CareerPath AI",
    description:
      "An intelligent career counseling chatbot built using LLMs that guides students in identifying suitable career paths.",
    fullDescription:
      "CareerPathAI is an intelligent career counseling chatbot built using large language models (LLMs) that guides students in identifying suitable career paths based on their academic background, interests, and skill sets. The bot uses contextual reasoning and real-world examples to suggest courses, specializations, and career opportunities.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    tags: ["Python", "LangChain", "Streamlit", "LLM"],
    github: "https://github.com/abbastati27/careerpath-ai",
    category: "AI/ML",
    features: [
      {
        icon: "🧠",
        title: "LLM-Powered Counseling",
        description:
          "Natural language interaction using GPT-4 to provide personalized career guidance.",
      },
      {
        icon: "🎓",
        title: "Smart Recommendations",
        description:
          "Recommends career options, educational paths, and in-demand job roles with justifications.",
      },
      {
        icon: "🔍",
        title: "Course & Job Fetching",
        description:
          "Uses REST APIs to fetch relevant online courses or job listings.",
      },
      {
        icon: "📊",
        title: "Interactive UI",
        description:
          "Built using Streamlit to allow users to input their details and instantly receive suggestions.",
      },
    ],
    skills: ["Python", "LangChain", "Streamlit", "REST APIs", "GPT-4", "NLP"],
  },
  {
    title: "Coverly",
    description:
      "A Streamlit app that crafts professional cover letters using your resume and job description with AI-powered match scoring.",
    fullDescription:
      "Coverly is a Streamlit-based application that automatically crafts professional, customized cover letters using your resume and a job description. It also calculates a candidate-job match score with a concise AI-generated explanation. The app demonstrates end-to-end integration of document parsing, large language model prompts, and an interactive UI for instant cover letter generation.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    tags: ["Python", "Streamlit", "LLM", "NLP"],
    github: "https://github.com/abbastati27/coverly",
    category: "AI/ML",
    features: [
      {
        icon: "✍️",
        title: "Tailored Cover Letters",
        description:
          "Extracts key details from the resume and job posting to generate a polished, role-specific letter.",
      },
      {
        icon: "📊",
        title: "Match Scoring",
        description:
          "Provides a 0-100 candidate-job fit score along with a brief rationale.",
      },
      {
        icon: "📂",
        title: "Multi-format Input",
        description:
          "Accepts resumes in PDF, DOCX, or TXT and automatically parses the text.",
      },
      {
        icon: "⚡",
        title: "Instant Download",
        description:
          "One-click export of the final cover letter as a TXT file.",
      },
    ],
    skills: [
      "Python",
      "Streamlit",
      "OpenAI API",
      "pdfplumber",
      "python-docx",
      "Prompt Engineering",
      "NLP",
      "LLMs",
    ],
  },
  {
    title: "CricVision - IPL Predictor",
    description:
      "A web-based IPL match outcome prediction platform using historical statistics and real-time match data.",
    fullDescription:
      "CricVision is a web-based IPL match outcome prediction platform designed to forecast the winning probabilities of upcoming matches using historical statistics, current team form, pitch reports, weather conditions, and real-time match data. Built for cricket enthusiasts, it provides intuitive and reliable insights into each fixture.",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
    tags: ["Python", "Flask", "Data Analysis", "ML"],
    github: "https://github.com/abbastati27/cricvision",
    category: "AI/ML",
    features: [
      {
        icon: "🏏",
        title: "Dynamic Fixtures List",
        description:
          "Displays upcoming IPL matches in an easy-to-browse format.",
      },
      {
        icon: "📊",
        title: "Predictive Analytics",
        description:
          "Forecasts match-winning probabilities using data-driven models.",
      },
      {
        icon: "📋",
        title: "Insightful Analysis",
        description:
          "Considers historical records, team form, weather, and pitch reports.",
      },
      {
        icon: "📈",
        title: "Rich Visualizations",
        description:
          "Includes bar graphs, pie charts, and win percentage meters.",
      },
    ],
    skills: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Flask",
      "Web Scraping",
      "Data Visualization",
      "Machine Learning",
    ],
  },
  {
    title: "Seq2Seq Chatbot",
    description:
      "An AI-powered conversational chatbot built using Sequence-to-Sequence LSTM model for context-aware responses.",
    fullDescription:
      "Seq2Seq Chatbot is an AI-powered conversational chatbot built using a Sequence-to-Sequence (Seq2Seq) LSTM model, capable of generating context-aware, human-like responses. The project demonstrates the implementation of Encoder–Decoder architecture for handling sequential text data, combined with advanced NLP preprocessing for optimal vocabulary and context handling.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
    tags: ["Deep Learning", "NLP", "LSTM", "TensorFlow"],
    github: "https://github.com/abbastati27/Seq2Seq-chatbot.git",
    category: "Deep Learning",
    features: [
      {
        icon: "🧠",
        title: "Seq2Seq with LSTM",
        description:
          "Implemented Encoder–Decoder architecture with LSTM layers to process and generate sequential text.",
      },
      {
        icon: "💬",
        title: "Context-Aware Responses",
        description:
          "Trained the model to understand user queries and generate relevant replies.",
      },
      {
        icon: "🔑",
        title: "Separate Tokenizers",
        description:
          "Used dedicated tokenizers for inputs and outputs to improve performance.",
      },
      {
        icon: "🌐",
        title: "Interactive Deployment",
        description: "Integrated with Streamlit for a user-friendly interface.",
      },
    ],
    skills: [
      "NLP",
      "Deep Learning",
      "LSTM",
      "Seq2Seq Architecture",
      "TensorFlow",
      "Keras",
      "Streamlit",
      "Data Preprocessing",
    ],
  },
  {
    title: "Celebrity Image Classifier",
    description:
      "A machine learning web app that identifies celebrities from images using face detection and wavelet-based feature extraction.",
    fullDescription:
      "Celebrity Classifier is a machine learning-based web application that identifies celebrities from images using face detection and wavelet-based feature extraction. Built with Flask and OpenCV, it delivers accurate classification results in an easy-to-use interface. The system detects faces in uploaded images, extracts distinctive features using wavelet transforms, and classifies the celebrity using a pre-trained machine learning model.",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&q=80",
    tags: ["CNN", "Computer Vision", "Flask", "OpenCV"],
    github: "https://github.com/abbastati27/Celebrity-Classifier.git",
    category: "Deep Learning",
    features: [
      {
        icon: "🖼️",
        title: "Image Classification",
        description:
          "Predicts celebrity identities by detecting faces and applying wavelet transformations for enhanced feature extraction.",
      },
      {
        icon: "👀",
        title: "Face & Eye Detection",
        description:
          "Uses Haar cascade classifiers to detect facial regions and eyes for precise cropping and analysis.",
      },
      {
        icon: "🌊",
        title: "Wavelet Transform",
        description:
          "Highlights high-frequency image features such as edges, improving model accuracy.",
      },
      {
        icon: "🔗",
        title: "API Integration",
        description:
          "RESTful API built with Flask for classifying base64-encoded images.",
      },
    ],
    skills: [
      "Python",
      "Flask",
      "OpenCV",
      "Wavelet Transformation",
      "Haar Cascade Classifiers",
      "REST APIs",
      "Machine Learning",
      "Feature Extraction",
    ],
  },
  {
    title: "Plant Disease Classifier",
    description:
      "A deep learning web application designed to identify plant diseases from crop images using CNN.",
    fullDescription:
      "Plant Disease Classification is a deep learning-based web application designed to identify plant diseases from crop images, helping farmers and agricultural enthusiasts take early action to protect yields. The system allows users to upload plant images, then processes them through a trained convolutional neural network (CNN) built with TensorFlow and Keras to predict the presence of diseases.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    tags: ["CNN", "TensorFlow", "Keras", "Flask"],
    github: "https://github.com/abbastati27/Plant-Disease-Classifier.git",
    category: "Deep Learning",
    features: [
      {
        icon: "🌱",
        title: "Image Upload & Classification",
        description:
          "Users can upload plant images for instant disease detection.",
      },
      {
        icon: "📊",
        title: "Confidence Scores",
        description:
          "Displays prediction probabilities for better diagnosis accuracy.",
      },
      {
        icon: "🧠",
        title: "Deep Learning Model",
        description:
          "Built using TensorFlow and Keras with CNN architecture for high accuracy.",
      },
      {
        icon: "🌐",
        title: "Web Deployment",
        description:
          "Integrated into a Flask application for accessibility and ease of use.",
      },
    ],
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "Flask",
      "NumPy",
      "Computer Vision",
      "CNN",
    ],
  },
  {
    title: "Bengaluru House Price Prediction",
    description:
      "A machine learning web application that estimates property prices in Bangalore using key features.",
    fullDescription:
      "Bangalore Home Price Prediction is a machine learning-based web application that estimates property prices in Bangalore using key features such as location, size, and the number of bedrooms and bathrooms. The project uses a Linear Regression model trained on historical real estate data to provide accurate price predictions in Indian Rupees (INR).",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    tags: ["Python", "Scikit-learn", "Flask", "ML"],
    github: "https://github.com/abbastati27/Bangluru-Price-Prediction.git",
    category: "AI/ML",
    features: [
      {
        icon: "📍",
        title: "Location-Based Prediction",
        description:
          "Select a location and enter property details for tailored price estimates.",
      },
      {
        icon: "🏠",
        title: "Custom Inputs",
        description:
          "Enter size, number of bedrooms, and bathrooms for accurate results.",
      },
      {
        icon: "⚡",
        title: "Real-Time Output",
        description:
          "Instantly predicts property prices based on trained ML models.",
      },
      {
        icon: "🌐",
        title: "Interactive Web App",
        description:
          "Built with HTML, CSS, and Bootstrap for a clean and responsive UI.",
      },
    ],
    skills: [
      "Machine Learning",
      "Linear Regression",
      "Python",
      "Flask",
      "Scikit-learn",
      "HTML",
      "CSS",
      "Bootstrap",
      "Data Preprocessing",
    ],
  },
  {
    title: "BlessedAid",
    description:
      "A centralized platform connecting individuals with NGOs, focusing on transparency and accessibility in social causes.",
    fullDescription:
      "BlessedAid is a centralized platform connecting individuals with NGOs, focusing on transparency, trust, and accessibility in social causes. It enables secure donations, crowdfunding participation, event ticketing, and drive registrations — all in one place. The platform ensures transparency in donation tracking and campaign progress, fostering trust and encouraging active engagement.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
    tags: ["Full-Stack", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/haiderdawasaz/BlessedAid.git",
    category: "Web Development",
    features: [
      {
        icon: "💳",
        title: "Secure Donations",
        description:
          "Integrated payment gateway for quick and safe transactions.",
      },
      {
        icon: "📅",
        title: "Event & Drive Management",
        description: "NGOs can create, manage, and track events and drives.",
      },
      {
        icon: "🔍",
        title: "Searchable NGO Directory",
        description: "Find NGOs based on causes, locations, or campaigns.",
      },
      {
        icon: "📊",
        title: "Donation Tracking Dashboards",
        description: "Transparent records for donors and NGOs.",
      },
    ],
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL", "XAMPP"],
  },
  {
    title: "TicketBookKaro",
    description:
      "An online movie ticket booking platform designed for quick, seamless, and hassle-free reservations.",
    fullDescription:
      "TicketBookKaro.com is an online movie ticket booking platform designed for quick, seamless, and hassle-free reservations. With just a few clicks, users can secure seats for the latest releases while staying updated on show timings and seat availability. The platform ensures a smooth booking experience with multiple payment options and instant booking confirmations.",
    image:
      "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=600&q=80",
    tags: ["AngularJS", "AJAX", "JavaScript", "UI/UX"],
    github: "https://github.com/abbastati27/ticketbookkaro",
    category: "Web Development",
    features: [
      {
        icon: "🎬",
        title: "Seamless Booking",
        description:
          "Reserve seats for your favorite movies with just a few clicks.",
      },
      {
        icon: "🕒",
        title: "Live Show Updates",
        description: "Real-time show timings and seating availability.",
      },
      {
        icon: "💳",
        title: "Multiple Payment Options",
        description: "Convenient and secure checkout process.",
      },
      {
        icon: "📽️",
        title: "Movie Details & Trailers",
        description:
          "Access detailed movie information to make informed choices.",
      },
    ],
    skills: ["AngularJS", "AJAX", "JavaScript", "HTML", "CSS"],
  },
];

const categories = ["All", "AI/ML", "Deep Learning", "Web Development"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            A showcase of my work in AI, Machine Learning, and Full-Stack
            Development
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="project-card group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
                  {project.category}
                </span>

                {/* View details overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-lg bg-background/90 backdrop-blur-sm text-sm font-medium flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    View Details
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors ml-auto"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline inline-flex items-center gap-2"
            >
              {showAll ? "Show Less" : "View All Projects"}
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  showAll ? "rotate-90" : ""
                }`}
              />
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
