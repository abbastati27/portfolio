import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Database, Cloud, Cpu, Globe } from "lucide-react";

const journey = [
  {
    year: "2025",
    title: "AI/ML Engineer Internship at AppSynergies",
    description:
      "Built production-grade RAG systems, LLM workflows, AI voice agents, automations, and full AI pipelines.",
  },
  {
    year: "2025",
    title: "Graduated from BMCC Pune",
    description:
      "Strengthened expertise in Programming, Database Management, end-to-end Applications Development.",
  },
  {
    year: "2024",
    title: "Data Scientist Internship at Bharti Airtel Ltd.",
    description:
      "Worked on real-world data workflows, predictive modeling, and enterprise-level analytical tasks.",
  },
  {
    year: "2024",
    title: "Advanced LLM Projects",
    description:
      "Explored Large Language Models, RAG architectures, LangChain, and end-to-end AI applications.",
  },
  {
    year: "2023",
    title: "NLP & Computer Vision",
    description:
      "Developed chatbots, classification models, CNN systems, and image-processing applications.",
  },
  {
    year: "2022",
    title: "ML & DL Foundation",
    description:
      "Built strong foundations in Machine Learning, Deep Learning, Python, and applied AI concepts.",
  },
  {
    year: "2020-21",
    title: "Programming Journey Begins",
    description:
      "Started with Python, SQL, HTML, CSS, and JavaScript—forming the base for future AI development.",
  },
];

const experience = [
  {
    role: "AI/ML Engineer",
    company: "AppSynergies Technologies Ltd., London (Remote)",
    duration: "July 2025 – January 2026",
    details: [
      "Built complete RAG pipelines using Supabase Vector DB + LangChain + n8n for ingestion, embeddings, retrieval, and GPT-based answering.",
      "Designed Retell AI voice agents for appointments, consultancy workflows, support calls, and feedback systems.",
      "Integrated Retell AI with n8n, WhatsApp Cloud API, Email APIs, and Supabase automations.",
      "Developed an OCR Data Extractor using Streamlit + Python + LangChain, deployed on Render and automated via n8n.",
      "Built full-page scraping workflows in n8n integrated with LLMs and Supabase.",
      "Delivered end-to-end marketing automations using AI Calling + WhatsApp + Email + Supabase triggers.",
      "Created a complete AI Proposal Generator including logic, formatting, retrieval, and workflow testing.",
      "Contributed to research on Odoo, image-generation models, and workflow pricing systems.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Bharti Airtel Ltd., Gurugram",
    duration: "Feb 2024 – April 2024",
    details: [
      "Assisted in building an LLM-driven multi-agent framework to configure and analyze Prepaid, Postpaid, DTH, and bundled plans.",
      "Prepared plan-level datasets, performed cleaning, exploratory analysis, and supported model evaluations.",
      "Collaborated with senior engineers to integrate APIs for dynamic plan configuration and data retrieval.",
    ],
  },
];

const skills = [
  {
    category: "Programming Languages",
    items: [
      "Python",
      "C",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "PHP",
    ],
    icon: Code2,
  },
  {
    category: "Machine Learning & Deep Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "CNNs",
      "RNNs",
      "Seq2Seq Models",
      "Transformers",
      "LLMs",
      "NLP",
      "Prompt Engineering",
    ],
    icon: Brain,
  },
  {
    category: "RAG, LLM Systems & AI Pipelines",
    items: [
      "LangChain",
      "RAG Pipelines",
      "Supabase Vector DB",
      "Embedding Models",
      "OCR Processing",
      "LLM Workflow Design",
      "AI Proposal Generators",
      "Document Ingestion Pipelines",
    ],
    icon: Cpu,
  },
  {
    category: "Data Handling & Visualization",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "EDA",
      "Data Preprocessing",
      "Feature Engineering",
      "Web Scraping",
    ],
    icon: Database,
  },
  {
    category: "Web Development & Deployment",
    items: [
      "Flask",
      "Streamlit",
      "React",
      "Node.js",
      "AngularJS",
      "HTML/CSS/JavaScript",
      "REST APIs",
      "CORS",
      "XAMPP",
      "Render Deployment",
      "Tomcat",
    ],
    icon: Globe,
  },
  {
    category: "Tools, Platforms & Automation",
    items: [
      "Git",
      "Docker",
      "MySQL",
      "Supabase",
      "n8n",
      "Retell AI",
      "WhatsApp Cloud API",
      "Email API Automation",
      "Supabase Automations",
    ],
    icon: Cloud,
  },
];

const funFacts = [
  "⚽ Competitive football athlete with a passion for teamwork",
  "💡 Build AI systems from concept to deployment — end-to-end engineer",
  "🤖 Love experimenting with LLMs, RAG pipelines, and automation workflows",
  "🧠 Strong interest in human-centered, and ethical AI development",
  "📚 Constant learner exploring emerging models, tools, and technologies",
  "🚀 Enjoy transforming ideas into real, usable products",
  "🌍 Motivated by meaningful, high-impact projects that help people",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="section-heading">
            Turning Data into{" "}
            <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="section-subheading mx-auto">
            An aspiring AI/ML Engineer passionate about building intelligent and
            user-focused digital solutions.
          </p>
        </motion.div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm{" "}
                <span className="text-foreground font-semibold">
                  Abbas Tati
                </span>
                , an <span className="text-primary">AI/ML Engineer</span>{" "}
                dedicated to building intelligent, end-to-end systems that solve
                real-world problems with clarity, efficiency, and impact.
              </p>

              <p>
                I work across{" "}
                <span className="text-foreground">Machine Learning</span>,{" "}
                <span className="text-foreground">Deep Learning</span>,{" "}
                <span className="text-foreground">NLP</span>, and{" "}
                <span className="text-foreground">LLM-driven applications</span>
                , designing solutions that bridge the gap between advanced AI
                models and seamless user experiences. My focus is on creating
                practical, accessible, and production-ready AI products.
              </p>

              <p>
                Over the years, I've built a wide range of AI systems — from RAG
                pipelines and LLM workflows to computer vision applications,
                automation tools, and research-driven prototypes. I enjoy
                turning complex ideas into functional solutions that people can
                actually use.
              </p>

              <p>
                Beyond technology, I'm a{" "}
                <span className="text-foreground">
                  dedicated sports enthusiast
                </span>{" "}
                who values discipline, teamwork, and continuous improvement —
                qualities that influence how I learn, collaborate, and approach
                every project.
              </p>
            </div>

            {/* Fun facts */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-semibold mb-4">Quick Facts</h4>
              <ul className="space-y-2">
                {funFacts.map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-sm text-muted-foreground"
                  >
                    {fact}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="relative pl-8">
              <div className="timeline-line" />
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div className="timeline-dot" />
                  <span className="ml-3 font-mono text-primary text-sm font-semibold">
                    {item.year}
                  </span>
                  <h4 className="font-semibold mt-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Work Experience
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-card p-8"
              >
                <h4 className="text-xl font-semibold">{exp.role}</h4>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {exp.duration}
                </p>

                <ul className="space-y-2 text-muted-foreground">
                  {exp.details.map((point, i) => (
                    <li key={i} className="text-sm leading-relaxed">
                      • {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                    <skillGroup.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
