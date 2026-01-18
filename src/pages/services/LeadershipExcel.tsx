import { motion } from "framer-motion";
import { Target, CheckCircle, Rocket, Users, Brain, MessageSquare, ArrowRight, TrendingUp, Award, FileText, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const leaderPlans = [
  {
    title: "Mid-Level Leaders",
    subtitle: "Team Leads and Supervisors",
    targetAudience: ["Potential Leaders", "Future Successors", "Leaders in Pipeline", "Team Leads and Supervisors"],
    approach: [
      "Scientific Assessments for accurate capability mapping",
      "Customized learning and training development",
      "Measure the progress through IDPs",
      "Action Learning on real business challenges",
    ],
    deliverable: "IDP (Individual Development Plan)",
  },
  {
    title: "Senior Leaders",
    subtitle: "Functional Heads and Business Leaders",
    targetAudience: ["Senior Managers", "Functional Leaders", "Business Unit Heads", "Executive Team Members"],
    approach: [
      "Independent and collaborative practical evaluations",
      "Improved communication and decision-making training",
      "MAP (Management Action Plan) for effective results",
      "Ability to lead and execute business priorities",
    ],
    deliverable: "ITP (Individual Transformation Plan)",
  },
];

const interventionProcess = [
  {
    step: "01",
    title: "Understanding Requirements",
    description: "Understanding the leaders' business priorities and the necessary competencies required.",
  },
  {
    step: "02",
    title: "Measuring Capabilities",
    description: "Measure the leaders' skills and competencies through assessments in the evaluation process.",
  },
  {
    step: "03",
    title: "Action Learning",
    description: "All leaders participate in development activities designed to support the process with one-on-one mentoring.",
  },
  {
    step: "04",
    title: "Conduct Action Building",
    description: "Leaders in development interventions with reinforced capabilities driven by individual development plans.",
  },
];

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

const outcomes = [
  "Faster readiness for senior leadership roles",
  "Stronger internal talent pipeline",
  "Improved decision-making and collaboration",
  "Analysis to ensure aligned organizational culture",
  "Measure the impact on IDP and development",
  "Reduced reliance on external hiring for key positions",
];

const LeadershipExcel = () => {
  return (
    <ServiceLayout
      badge="Talent Development"
      title="Leadership Excel"
      subtitle="An active, comprehensive development program designed to strengthen capabilities and ensure leaders at all levels are ready for transformation."
    >
      {/* Overview Section */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Overview
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Development Leaders for Tomorrow
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Leaders in Excel are active, comprehensive leaders in development designed to strengthen capabilities and ensure relevance. Leaders at all levels assess and customize skills using training and IDP (Individual Development Plan) to enhance the leaders in transformation.
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
                  Cohort-based
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  IDP & ITP Focus
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Leader Plans */}
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Program Tracks
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Tailored for Every Leadership Level
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {leaderPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-8 bg-card rounded-2xl border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground text-xl">{plan.title}</h4>
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="font-semibold text-foreground text-sm mb-3">Target Audience</h5>
                <div className="flex flex-wrap gap-2">
                  {plan.targetAudience.map((audience, i) => (
                    <span key={i} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold text-foreground text-sm mb-3">Our Approach</h5>
                <ul className="space-y-2">
                  {plan.approach.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Deliverable:</span>
                  <span className="text-muted-foreground">{plan.deliverable}</span>
                </div>
              </div>
            </motion.div>
          ))}
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

      {/* Intervention Process - Dark Section */}
      <div className="-mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 py-20 bg-[#1f2d36] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
        />
        <div className="relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-blue-400 font-medium text-sm uppercase tracking-wider mb-4">
              Intervention Requirements
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              The Leadership Excel Journey
            </h3>
            <p className="text-white/70">
              A carefully structured journey that builds capabilities progressively while delivering business impact.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interventionProcess.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <span className="text-4xl font-serif font-bold text-white/10 absolute top-4 right-4">
                  {phase.step}
                </span>
                <h4 className="font-semibold text-white text-lg mb-3">{phase.title}</h4>
                <p className="text-white/70 text-sm">{phase.description}</p>
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
