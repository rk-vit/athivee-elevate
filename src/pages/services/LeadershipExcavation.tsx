import { motion } from "framer-motion";
import { Compass, CheckCircle, Search, Sparkles, Heart, Lightbulb, ArrowRight, Gem } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const excavationAreas = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Potential Diagnostics",
    description: "Comprehensive assessments that go beyond surface-level evaluation to uncover latent leadership capabilities.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Strengths Amplification",
    description: "A development approach that builds on existing strengths rather than focusing solely on fixing weaknesses.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Experiential Learning",
    description: "Immersive experiences that challenge participants to discover capabilities they didn't know they had.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Personal Brand Development",
    description: "Helping leaders articulate and express their unique leadership identity and value proposition.",
  },
];

const discoveryProcess = [
  {
    step: "01",
    title: "Deep Assessment",
    description: "We use a combination of psychometric tools, behavioral interviews, and situational assessments to create a comprehensive picture of each leader's potential.",
  },
  {
    step: "02",
    title: "Pattern Recognition",
    description: "Our experts analyze assessment data to identify hidden patterns, untapped strengths, and growth opportunities that traditional evaluations miss.",
  },
  {
    step: "03",
    title: "Stretch Experiences",
    description: "Participants engage in carefully designed challenges that push them beyond their comfort zone to reveal and develop hidden capabilities.",
  },
  {
    step: "04",
    title: "Continuous Revelation",
    description: "Ongoing coaching and reflection help leaders continue discovering and developing their potential long after the formal program ends.",
  },
];

const outcomes = [
  "Discovery of hidden leadership talent within your organization",
  "Unleashed potential that drives individual and team performance",
  "Enhanced self-confidence and leadership identity",
  "Broader talent pool for succession and key role coverage",
  "Increased engagement from leaders who feel seen and valued",
];

const LeadershipExcavation = () => {
  return (
    <ServiceLayout
      badge="Talent Development"
      title="Leadership Excavation"
      subtitle="Uncovering hidden leadership potential that traditional assessments often miss."
    >
      {/* Overview Section */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Overview
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Discover the Leaders Already in Your Midst
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Leadership Excavation is designed to identify latent leadership talent that traditional assessments often miss. Many organizations have untapped potential hiding in plain sight—individuals whose capabilities haven't been fully recognized or developed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through deep-dive assessments, experiential challenges, and strengths-based development, we help organizations discover and nurture these hidden gems, creating a richer and more diverse leadership pipeline.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-2xl border border-border p-8">
              <Gem className="w-12 h-12 text-primary mb-6" />
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">
                Beyond Traditional Assessment
              </h4>
              <p className="text-muted-foreground text-sm mb-6">
                Standard assessments often measure what people already do well. Leadership Excavation uncovers what they <em>could</em> do well with the right development.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-serif font-bold text-primary">40%</div>
                  <div className="text-xs text-muted-foreground">Hidden potential typically discovered</div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-serif font-bold text-primary">2x</div>
                  <div className="text-xs text-muted-foreground">Increase in internal promotions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Excavation Areas Grid */}
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Our Approach
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            How We Excavate Potential
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {excavationAreas.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-5 p-6 bg-card rounded-xl border border-border hover:shadow-card transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <div className="text-primary">{item.icon}</div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Discovery Process - Dark Section */}
      <div className="-mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 py-20 bg-[#1f2d36] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
        />
        <div className="relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-blue-400 font-medium text-sm uppercase tracking-wider mb-4">
              The Discovery Journey
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              From Hidden to Visible
            </h3>
            <p className="text-white/70">
              A systematic process for uncovering, validating, and developing latent leadership potential.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {discoveryProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-serif font-bold text-white/15">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
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
              Organizations that embrace Leadership Excavation discover talent they didn't know they had—and build a more robust, diverse leadership pipeline as a result.
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
              <Compass className="w-16 h-16 text-primary mx-auto mb-6" />
              <h4 className="font-serif text-2xl font-bold text-foreground mb-4">
                Ready to Discover Hidden Talent?
              </h4>
              <p className="text-muted-foreground mb-6">
                Let's explore how Leadership Excavation can uncover the potential within your organization.
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

export default LeadershipExcavation;
