import { motion } from "framer-motion";
import { Grid3X3, CheckCircle, Target, Layers, ArrowRight, BookOpen, BarChart3, Award } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const keyComponents = [
  {
    icon: <Grid3X3 className="w-5 h-5" />,
    title: "Competency Identification",
    description: "Define the core competencies that drive success in each role and level.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Proficiency Levels",
    description: "Establish clear proficiency indicators from foundational to mastery.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Role Mapping",
    description: "Align competencies to specific roles, functions, and career paths.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Assessment Integration",
    description: "Connect frameworks to hiring, development, and succession planning.",
  },
];

const outcomes = [
  "Clear, objective criteria for talent decisions across the organization",
  "Consistent language for performance conversations and feedback",
  "Targeted development plans based on competency gaps",
  "Strategic workforce planning aligned to future skill needs",
  "Enhanced employee engagement through transparent career pathways",
];

const process = [
  {
    step: "01",
    title: "Analysis",
    description: "We study your strategic priorities, job families, and current talent practices to identify critical competencies.",
  },
  {
    step: "02",
    title: "Design",
    description: "We develop a comprehensive framework with competency definitions, behavioral indicators, and proficiency levels.",
  },
  {
    step: "03",
    title: "Validate",
    description: "We test the framework with stakeholders and refine based on feedback to ensure practical applicability.",
  },
  {
    step: "04",
    title: "Implement",
    description: "We integrate the framework into your HR systems and train managers on effective application.",
  },
];

const CompetencyFramework = () => {
  return (
    <ServiceLayout
      badge="Talent Assessment"
      title="Competency Framework"
      subtitle="Building a structured foundation of skills and behaviours that define excellence across your organization."
    >
      {/* Overview Section */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Overview
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Define What Excellence Looks Like
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Competency Framework provides the blueprint for talent success. We help organizations identify, define, and operationalize the competencies that differentiate high performers and drive business outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From technical skills to leadership capabilities, our frameworks create a common language for hiring, development, performance management, and career progression.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {keyComponents.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-card rounded-xl border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section - Dark */}
      <div className="-mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 py-20 bg-[#1f2d36] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
        />
        <div className="relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-blue-400 font-medium text-sm uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Building Your Competency Framework
            </h3>
            <p className="text-white/70">
              A rigorous, research-backed approach that ensures your framework is both aspirational and achievable.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <span className="text-5xl font-serif font-bold text-white/10 absolute top-4 right-4">
                  {item.step}
                </span>
                <h4 className="font-semibold text-white text-lg mb-3">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Outcomes Section */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Expected Outcomes
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              What You Can Expect
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Organizations with well-designed competency frameworks make better talent decisions and accelerate employee development.
            </p>
            <ul className="space-y-4">
              {outcomes.map((outcome, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
              <h4 className="font-serif text-2xl font-bold text-foreground mb-4">
                Ready to Build Your Competency Framework?
              </h4>
              <p className="text-muted-foreground mb-6">
                Let's discuss how a tailored framework can transform your talent practices.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </ServiceLayout>
  );
};

export default CompetencyFramework;