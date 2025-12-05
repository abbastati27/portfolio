import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Eye, MessageSquare, Globe, Sparkles } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Science",
    description: "I provide data science services such as data analysis, machine learning model building, and data visualization to help you extract valuable insights from your data and make data-driven decisions.",
    technologies: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "I build intelligent systems with machine learning algorithms. From model training to deployment, I help create solutions for classification, regression, and recommendation tasks.",
    technologies: ["Scikit-learn", "XGBoost", "Random Forest", "SVM", "Regression"],
  },
  {
    icon: Sparkles,
    title: "Deep Learning",
    description: "I design and train deep neural networks for tasks such as image recognition, natural language understanding, and predictive analytics using state-of-the-art architectures.",
    technologies: ["TensorFlow", "Keras", "PyTorch", "CNNs", "Transformers"],
  },
  {
    icon: MessageSquare,
    title: "NLP & LLM Solutions",
    description: "I develop advanced Natural Language Processing applications, including sentiment analysis, text summarization, and conversational AI systems using Large Language Models.",
    technologies: ["GPT", "BERT", "Langchain", "Hugging Face", "RAG"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "I build computer vision solutions for object detection, image classification, and OCR, enabling automation and intelligent visual understanding for your projects.",
    technologies: ["OpenCV", "YOLO", "ResNet", "Image Segmentation", "OCR"],
  },
  {
    icon: Globe,
    title: "Full-Stack Development",
    description: "I design and build complete web applications from scratch, covering both front-end user experience and back-end server logic with modern, scalable solutions.",
    technologies: ["React", "Node.js", "Flask", "MongoDB", "REST APIs"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="section-container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="section-heading">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-subheading mx-auto">
            Comprehensive AI and development services to bring your ideas to life
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="service-card group"
            >
              <div className="service-card-icon group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Have a project in mind? Let's work together!
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
