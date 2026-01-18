import { motion } from "framer-motion";
import { Award, CheckCircle, Building2, Layers, GitBranch, Users, ArrowRight, Crown, Target, Shield, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const whyItMatters = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Leadership Continuity",
    description: "Without structure, leaders rely on instinct and experience alone, resulting in inconsistent behaviours and unpredictable outcomes.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Scalable Culture",
    description: "By aligning beliefs, values, behaviours and competencies, organizations can build leadership culture that is consistent, scalable and future-ready.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Succession Strength",
    description: "Strengthens the organisation's leadership pipeline and enables better succession planning with clear role-specific profiles.",
  },
];

const keyBenefits = [
  "Provides clear, role-specific leadership profile aligned with business strategy",
  "Defines the behavioural competencies required at every leadership level",
  "Uses Competency Assessments to effectively measure current strengths and capabilities",
  "Incorporates Internal Leadership Assessments to evaluate leaders' responses in real-world business scenarios",
  "Uncovers hidden mindsets, beliefs and behavioural patterns that influence leadership performance",
  "Helps leaders replace limiting beliefs with growth-oriented thinking and align personal values with organisational culture",
  "Builds leadership behaviours that create real, observable organisational impact",
  "Ensures longer, sustainable leadership transformation through behavior change",
];

const architectureElements = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Competency Frameworks",
    description: "Develop clear, level-specific leadership competency models aligned with your strategic objectives.",
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Development Pathways",
    description: "Create structured learning journeys for leaders at every level—from first-time managers to executives.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Succession Integration",
    description: "Link development programs directly to succession planning for seamless talent flow.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Culture Transformation",
    description: "Embed leadership development into the fabric of your organizational culture.",
  },
];

const process = [
  {
    step: "01",
    title: "Training Sprint",
    description: "Measuring and understanding the culture, behavioural and capability landscape through leadership and values assessments.",
  },
  {
    step: "02",
    title: "Skill Development",
    description: "Driven-DDD module and principles programs for various leadership contexts with customized content.",
  },
  {
    step: "03",
    title: "Understanding Beliefs",
    description: "Through AB Programs, understanding the beliefs that drive behaviour and aligning them with organizational values.",
  },
  {
    step: "04",
    title: "Action Building",
    description: "Efficient and mastering OJT Programs through focused interventions and measurement through 360 feedback.",
  },
];

const levels = [
  {
    level: "Executive",
    focus: "Strategic Vision & Enterprise Leadership",
    programs: ["Executive Coaching", "Board Readiness", "Strategic Leadership Retreat"],
  },
  {
    level: "Senior Leaders",
    focus: "Business Unit & Functional Excellence",
    programs: ["Business Acumen Program", "Cross-Functional Leadership", "Change Leadership"],
  },
  {
    level: "Middle Managers",
    focus: "Team Performance & Operational Excellence",
    programs: ["People Leadership Essentials", "Performance Management", "Coaching Skills"],
  },
  {
    level: "Emerging Leaders",
    focus: "Individual Contributor to Leader Transition",
    programs: ["First-Time Manager Program", "Self-Leadership", "Influence Without Authority"],
  },
];

const outcomes = [
  "Consistent leadership standards across all levels of the organization",
  "Scalable development infrastructure that grows with your business",
  "Sustainable leadership culture that attracts and retains top talent",
  "Clear career pathways that motivate and engage future leaders",
  "Reduced time-to-productivity for leaders at every transition point",
  "Stronger bench strength and succession readiness",
];

const LeadershipArchitecture = () => {
  return (
    <ServiceLayout
      badge="Talent Development"
      title="Leadership Architecture"
      subtitle="Leadership is not a role—it is a carefully shaped capability. Leadership Architecture brings design, clarity and intentionality to how leaders live and influence others."
    >
      {/* Overview Section */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Overview
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Systematic Leadership at Scale
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Leadership Architecture works because it transforms leadership from a fragmented, siloed, measurable organisational asset. By aligning beliefs, values, behaviours and competencies, organizations can build leadership culture that is consistent, scalable and future-ready.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It ensures every leader understands and acts on their role in driving organizational success. Leadership Architecture matters because without structure, leaders rely on instinct and experience alone—resulting in inconsistent behaviours and unpredictable outcomes.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-2xl border border-border p-8">
              <Crown className="w-12 h-12 text-primary mb-6" />
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">
                Enterprise-Wide Impact
              </h4>
              <p className="text-muted-foreground text-sm mb-6">
                Leadership Architecture isn't a program—it's a comprehensive system that transforms how your organization develops leaders at every level.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Multi-level development system
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Integrated with HR processes
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Built for scalability
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why It Matters */}
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Why It Matters
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Leadership is a Carefully Shaped Capability
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {whyItMatters.map((item, index) => (
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
              <h4 className="font-serif font-semibold text-lg text-foreground mb-3">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Key Benefits */}
      <AnimatedSection>
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
            What Leadership Architecture Delivers
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-white/50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Architecture Elements Grid */}
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Key Components
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Building Blocks of Leadership Architecture
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {architectureElements.map((item, index) => (
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

      {/* Process - Dark Section */}
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
              How We Architect Leadership
            </h3>
            <p className="text-white/70">
              We architect ideal leadership through several interventions in the transformation goals alongside measurable drivers through the LEAD Process.
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

      {/* Leadership Levels */}
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Multi-Level Framework
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Development at Every Level
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {levels.map((item, index) => (
            <motion.div
              key={item.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full uppercase tracking-wider">
                  {item.level}
                </span>
              </div>
              <h4 className="font-semibold text-foreground text-lg mb-2">{item.focus}</h4>
              <ul className="space-y-2 mt-4">
                {item.programs.map((program, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {program}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
              Transformational Results
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Organizations that implement Leadership Architecture create a sustainable competitive advantage through their leadership capabilities.
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
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h4 className="font-serif text-2xl font-bold text-foreground mb-4">
                Ready to Build Your Leadership System?
              </h4>
              <p className="text-muted-foreground mb-6">
                Let's discuss how Leadership Architecture can create lasting capability across your organization.
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

export default LeadershipArchitecture;
