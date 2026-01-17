import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Users,
  Target,
  Award,
  Compass,
  ArrowRight,
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
      "A comprehensive framework for understanding and developing the behavioural competencies that drive leadership effectiveness.",
    details: [
      "Behavioural competency mapping aligned to organizational values",
      "Individual and team behavioural assessments",
      "Customized development plans based on behavioural gaps",
      "Integration with performance management systems",
    ],
    outcomes: [
      "Clearer behavioural expectations",
      "Improved self-awareness",
      "Targeted development focus",
    ],
    link: "/services/behaviour-architecture",
  },
  {
    id: "leadership-excel",
    icon: <Target className="w-6 h-6" />,
    title: "Leadership Excel",
    subtitle: "Accelerating High-Potential Development",
    description:
      "An intensive development program designed to fast-track high-potential leaders for senior leadership roles.",
    details: [
      "Accelerated learning journeys for high-potential talent",
      "Executive coaching and mentoring",
      "Strategic project assignments",
      "Cross-functional exposure and networking",
    ],
    outcomes: [
      "Faster leadership readiness",
      "Stronger talent pipeline",
      "Reduced external hiring",
    ],
    link: "/services/leadership-excel",
  },
  {
    id: "leadership-excavation",
    icon: <Compass className="w-6 h-6" />,
    title: "Leadership Excavation",
    subtitle: "Discovering Hidden Potential",
    description:
      "A deep-dive program that uncovers latent leadership capabilities and accelerates their development.",
    details: [
      "Comprehensive potential assessment",
      "Strengths-based development approach",
      "Experiential learning interventions",
      "Personal leadership brand development",
    ],
    outcomes: [
      "Identified hidden talent",
      "Unleashed potential",
      "Enhanced self-confidence",
    ],
    link: "/services/leadership-excavation",
  },
  {
    id: "leadership-architecture",
    icon: <Award className="w-6 h-6" />,
    title: "Leadership Architecture",
    subtitle: "Building Leadership at Scale",
    description:
      "A systematic approach to building leadership capability across all levels of the organization.",
    details: [
      "Leadership competency framework development",
      "Multi-level leadership development programs",
      "Leadership culture transformation",
      "Succession planning integration",
    ],
    outcomes: [
      "Consistent leadership standards",
      "Scalable development",
      "Sustainable leadership culture",
    ],
    link: "/services/leadership-architecture",
  },
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

      {/* ================= SERVICES SECTION ================= */}
      <section className="relative pb-24 pt-12 overflow-hidden bg-[#1f2d36]">
        {/* dotted pattern */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,rgba(255,255,255,0.14)_1px,transparent_1px)]
            [background-size:20px_20px]
            opacity-35
            pointer-events-none
          "
        />

        <div className="relative z-10">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-section text-white mb-6">
                Our Development Solutions
              </h2>
              <p className="text-body text-white/70">
                Comprehensive programs designed to build leadership capabilities
                that drive organizational excellence.
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
                  {/* HEADER */}
                  <button
                    onClick={() =>
                      setExpandedId(
                        expandedId === service.id ? null : service.id
                      )
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

                  {/* EXPANDED CONTENT */}
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
                            <a
                              href={service.link}
                              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </a>
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

      {/* ================= CTA SECTION ================= */}
      <section className="section-padding bg-[#f6f2e8]">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-6">
              Ready to Develop Your Leaders?
            </h2>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our talent development solutions can help you
              build exceptional leadership capabilities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default TalentDevelopment;
