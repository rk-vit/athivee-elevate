import { motion } from "framer-motion";
import { ClipboardCheck, BarChart3, Users2, Building2, PieChart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHeader from "@/components/ui/pageHeader_TA";
import bgImage from "@/assets/archery.png";
const assessments = [
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Competency Framework",
    description: "Develop comprehensive competency frameworks that define success criteria for every role and level in your organization.",
    features: ["Role-specific competency mapping", "Behavioral indicators", "Proficiency levels", "Assessment criteria"],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Behaviour Assessment",
    description: "Scientific assessment of behavioural patterns to identify strengths, development areas, and leadership potential.",
    features: ["360-degree feedback", "Psychometric assessments", "Behavioural interviews", "Personality profiling"],
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: "Assessment Centre",
    description: "Comprehensive evaluation through multiple exercises and simulations to assess leadership readiness.",
    features: ["Leadership simulations", "Group exercises", "Case study analysis", "Presentation assessments"],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Hybrid Assessment Centre",
    description: "Combining virtual and in-person assessment methods for flexible, comprehensive evaluation.",
    features: ["Virtual simulations", "Remote assessments", "Blended evaluation", "Technology-enabled feedback"],
  },
  {
    icon: <PieChart className="w-8 h-8" />,
    title: "Organisational Analysis",
    description: "Holistic analysis of organizational culture, capability gaps, and talent landscape.",
    features: ["Culture diagnostics", "Capability mapping", "Talent analytics", "Strategic recommendations"],
  },
];

const TalentAssessment = () => {
  return (
    <Layout>
      <PageHeader 
        badge="Talent Assessment"
        title="Objective Insights for Strategic Talent Decisions"
        subtitle="Our scientifically-validated assessment methodologies provide objective insights to identify, evaluate, and develop your talent effectively."
        backgroundImage={bgImage}
      />

      {/* Assessments Grid */}
      {/* Assessments Grid */}
<section className="section-padding relative bg-[#1f2a33]">
  {/* dotted pattern */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.08]"
    style={{
      backgroundImage:
        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
      backgroundSize: "22px 22px",
    }}
  />

  <div className="container-custom relative z-10">
    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="heading-section text-white mb-6">
        Our Assessment Solutions
      </h2>
      <p className="text-body text-white/80">
        Comprehensive assessment tools and methodologies designed to provide
        accurate, actionable insights for talent decisions.
      </p>
    </AnimatedSection>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {assessments.map((assessment, index) => (
        <motion.div
          key={assessment.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="
            group p-8 rounded-2xl
            bg-white
            border border-white/10
            hover:shadow-2xl
            transition-all duration-300
          "
        >
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <div className="text-primary group-hover:text-primary-foreground transition-colors">
              {assessment.icon}
            </div>
          </div>

          <h3 className="heading-card text-foreground mb-3">
            {assessment.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-6">
            {assessment.description}
          </p>

          <ul className="space-y-2">
            {assessment.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Process */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h2 className="heading-section text-foreground mb-6">
              How We Deliver Insights
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Define", description: "Understand objectives and success criteria" },
              { step: "02", title: "Design", description: "Customize assessment methodology" },
              { step: "03", title: "Deploy", description: "Execute assessments professionally" },
              { step: "04", title: "Deliver", description: "Provide actionable insights and recommendations" },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border border-border"
              >
                <div className="text-4xl font-serif font-bold text-primary/20 mb-4">{phase.step}</div>
                <h4 className="font-serif font-semibold text-lg text-foreground mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TalentAssessment;
