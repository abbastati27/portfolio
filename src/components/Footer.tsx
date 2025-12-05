import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/abbastati27", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abbas-tati/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/abbas______27/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/abbas.tati.7", label: "Facebook" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10 border border-primary/30">
                <span className="font-mono font-bold text-primary text-sm">AT</span>
              </div>
              <span className="font-semibold">Abbas Tati</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI Engineer & Full-Stack Developer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Made by Abbas Tati
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
