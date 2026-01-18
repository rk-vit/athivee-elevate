import { motion } from "framer-motion";
import { Building2, CheckCircle, Target, Users, ArrowRight, ClipboardList, Presentation, MessageSquare, Monitor, FileText, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const assessmentElements = [
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Business Case Studies",
    description: "Online business case studies and simulations that mirror real job challenges.",
  },
  {
    icon: <Presentation className="w-5 h-5" />,
    title: "Virtual Role Plays",
    description: "Virtual role plays and senior interactions to assess communication and influence.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Structured Interviews",
    description: "Competency-based interviews with trained assessors for consistent evaluation.",
  },
  {
    icon: <Monitor className="w-5 h-5" />,
    title: "Psychometric Assessments",
    description: "Psychometric and cognitive assessments with standardized scoring guidelines.",
  },
];

const deliverables = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Individual Report & 9 Box Matrix",
    description: "Individual reports containing ratings for each competency, strengths and areas of development. Athivee experts provide one-on-one feedback on reports to participants.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Individual Development Plan",
    description: "Athivee provides Development Guides for all competencies that includes on-the-job activities, recommended reading materials, and training programs.",
  },
];

const useCases = [
  { title: "Leadership Selection", description: "Individual competency assessments for senior hiring" },
  { title: "Succession Planning", description: "Strengths, development areas, and readiness indicators" },
  { title: "Potential vs Performance", description: "9-Box insights for talent calibration" },
  { title: "Development Planning", description: "Actionable Individual Development Plans (IDPs)" },
  { title: "Organizational Insights", description: "Organizational level trending insights and dashboards" },
  { title: "Capability Building", description: "Early and mid-career leader development" },
];

const hybridFeatures = [
  "Virtual and in-person assessment elements",
  "Integrated developmental areas and readiness indicators",
  "Enhanced evaluation insights",
  "Individual Development Plans (IDPs)",
  "Organizational level trending insights",
];

const process = [
  {
    step: "01",
    title: "Define",
    description: "We collaborate with you to identify competencies, success criteria, and assessment methodology for target roles.",
  },
  {
    step: "02",
    title: "Design",
    description: "We create custom exercises, scenarios, and simulations that replicate real business challenges.",
  },
  {
    step: "03",
    title: "Deliver",
    description: "All assessments are conducted by experienced, trained assessors ensuring objectivity and reliability.",
  },
  {
    step: "04",
    title: "Report",
    description: "We provide comprehensive reports with ratings, evidence, development recommendations, and 9-Box placement.",
  },
];

const outcomes = [
  "Standardized assessment experience with reduced biases",
  "Strengths and developmental areas identified clearly",
  "Readiness and potential indicators for succession planning",
  "Actionable developmental recommendations",
  "Less inherent bias in talent processes",
  "Assessment insights tied to business relevance",
];

const AssessmentCentre = () => {
  return (
    <ServiceLayout
      badge="Talent Assessment"
      title="Assessment Centre"
      subtitle="Comprehensive evaluation through multiple exercises and realistic business simulations to assess leadership readiness."
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
              An Assessment Centre provides structured evaluation of individual competencies through various assessments and realistic business simulations. Assessments are specifically designed to yield reliable evidence critical in ensuring processes are consistent and relevant to business needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Athivee designs and delivers customized assessments and development resources using globally recognized best practices. All assessments are conducted by experienced assessors with standardized scoring guidelines.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {assessmentElements.map((item, index) => (
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

      {/* Deliverables Section */}
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Deliverables
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Architecting the Leadership
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-5 p-8 bg-card rounded-xl border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <div className="text-primary">{item.icon}</div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Use Cases Grid */}
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Applications
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            How Organizations Use Assessment Centres
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-card rounded-xl border border-border"
            >
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Hybrid Assessment Centre */}
      <AnimatedSection>
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Hybrid Option
              </span>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Hybrid Assessment Centre
              </h3>
              <p className="text-muted-foreground mb-6">
                Designed for organizations seeking to leverage technological advancements while retaining assessment integrity. Combines virtual and in-person elements for comprehensive evaluation.
              </p>
              <ul className="space-y-3">
                {hybridFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center">
                <Monitor className="w-24 h-24 text-primary" />
              </div>
            </div>
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
              Designed assessment centre criteria ensure all elements are led by experienced and certified assessors with business relevant and contextual insights.
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
              Assessment centres provide unparalleled insight into leadership readiness and development needs with reduced inherent biases.
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
