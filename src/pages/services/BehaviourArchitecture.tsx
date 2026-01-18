import { motion } from "framer-motion";
import { Users, CheckCircle, Target, Layers, ArrowRight, Briefcase, BarChart3, Brain, Lightbulb, MessageSquare, Award, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const skillCategories = [
  {
    category: "Self Leadership",
    skills: ["Emotional Intelligence", "Personal Effectiveness", "Neuro-Linguistic Programming", "Managerial Effectiveness"],
  },
  {
    category: "Team Leadership",
    skills: ["Interpersonal Skills", "Career Instruction", "Innovation", "Accountability and Ownership"],
  },
  {
    category: "Strategic Leadership",
    skills: ["Decision Making", "Problem Solving", "Team Building", "Driving Conversations"],
  },
  {
    category: "Commercial Skills",
    skills: ["Sales Leadership", "Sales Strategy Development", "Finance for Non-Finance Executives", "Presentation Skills"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Meeting with Leaders",
    description: "Understand organisational needs and business priorities through stakeholder discussions.",
  },
  {
    step: "02",
    title: "Measuring Behaviours",
    description: "Assess participants using scientific assessments such as DISC, OPQ, etc.",
  },
  {
    step: "03",
    title: "Creating the Framework",
    description: "Create content for leaders and teams based on identified needs, ensuring every intervention aligns with organisational objectives.",
  },
  {
    step: "04",
    title: "Action Building Programs",
    description: "Help participants practise and sustain the desired behaviours through structured programs.",
  },
];

const outcomes = [
  "Clear behavioural expectations for leaders at every level",
  "Consistency in leadership decision-making across the organization",
  "Strong alignment between stated values and observable actions",
  "Objective criteria for leadership selection and promotion",
  "Enhanced accountability through measurable behavioural standards",
  "Behaviours that are understood, measured, developed and reinforced",
];

const keyComponents = [
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Behaviour Mapping",
    description: "Define leadership behaviours aligned to your organizational strategy and values.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Gap Assessment",
    description: "Measure current behavioural gaps across all leadership levels using scientific tools.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Systems Integration",
    description: "Embed behaviours into performance management and talent systems.",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Culture Alignment",
    description: "Ensure behavioural expectations reflect and reinforce organizational culture.",
  },
];

const BehaviourArchitecture = () => {
  return (
    <ServiceLayout
      badge="Talent Development"
      title="Behaviour Architecture"
      subtitle="Architecting the right behaviours to deliver high performance and measurable organisational impact."
    >
      {/* Overview Section */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Overview
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building the Habits, Mindsets and Changes People Need to Succeed
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Behaviour Architecture is Athivee's structured process shaping the everyday behaviours that drive organisational culture and performance. It focuses on helping individuals and teams achieve clarity, consistency and accountability so that business priorities are achieved through the right behavioural habits.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              While skills and knowledge are important, it is the habits that truly influence collaboration, leadership effectiveness and results. Our methodology ensures these behaviours are understood, measured, developed and reinforced through practical, real-world interventions.
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

      {/* Skills Categories */}
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Skill Development Areas
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Comprehensive Leadership Skills
          </h3>
          <p className="text-muted-foreground mt-4">
            We equip individuals with the behavioural habits and mindsets required to perform their best and achieve organisational goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <h4 className="font-serif font-semibold text-foreground text-lg mb-4 pb-3 border-b border-border">
                {category.category}
              </h4>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
              How We Build Your Behaviour Framework
            </h3>
            <p className="text-white/70">
              Through assessments, customised learning design and habit-building programs, we translate organisational goals into specific behavioural habits.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
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
              Organizations that implement Behaviour Architecture experience measurable improvements in leadership consistency, talent decisions, and cultural alignment.
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
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h4 className="font-serif text-2xl font-bold text-foreground mb-4">
                Ready to Define Your Leadership Behaviours?
              </h4>
              <p className="text-muted-foreground mb-6">
                Let's discuss how Behaviour Architecture can create clarity and consistency in your organization.
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

export default BehaviourArchitecture;
