import { motion } from "framer-motion";
import { Brain, CheckCircle, Target, Eye, ArrowRight, Users, ClipboardCheck, LineChart, Award, Shield } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const accreditations = [
  {
    title: "British Psychological Society (BPS)",
    description: "World-class psychometric assessment tools accredited by BPS ensuring quality standards.",
  },
  {
    title: "Indian Institute of Business Psychology (IIBP)",
    description: "Accredited by IIBP ensuring globally accepted standards of assessment quality.",
  },
];

const assessmentTypes = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Psychometric Assessments",
    description: "DISC Profiling, OPQ, and similar validated instruments for behavioral insights.",
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Cognitive Ability Assessments",
    description: "Verbal, Psychometric and Numerical Inductive Assessments using online platforms.",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Customized Reports",
    description: "Based on participants' responses, our certified experts generate customized individual reports.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Development Alignment",
    description: "Reports provide clear insights into competency ranks, strengths and areas for development.",
  },
];

const useCases = [
  "Talent selection and hiring decisions",
  "Career progression and promotion",
  "Leadership development planning",
  "Training needs identification",
  "Building self-awareness in employees",
  "Informed decision-making for talent interventions",
];

const process = [
  {
    step: "01",
    title: "Design",
    description: "Developing leadership competency frameworks and selecting validated psychometric and cognitive assessments.",
  },
  {
    step: "02",
    title: "Administer",
    description: "All selected assessments meet stringent criteria of validity, reliability, and relevance. Administered systematically online.",
  },
  {
    step: "03",
    title: "Analyze",
    description: "Based on participants' responses, our certified assessment experts generate customized individual reports.",
  },
  {
    step: "04",
    title: "Report",
    description: "Reports provide clear insights into competency ranks, strengths and areas for development aligned with required competencies.",
  },
];

const outcomes = [
  "Deep insight into individual work styles and behavioural preferences",
  "Identification of behavioural strengths and development areas",
  "Improved self-awareness and interpersonal effectiveness",
  "Better team composition and collaboration",
  "Data-driven selection and placement decisions",
  "Clear development roadmaps aligned to competencies",
];

const BehaviourAssessment = () => {
  return (
    <ServiceLayout
      badge="Talent Assessment"
      title="Behaviour Assessment"
      subtitle="We help organisations design and implement the right assessment process using world-class psychometric tools."
    >
      {/* Overview Section */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Overview
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Scientific Assessment for Talent Decisions
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Athivee deploys world-class psychometric assessment tools that are accredited by the British Psychological Society (BPS) and the Indian Institute of Business Psychology (IIBP), ensuring globally accepted standards of assessment quality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In addition to psychometric assessments, we recommend Cognitive Ability Assessment tools based on client requirements. We are preferred administrators of well-established tools such as DISC Profiling, OPQ and similar instruments.
            </p>
            
            {/* Accreditation badges */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {accreditations.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {assessmentTypes.map((item, index) => (
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

      {/* Use Cases */}
      <AnimatedSection>
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
            Supporting Talent Decisions Across
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white/50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{useCase}</span>
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
              Linking assessment insights to learning and development journeys for maximum impact.
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
              Assessment reports enable organisations to build self-awareness in employees and support informed decision-making for talent interventions.
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
