import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Database, Cloud, Cpu, Globe } from "lucide-react";

const journey = [
  { year: "2025", title: "Graduated from BMCC Pune", description: "Expertise in AI, Data Science, and Full-Stack Development" },
  { year: "2024", title: "Advanced LLM Projects", description: "Explored Large Language Models and advanced AI applications" },
  { year: "2023", title: "NLP & Computer Vision", description: "Developed chatbots, classifiers, and vision systems" },
  { year: "2022", title: "ML & DL Foundation", description: "Built strong foundations in Machine Learning and Deep Learning" },
  { year: "2020-21", title: "Programming Journey", description: "Started with Python, SQL, HTML, CSS, and JavaScript" },
];

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "PHP"], icon: Code2 },
  { category: "ML/AI", items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenAI"], icon: Brain },
  { category: "Data", items: ["Pandas", "NumPy", "Matplotlib", "EDA", "SQL"], icon: Database },
  { category: "Web", items: ["React", "Node.js", "Flask", "HTML/CSS", "REST APIs"], icon: Globe },
  { category: "Deep Learning", items: ["CNNs", "RNNs", "Transformers", "LLMs", "GANs"], icon: Cpu },
  { category: "Cloud & Tools", items: ["Git", "Docker", "XAMPP", "MongoDB", "MySQL"], icon: Cloud },
];

const funFacts = [
  "⚽ Competitive football player",
  "💻 Love building apps from scratch to deployment",
  "🧠 Passionate about ethical AI",
  "📚 Constant learner of new tech",
  "🌍 Enjoy collaborating on impactful projects",
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
            Turning Data into <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="section-subheading mx-auto">
            An aspiring AI Engineer passionate about building intelligent and user-focused digital solutions.
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
                I'm <span className="text-foreground font-semibold">Abbas Tati</span>, an aspiring{" "}
                <span className="text-primary">AI Engineer</span> and{" "}
                <span className="text-primary">Full-Stack Developer</span> with a strong passion for 
                building intelligent and user-focused digital solutions.
              </p>
              <p>
                I specialize in <span className="text-foreground">Machine Learning</span>,{" "}
                <span className="text-foreground">Deep Learning</span>,{" "}
                <span className="text-foreground">NLP</span>, and{" "}
                <span className="text-foreground">LLMs</span>. My goal is to design impactful 
                applications that make technology more accessible.
              </p>
              <p>
                Beyond tech, I'm a <span className="text-foreground">sports enthusiast</span> who 
                thrives in teamwork — a value I carry into every project I work on.
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
                  <span className="font-mono text-primary text-sm font-semibold">
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

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
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
