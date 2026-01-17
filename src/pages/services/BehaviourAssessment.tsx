import { motion } from "framer-motion";
import { Brain, CheckCircle, Target, Eye, ArrowRight, Users, ClipboardCheck, LineChart } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const keyComponents = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Behavioural Profiling",
    description: "Comprehensive assessment of work styles, preferences, and interpersonal dynamics.",
  },
  {
    icon: <ClipboardCheck className="w-5 h-5" />,
    title: "360° Feedback",
    description: "Multi-rater assessments capturing perspectives from peers, managers, and direct reports.",
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Predictive Analytics",
    description: "Data-driven insights into potential performance and development needs.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Team Dynamics",
    description: "Understanding how individual behaviours impact team effectiveness.",
  },
];

const outcomes = [
  "Deep insight into individual work styles and preferences",
  "Identification of behavioural strengths and development areas",
  "Improved self-awareness and interpersonal effectiveness",
  "Better team composition and collaboration",
  "Data-driven selection and placement decisions",
];

const process = [
  {
    step: "01",
    title: "Design",
    description: "We customize the assessment approach based on your objectives—hiring, development, or team optimization.",
  },
  {
    step: "02",
    title: "Assess",
    description: "Participants complete validated behavioural assessments online, ensuring objectivity and consistency.",
  },
  {
    step: "03",
    title: "Analyze",
    description: "Our experts interpret results, identifying patterns and generating actionable insights.",
  },
  {
    step: "04",
    title: "Debrief",
    description: "We provide individual and group feedback sessions to translate insights into development actions.",
  },
];

const BehaviourAssessment = () => {
  return (
    <ServiceLayout
      badge="Talent Assessment"
      title="Behaviour Assessment"
      subtitle="Uncovering the behavioural patterns that drive individual and team performance."
    >
      {/* Overview Section */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Overview
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Understand the 'How' Behind Performance
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Behaviour Assessment goes beyond skills and knowledge to understand how people work—their communication styles, decision-making approaches, stress responses, and interpersonal preferences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Using validated psychometric tools and expert analysis, we help organizations make better talent decisions and empower individuals with self-awareness for growth.
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
              How We Conduct Behaviour Assessments
            </h3>
            <p className="text-white/70">
              A rigorous methodology that balances scientific validity with practical applicability.
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
              Behaviour assessments provide the insights needed to optimize talent decisions and accelerate development.
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
              <Brain className="w-16 h-16 text-primary mx-auto mb-6" />
              <h4 className="font-serif text-2xl font-bold text-foreground mb-4">
                Ready to Unlock Behavioural Insights?
              </h4>
              <p className="text-muted-foreground mb-6">
                Let's discuss how behaviour assessments can enhance your talent decisions.
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

export default BehaviourAssessment;