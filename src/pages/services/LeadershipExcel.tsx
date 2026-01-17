import { motion } from "framer-motion";
import { Target, CheckCircle, Rocket, Users, Brain, MessageSquare, ArrowRight, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const programElements = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Strategic Thinking",
    description: "Develop the ability to see the big picture, anticipate trends, and make decisions that drive long-term success.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Executive Presence",
    description: "Build the gravitas, communication skills, and confidence needed to lead at the highest levels.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Leading Change",
    description: "Master the art of navigating complexity and driving transformation across the organization.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Stakeholder Influence",
    description: "Develop advanced skills in persuasion, negotiation, and building strategic relationships.",
  },
];

const journeyPhases = [
  {
    phase: "Foundation",
    duration: "Weeks 1-4",
    activities: ["360° Leadership Assessment", "Personal Development Plan", "Executive Coaching Launch"],
  },
  {
    phase: "Acceleration",
    duration: "Weeks 5-12",
    activities: ["Strategic Business Challenge", "Peer Learning Cohorts", "Cross-Functional Exposure"],
  },
  {
    phase: "Integration",
    duration: "Weeks 13-16",
    activities: ["Capstone Project Presentation", "Transition Planning", "Ongoing Mentorship Setup"],
  },
];

const outcomes = [
  "Faster readiness for senior leadership roles",
  "Stronger internal talent pipeline",
  "Reduced reliance on external hiring for key positions",
  "Higher engagement and retention of top talent",
  "Measurable improvement in leadership effectiveness scores",
];

const LeadershipExcel = () => {
  return (
    <ServiceLayout
      badge="Talent Development"
      title="Leadership Excel"
      subtitle="Accelerating the development of high-potential leaders for critical senior roles."
    >
      {/* Overview Section */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Overview
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Fast-Track Your Future Leaders
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Leadership Excel is an intensive, outcome-driven program designed to accelerate the development of high-potential individuals who are being groomed for senior leadership positions. Unlike traditional development programs that span years, Leadership Excel compresses critical growth experiences into a focused journey.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through a combination of executive coaching, strategic project assignments, and immersive learning experiences, participants rapidly build the capabilities needed to step into more complex leadership roles.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-2xl border border-border p-8">
              <Rocket className="w-12 h-12 text-primary mb-6" />
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">
                Designed for High-Potentials
              </h4>
              <p className="text-muted-foreground text-sm mb-6">
                This program is ideal for leaders who have been identified as successors for critical roles and need accelerated preparation.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  16-week program
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Cohort-based
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Program Elements Grid */}
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            What We Develop
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Core Focus Areas
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {programElements.map((item, index) => (
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

      {/* Journey Timeline - Dark Section */}
      <div className="-mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 py-20 bg-[#1f2d36] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
        />
        <div className="relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-blue-400 font-medium text-sm uppercase tracking-wider mb-4">
              Program Journey
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              The Leadership Excel Experience
            </h3>
            <p className="text-white/70">
              A carefully structured 16-week journey that builds capabilities progressively while delivering business impact.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {journeyPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                    {phase.duration}
                  </span>
                  <span className="text-4xl font-serif font-bold text-white/10">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="font-semibold text-white text-xl mb-4">{phase.phase}</h4>
                <ul className="space-y-2">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {activity}
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
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                <h4 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Accelerate Your Leadership Pipeline
                </h4>
                <p className="text-muted-foreground mb-6">
                  Discuss how Leadership Excel can prepare your high-potentials for their next big role.
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
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Expected Outcomes
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Measurable Results
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Organizations that invest in accelerated leadership development see significant returns in talent readiness and business performance.
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
        </div>
      </AnimatedSection>
    </ServiceLayout>
  );
};

export default LeadershipExcel;
