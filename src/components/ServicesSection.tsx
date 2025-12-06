import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Eye, MessageSquare, Globe, Sparkles } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Science & Analytics",
    description:
      "I perform end-to-end data analysis, preprocessing, feature engineering, and model evaluation to extract actionable insights. My focus is on turning raw data into meaningful intelligence that supports real-world decision-making.",
    technologies: ["Pandas", "NumPy", "Matplotlib", "EDA", "Feature Engineering"],
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description:
      "I build and deploy machine learning models for classification, regression, forecasting, and decision systems. From data preparation to production deployment, I create reliable ML pipelines tailored to specific problem statements.",
    technologies: ["Scikit-learn", "Regression Models", "Classification Models", "Model Deployment"],
  },
  {
    icon: Sparkles,
    title: "Deep Learning & Neural Networks",
    description:
      "I design and train deep learning models including CNNs, RNNs, Seq2Seq architectures, and Transformer-based systems. I work extensively on image, text, and sequence modeling for high-impact AI applications.",
    technologies: ["TensorFlow", "Keras", "PyTorch", "CNNs", "Seq2Seq", "Transformers"],
  },
  {
    icon: MessageSquare,
    title: "NLP & LLM Engineering",
    description:
      "I build NLP and LLM-powered applications including chatbots, text-generation tools, semantic search, summarization systems, and AI-driven automation. I specialize in RAG pipelines, LangChain workflows, and production-ready LLM integrations.",
    technologies: ["GPT", "LangChain", "Supabase Vector DB", "RAG", "LLMs"],
  },
  {
    icon: Eye,
    title: "Computer Vision & OCR",
    description:
      "I create computer vision solutions for image classification, face detection, wavelet-based feature extraction, and OCR-driven data pipelines. These systems help automate visual understanding and real-time decision-making.",
    technologies: ["OpenCV", "Haar Cascades", "Wavelet Transform", "CNNs", "OCR"],
  },
  {
    icon: Globe,
    title: "AI Applications & Automation",
    description:
      "I develop complete AI-powered applications using Flask, Streamlit, and workflow platforms like n8n. I also build Retell AI voice agents, automated pipelines, WhatsApp integrations, email workflows, and production-ready AI tools.",
    technologies: ["Flask", "Streamlit", "n8n", "Retell AI", "Supabase", "REST APIs"],
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
