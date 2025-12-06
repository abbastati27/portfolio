import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  github: string;
  category: string;
  features: ProjectFeature[];
  skills: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
          >
            <div className="relative h-full bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Header image */}
                <div className="relative h-48 md:h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 space-y-8">
                  {/* Description */}
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-primary" />
                      Key Features
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-xl">{feature.icon}</span>
                            <div>
                              <h4 className="font-medium text-foreground mb-1">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-primary" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-sm text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Source Code
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
