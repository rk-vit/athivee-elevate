import { motion } from "framer-motion";
import { Compass, CheckCircle, Search, Sparkles, Heart, Lightbulb, ArrowRight, Gem, Brain, Users, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const transformationalInsights = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Beliefs & Values",
    description: "Transformational leaders are shaped by their unique values and behaviors driven by their beliefs and experiences.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "The LEAD Process",
    description: "Enables leaders to align their inner drivers with organizations and recognize the underlying beliefs that shape their behaviors.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Skills & Knowledge",
    description: "Most leaders need to deepen their understanding of their beliefs, values, and the behavioral patterns that drive them.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Cultural Alignment",
    description: "Ensure alignment between organizational values and leaders' personal values for teams' success.",
  },
];

const leadProcess = [
  {
    step: "L",
    title: "Learn",
    description: "Understanding the cultural, behavioural and capability landscape through assessments and discussions.",
  },
  {
    step: "E",
    title: "Excavate",
    description: "Understanding the beliefs through group discussions, uncovering hidden mindsets and behavioural patterns.",
  },
  {
    step: "A",
    title: "Align",
    description: "Efficient and mastering alignment through AB Programs, OJT and focused interventions.",
  },
  {
    step: "D",
    title: "Drive",
    description: "Measurement focused through 360 feedback mechanisms and sustained transformation.",
  },
];

const seniorLeaderFocus = [
  "Attuned to cultural and behavioral alignment in organizations",
  "Increased presence and accountability",
  "Cultural and behavioral alignment in decision-making",
  "Clear understanding of ROI and engineering outcomes",
  "Improved communication and influence",
];

const excavationAreas = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Potential Diagnostics",
    description: "Assessing behavioural traits, engagement levels, and leadership capabilities through scientific tools.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Bridging the Gap",
    description: "Aligning capabilities against the demands of next-level roles and identifying specific experiences needed.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Stretch Experiences",
    description: "Real-world business simulations, high-impact projects, and structured reflection with leadership coaching.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Personal Brand Development",
    description: "Helping leaders articulate and express their unique leadership identity and value proposition.",
  },
];

const outcomes = [
  "Improved leadership presence and accountability",
  "Cultural and behavioral alignment in decision-making",
  "A data-driven, transparent process that builds employee trust",
  "A ready-now pool for sudden leadership vacancies",
  "Lower attrition rates as high-performers see valued talent",
  "A leadership team that is equipped for future business challenges",
];

const LeadershipExcavation = () => {
  return (
    <ServiceLayout
      badge="Talent Development"
      title="Leadership Excavation"
      subtitle="Transformational leaders are shaped by their unique values and beliefs. Our LEAD Process enables leaders to uncover and transform their underlying beliefs."
    >
      {/* Overview Section */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Overview
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Discovering Hidden Potential Through Deep Transformation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe HiPo development isn't just about fast-tracking careers—it's about building leadership depth, strategic judgment, and emotional maturity. Our approach actively seeks to develop processes that uncover and transform underlying beliefs, values, and behaviors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Once identified, we bridge the gap between "high potential" and "high readiness" by aligning capabilities against the demands of next-level roles, identifying specific experiences needed to accelerate growth, and creating tailored learning experiences.
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
                Leadership Excavation uncovers what leaders <em>could</em> achieve when their personal values align with organizational culture.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-serif font-bold text-primary">LEAD</div>
                  <div className="text-xs text-muted-foreground">Process Framework</div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-serif font-bold text-primary">360°</div>
                  <div className="text-xs text-muted-foreground">Feedback Integration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Transformational Insights Grid */}
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Transformational Approach
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Leaders in Organizations
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformationalInsights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-card rounded-xl border border-border text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <div className="text-primary">{item.icon}</div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* LEAD Process - Dark Section */}
      <div className="-mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 py-20 bg-[#1f2d36] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
        />
        <div className="relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-blue-400 font-medium text-sm uppercase tracking-wider mb-4">
              The LEAD Process
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              From Hidden to Visible
            </h3>
            <p className="text-white/70">
              We architect ideal leadership through several interventions in the transformation goals alongside measurable drivers through the LEAD Process.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-400/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-serif font-bold text-blue-400">
                    {item.step}
                  </span>
                </div>
                <h4 className="font-semibold text-white text-lg mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Senior Leaders Focus */}
      <AnimatedSection>
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Senior Leaders
              </span>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Improved Leaders for Organizational Success
              </h3>
              <p className="text-muted-foreground mb-6">
                Senior Managers should be attuned to the cultural and behavioral alignment in their organizations. Improved leaders increase presence and accountability.
              </p>
              <ul className="space-y-3">
                {seniorLeaderFocus.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {excavationAreas.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white/50 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

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
