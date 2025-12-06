import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react"; // ✅ FIXED: added useState import
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Phone,
  MessageCircle,
  Send,
} from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ FIXED: Hooks must be inside the component
  const [toastMessage, setToastMessage] = useState("");
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2000);
  };

  // ✅ FIXED: contactMethods moved inside so showToast can be used
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "tati.abbu27@gmail.com",
      action: () => {
        navigator.clipboard.writeText("tati.abbu27@gmail.com");
        showToast("Email copied to clipboard!");
      },
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
      action: () => {
        navigator.clipboard.writeText("+917976538046");
        showToast("Phone number copied to clipboard!");
      },
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

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-background to-background" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
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
            Have a project in mind or just want to say hello? I'd love to hear
            from you!
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => {
            const isLink = Boolean(method.href);

            return (
              <motion.div
                key={method.label}
                onClick={() => {
                  if (isLink) {
                    window.open(method.href, "_blank");
                  } else if (method.action) {
                    method.action();
                  }
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="contact-card group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className={`contact-card-icon bg-gradient-to-br ${method.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{method.label}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {method.value}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Let's Connect
            </button>
          </div>
        </motion.div>

        {/* Toast */}
        {toastMessage && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="px-4 py-2 bg-primary text-white rounded-lg shadow-lg text-center"
            >
              {toastMessage}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
