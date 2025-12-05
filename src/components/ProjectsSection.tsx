import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "CareerPath AI",
    description: "A career recommendation system using AI to suggest personalized career paths based on skills, interests, and job market data.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    tags: ["Python", "Machine Learning", "AI", "Recommendation System"],
    github: "https://github.com/abbastati27/careerpath-ai",
    category: "AI/ML",
  },
  {
    title: "Coverly",
    description: "A Streamlit web app that generates tailored cover letters from a resume and job description, with AI-powered match scoring.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    tags: ["Python", "Streamlit", "LLM", "NLP"],
    github: "https://github.com/abbastati27/coverly",
    category: "AI/ML",
  },
  {
    title: "CricVision - IPL Predictor",
    description: "A machine learning model predicting IPL cricket match outcomes using historical data, player performance, and team stats.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
    tags: ["Python", "ML", "Data Analysis", "Sports Analytics"],
    github: "https://github.com/abbastati27/cricvision",
    category: "AI/ML",
  },
  {
    title: "Seq2Seq Chatbot",
    description: "An AI-powered chatbot built using a sequence-to-sequence deep learning model. Capable of engaging in natural language conversations.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
    tags: ["Deep Learning", "NLP", "RNN", "TensorFlow"],
    github: "https://github.com/abbastati27/Seq2Seq-chatbot.git",
    category: "Deep Learning",
  },
  {
    title: "Celebrity Image Classifier",
    description: "A convolutional neural network model that classifies images of celebrities. Demonstrates deep learning-based image classification.",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&q=80",
    tags: ["CNN", "Computer Vision", "TensorFlow", "Keras"],
    github: "https://github.com/abbastati27/Celebrity-Classifier.git",
    category: "Deep Learning",
  },
  {
    title: "Plant Disease Classifier",
    description: "Uses deep learning with TensorFlow and Keras to classify plant diseases from leaf images. Trained on the PlantVillage dataset.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    tags: ["CNN", "TensorFlow", "Keras", "Agriculture AI"],
    github: "https://github.com/abbastati27/Plant-Disease-Classifier.git",
    category: "Deep Learning",
  },
  {
    title: "Bengaluru House Price Prediction",
    description: "A machine learning model to predict house prices in Bengaluru using regression techniques and real estate datasets.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    tags: ["Python", "Scikit-learn", "Regression", "Data Science"],
    github: "https://github.com/abbastati27/Bangluru-Price-Prediction.git",
    category: "AI/ML",
  },
  {
    title: "BlessedAid",
    description: "A charitable donation platform connecting donors with verified NGOs. Users can contribute and track donation impact.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
    tags: ["Full-Stack", "PHP", "MySQL", "Web Development"],
    github: "https://github.com/haiderdawasaz/BlessedAid.git",
    category: "Web Development",
  },
  {
    title: "TicketBookKaro",
    description: "An online ticket booking platform enabling users to search, compare, and book tickets with responsive UI and secure payments.",
    image: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=600&q=80",
    tags: ["Full-Stack", "JavaScript", "Payment Integration", "UI/UX"],
    github: "https://github.com/abbastati27/ticketbookkaro",
    category: "Web Development",
  },
];

const categories = ["All", "AI/ML", "Deep Learning", "Web Development"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

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
            Portfolio
          </span>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            A showcase of my work in AI, Machine Learning, and Full-Stack Development
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
              className="project-card"
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
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors ml-auto"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
              <ChevronRight className={`w-4 h-4 transition-transform ${showAll ? "rotate-90" : ""}`} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
