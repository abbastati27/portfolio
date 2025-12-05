import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Instagram, Facebook, Phone, MessageCircle, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "tati.abbu27@gmail.com",
    href: "mailto:tati.abbu27@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "abbas-tati",
    href: "https://www.linkedin.com/in/abbas-tati/",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "abbastati27",
    href: "https://github.com/abbastati27",
    color: "from-gray-700 to-gray-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 7976538046",
    href: "https://wa.me/917976538046",
    color: "from-green-600 to-green-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7976538046",
    href: "tel:+917976538046",
    color: "from-purple-600 to-purple-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@abbas______27",
    href: "https://www.instagram.com/abbas______27/",
    color: "from-pink-600 to-orange-400",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-background to-background" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subheading mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="contact-card group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`contact-card-icon bg-gradient-to-br ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">{method.label}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a
              href="mailto:tati.abbu27@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Me an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
