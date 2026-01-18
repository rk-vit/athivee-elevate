import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Users,
  Target,
  Award,
  Compass,
  ArrowRight,
  CheckCircle,
  Brain,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHeader from "@/components/ui/pageHeader_TD";
import bgImage from "@/assets/steps.png";

const services = [
  {
    id: "behaviour-architecture",
    icon: <Users className="w-6 h-6" />,
    title: "Behaviour Architecture",
    subtitle: "Building the Foundation of Leadership",
    description:
      "Architecting the right behaviours to deliver high performance and measurable organisational impact. Building the habits, mindsets and changes people need to succeed.",
    details: [
      "Behavioural habits aligned to business priorities",
      "Scientific assessments (DISC, OPQ, etc.)",
      "Customized content for leaders and teams",
      "Action Building (AB) Programs for sustained change",
    ],
    outcomes: [
      "Clarity, consistency and accountability",
      "Behaviours aligned to organisational goals",
      "Measurable performance improvement",
    ],
    link: "/services/behaviour-architecture",
  },
  {
    id: "leadership-excel",
    icon: <Target className="w-6 h-6" />,
    title: "Leadership Excel",
    subtitle: "Accelerating High-Potential Development",
    description:
      "Leaders in Excel is an active, comprehensive development program designed to strengthen capabilities and ensure leaders at all levels are ready for transformation.",
    details: [
      "Mid-Level & Senior Leader programs",
      "Scientific assessments and IDP creation",
      "Executive coaching and mentoring",
      "Action Learning on real business challenges",
    ],
    outcomes: [
      "Faster leadership readiness",
      "Stronger talent pipeline",
      "Improved decision-making and collaboration",
    ],
    link: "/services/leadership-excel",
  },
  {
    id: "leadership-excavation",
    icon: <Compass className="w-6 h-6" />,
    title: "Leadership Excavation",
    subtitle: "Discovering Hidden Potential",
    description:
      "Transformational leaders are shaped by their unique values and beliefs. Our LEAD Process enables leaders to uncover and transform their underlying beliefs that shape their behaviors.",
    details: [
      "The LEAD Process for deep transformation",
      "Aligning personal values with organizational culture",
      "Experiential learning interventions",
      "Measuring impact through communication and influence",
    ],
    outcomes: [
      "Increased presence and accountability",
      "Cultural and behavioral alignment",
      "Clear understanding of ROI",
    ],
    link: "/services/leadership-excavation",
  },
  {
    id: "leadership-architecture",
    icon: <Award className="w-6 h-6" />,
    title: "Leadership Architecture",
    subtitle: "Building Leadership at Scale",
    description:
      "Leadership is not a role—it is a carefully shaped capability. Leadership Architecture brings design, clarity and intentionality to how leaders live and influence others.",
    details: [
      "Role-specific leadership profiles",
      "Competency assessments at every level",
      "Internal Leadership Assessments",
      "Succession planning integration",
    ],
    outcomes: [
      "Consistent leadership standards",
      "Stronger leadership pipeline",
      "Sustainable leadership culture",
    ],
    link: "/services/leadership-architecture",
  },
];

const whatMakesUsDifferent = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Beyond Traditional Training",
    description: "While conventional training focuses on knowledge transfer, our approach creates lasting behavioural change through immersive, experiential methods.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Behavioural Focus",
    description: "Addressing the underlying behaviours that drive performance, not just surface-level skills.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Sustained Impact",
    description: "Reinforcement mechanisms that ensure lasting transformation through action building programs.",
  },
];

const learningModel = [
  { percentage: "70%", label: "Experiential Learning", description: "On Job Trainings, Boot Camps, Out Bound Programmes" },
  { percentage: "20%", label: "Social Learning", description: "Mentoring, Peer Learning, Coaching" },
  { percentage: "10%", label: "Formal Learning", description: "Instructor Led & Virtual Programs" },
];

const TalentDevelopment = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Layout>
      <PageHeader
        badge="Talent Development"
        title="Developing Leaders Who Transform Organizations"
        subtitle="Our talent development solutions are designed to build exceptional leadership capabilities at every level, driving sustainable organizational success."
        backgroundImage={bgImage}
      />

      {/* What Makes Us Different */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Our Philosophy
            </span>
            <h2 className="heading-section text-foreground mb-6">
              What Makes Us Different
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {whatMakesUsDifferent.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-card rounded-xl border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* 70-20-10 Model */}
          <AnimatedSection>
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
              <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
                Our Learning Model
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {learningModel.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-5xl font-serif font-bold text-primary mb-2">{item.percentage}</div>
                    <h4 className="font-semibold text-foreground mb-2">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative pb-24 pt-12 overflow-hidden bg-[#1f2d36]">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:20px_20px] opacity-35 pointer-events-none"
        />

        <div className="relative z-10">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-section text-white mb-6">
                Our Development Solutions
              </h2>
              <p className="text-body text-white/70">
                Comprehensive programs designed to build leadership capabilities that drive organizational excellence.
              </p>
            </AnimatedSection>

            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="border border-border rounded-2xl overflow-hidden bg-card"
                >
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === service.id ? null : service.id)
                    }
                    className="w-full p-6 md:p-8 flex items-center gap-6 text-left hover:bg-secondary/50 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">{service.icon}</div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="heading-card text-foreground mb-1">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.subtitle}
                      </p>
                    </div>

                    <ChevronDown
                      className={`w-6 h-6 text-muted-foreground transition-transform ${
                        expandedId === service.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedId === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 pt-2 border-t border-border">
                          <p className="text-muted-foreground mb-6">
                            {service.description}
                          </p>

                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-semibold text-foreground mb-4">
                                Key Components
                              </h4>
                              <ul className="space-y-3">
                                {service.details.map((detail, i) => (
                                  <li key={i} className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                    <span className="text-sm text-muted-foreground">
                                      {detail}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-foreground mb-4">
                                Expected Outcomes
                              </h4>
                              <ul className="space-y-3">
                                {service.outcomes.map((outcome, i) => (
                                  <li key={i} className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                                    <span className="text-sm text-muted-foreground">
                                      {outcome}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-8 flex justify-end">
                            <Link
                              to={service.link}
                              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#f6f2e8]">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-6">
              Ready to Develop Your Leaders?
            </h2>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our talent development solutions can help you build exceptional leadership capabilities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default TalentDevelopment;
