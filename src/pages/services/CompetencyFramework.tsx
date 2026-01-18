import { motion } from "framer-motion";
import { Grid3X3, CheckCircle, Target, Layers, ArrowRight, BookOpen, BarChart3, Award, FileText, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const plans = [
  {
    name: "Plan A",
    subtitle: "Athivee Library",
    description: "Ideal when you need a quick, validated and industry-recommended competency model.",
    features: [
      "Vision-driven interview with leadership",
      "Discussion with stakeholders and incumbent interviews",
      "Relevant competencies based on job description",
      "Competencies selected from Athivee's validated library",
    ],
    highlight: false,
  },
  {
    name: "Plan B",
    subtitle: "Athivee Own-to-Own",
    description: "A deeper and fully customised engagement designed exclusively for your organisation.",
    features: [
      "Vision-driven interviews with leadership",
      "Focus group discussions with stakeholders",
      "Incumbent interviews and culture/value diagnosis",
      "Unique organisation-specific competency framework",
    ],
    highlight: true,
  },
  {
    name: "Plan C",
    subtitle: "Athivee Expertise",
    description: "Best when you need to analyse inputs given by leadership (KRAs, JDs, AIOs).",
    features: [
      "Analysis of identified gaps and development needs",
      "Definition and indicators for all competencies",
      "Proficiency levels for all roles in departments",
      "Assessment methodology recommendations",
    ],
    highlight: false,
  },
];

const deliverables = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Competency Definition",
    description: "A base individual indicator identifies specific behaviours which aspects of competence are observable, measurable, and transferable.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Proficiency Levels",
    description: "Proficiency level describes the development performance expectation for each role and critical success indicators.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Mapping & Indicators",
    description: "Competencies mapped to all roles with proficiency levels, enabling assessment across talent initiatives.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Assessment Criteria",
    description: "Select the appropriate competencies and proficiency levels for development, performance, and context.",
  },
];

const benefits = [
  "Ensures alignment of hiring with competency framework for better assessments",
  "Understand your talents and measure and develop strengths",
  "Implement Individual Development Plans focused on building capability",
  "Focus on building agile and transferable skills across roles",
];

const applications = [
  { title: "Selection", description: "Hiring the right talent based on competency fit" },
  { title: "Training", description: "Targeted development based on competency gaps" },
  { title: "Performance Appraisal", description: "Objective performance evaluation criteria" },
  { title: "Succession Planning", description: "Identify and develop future leaders" },
  { title: "Career Planning", description: "Clear progression pathways for employees" },
  { title: "Team Building", description: "Complementary competencies for team effectiveness" },
];

const CompetencyFramework = () => {
  return (
    <ServiceLayout
      badge="Talent Assessment"
      title="Competency Framework"
      subtitle="A well-designed competency framework serves as a blueprint for leaders at all levels in an organization."
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
              A well-designed competency model can help align organizational values and vision in transforming the skills, abilities, and competencies that serve to guide employee development across all levels.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These competencies can further be distilled in various policies guiding Selection, Training, Performance Appraisal, Succession Planning, Career Planning, and Team Building.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
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

      {/* Plans Section */}
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Our Approach
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Choose Your Path
          </h3>
          <p className="text-muted-foreground mt-4">
            A scientific process for organizations to identify and use competencies in a solution. Our expertise identifies the most relevant competencies based on success profiles, job descriptions, families, and organizational expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border ${
                plan.highlight
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border"
              }`}
            >
              <div className={`text-sm font-medium uppercase tracking-wider mb-2 ${
                plan.highlight ? "text-primary-foreground/80" : "text-primary"
              }`}>
                {plan.name}
              </div>
              <h4 className={`font-serif text-xl font-bold mb-3 ${
                plan.highlight ? "text-primary-foreground" : "text-foreground"
              }`}>
                {plan.subtitle}
              </h4>
              <p className={`text-sm mb-6 ${
                plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {plan.description}
              </p>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      plan.highlight ? "text-primary-foreground" : "text-primary"
                    }`} />
                    <span className={`text-sm ${
                      plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Understanding", description: "Discussion with Internal HRs, SMEs, and Current Incumbents to understand current roles and competencies" },
              { step: "02", title: "Developing", description: "Competency definition and indicators development with proficiency levels for all roles" },
              { step: "03", title: "Mapping", description: "Competency mapping with assessment methodology aligned to organizational objectives" },
              { step: "04", title: "Implementing", description: "Integration into HR systems with training for managers on effective application" },
            ].map((item, index) => (
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

      {/* Applications Grid */}
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Applications
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            How Organizations Use Competency Frameworks
          </h3>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-center p-4 bg-card rounded-xl border border-border"
            >
              <h4 className="font-semibold text-foreground text-sm mb-2">{app.title}</h4>
              <p className="text-xs text-muted-foreground">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Outcomes Section */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Benefits
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              What You Can Expect
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Organizations with well-designed competency frameworks make better talent decisions and accelerate employee development.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
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
