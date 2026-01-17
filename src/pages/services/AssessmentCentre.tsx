import { motion } from "framer-motion";
import { Building2, CheckCircle, Target, Users, ArrowRight, ClipboardList, Presentation, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const keyComponents = [
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Simulation Exercises",
    description: "Role-plays, case studies, and in-basket exercises that mirror real job challenges.",
  },
  {
    icon: <Presentation className="w-5 h-5" />,
    title: "Presentations",
    description: "Individual and group presentations to assess communication and influence skills.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Structured Interviews",
    description: "Competency-based interviews with trained assessors for consistent evaluation.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Group Dynamics",
    description: "Leaderless group discussions to observe collaboration and leadership emergence.",
  },
];

const outcomes = [
  "Objective, multi-dimensional evaluation of leadership potential",
  "Reduced hiring risk through realistic job previews",
  "Clear development roadmaps for high-potential talent",
  "Benchmarking data for succession planning",
  "Enhanced candidate experience and employer brand",
];

const process = [
  {
    step: "01",
    title: "Define",
    description: "We collaborate with you to identify the competencies and success criteria for the target role.",
  },
  {
    step: "02",
    title: "Design",
    description: "We create custom exercises and scenarios that simulate the challenges of the actual role.",
  },
  {
    step: "03",
    title: "Deliver",
    description: "Trained assessors facilitate the centre, observing and evaluating participant performance.",
  },
  {
    step: "04",
    title: "Report",
    description: "We provide comprehensive reports with ratings, evidence, and development recommendations.",
  },
];

const AssessmentCentre = () => {
  return (
    <ServiceLayout
      badge="Talent Assessment"
      title="Assessment Centre"
      subtitle="Comprehensive, multi-method evaluation to identify and develop your future leaders."
    >
      {/* Overview Section */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Overview
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Gold Standard in Talent Assessment
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Assessment Centres provide the most comprehensive and predictive method for evaluating leadership potential. By observing candidates in realistic work simulations, we capture a 360° view of their capabilities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether for external hiring, internal promotion, or development purposes, our assessment centres deliver the insights you need to make confident talent decisions.
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
              How We Run Assessment Centres
            </h3>
            <p className="text-white/70">
              A structured methodology that ensures validity, reliability, and actionable insights.
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
              Assessment centres provide unparalleled insight into leadership readiness and development needs.
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
              <Building2 className="w-16 h-16 text-primary mx-auto mb-6" />
              <h4 className="font-serif text-2xl font-bold text-foreground mb-4">
                Ready to Elevate Your Talent Assessment?
              </h4>
              <p className="text-muted-foreground mb-6">
                Let's discuss how an assessment centre can transform your selection and development process.
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

export default AssessmentCentre;