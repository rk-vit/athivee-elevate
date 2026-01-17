import { motion } from "framer-motion";
import { Award, CheckCircle, Building2, Layers, GitBranch, Users, ArrowRight, Crown } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

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
      subtitle="Building scalable leadership capability across your entire enterprise."
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
              Leadership Architecture provides a structured, enterprise-wide approach to leadership development. Rather than one-off programs, we help organizations build an integrated system that develops leadership capability at every level—from emerging leaders to the C-suite.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This systematic approach ensures consistency in leadership standards, clear development pathways, and a sustainable infrastructure that scales with your organization's growth.
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

      {/* Leadership Levels - Dark Section */}
      <div className="-mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 py-20 bg-[#1f2d36] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
        />
        <div className="relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-blue-400 font-medium text-sm uppercase tracking-wider mb-4">
              Multi-Level Framework
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Development at Every Level
            </h3>
            <p className="text-white/70">
              A comprehensive system that addresses the unique development needs of leaders at each stage of their journey.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {levels.map((item, index) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full uppercase tracking-wider">
                    {item.level}
                  </span>
                </div>
                <h4 className="font-semibold text-white text-lg mb-2">{item.focus}</h4>
                <ul className="space-y-2 mt-4">
                  {item.programs.map((program, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {program}
                    </li>
                  ))}
                </ul>
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
