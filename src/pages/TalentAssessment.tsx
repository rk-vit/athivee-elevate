import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ClipboardCheck, BarChart3, Users2, Building2, ArrowRight, CheckCircle, Target, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHeader from "@/components/ui/pageHeader_TA";
import bgImage from "@/assets/archery.png";

const assessments = [
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Competency Framework",
    description: "A well-designed competency framework serves as a blueprint for leaders at all levels, guiding recruitment, assessment, development, and performance management.",
    features: ["Role-specific competency mapping", "Behavioral indicators", "Proficiency levels", "Assessment criteria"],
    link: "/services/competency-framework",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Behaviour Assessment",
    description: "We deploy world-class psychometric assessment tools accredited by the British Psychological Society (BPS) and the Indian Institute of Business Psychology (IIBP).",
    features: ["Psychometric assessments (DISC, OPQ, etc.)", "Cognitive ability assessments", "Customized individual reports", "Development recommendations"],
    link: "/services/behaviour-assessment",
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: "Assessment Centre",
    description: "Comprehensive evaluation through multiple exercises and realistic business simulations to assess leadership readiness and potential.",
    features: ["Business case studies & simulations", "Virtual role plays", "Structured interviews", "9-Box Matrix & IDP"],
    link: "/services/assessment-centre",
  },
];

const deliverables = [
  {
    title: "Individual Report & 9 Box Matrix",
    description: "Individual reports containing ratings for each competency, strengths and areas of development. One-on-one feedback sessions with participants.",
  },
  {
    title: "Individual Development Plan",
    description: "Development guides for all competencies including on-the-job activities, recommended reading materials, and training programs.",
  },
];

const useCases = [
  { icon: <Target className="w-5 h-5" />, title: "High Performing Culture", description: "Build a culture of excellence where high performance is the norm" },
  { icon: <Users2 className="w-5 h-5" />, title: "High Potential Development", description: "Identify and accelerate development of future leaders" },
  { icon: <FileText className="w-5 h-5" />, title: "Succession Management", description: "Ensure leadership continuity with robust planning" },
  { icon: <Building2 className="w-5 h-5" />, title: "Talent Mobility", description: "Enable seamless talent movement across roles and functions" },
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
      <section className="section-padding relative bg-[#1f2a33]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-white mb-6">
              Our Assessment Solutions
            </h2>
            <p className="text-body text-white/80">
              Comprehensive assessment tools and methodologies designed to provide accurate, actionable insights for talent decisions.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {assessments.map((assessment, index) => (
              <motion.div
                key={assessment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-white/10 hover:shadow-2xl transition-all duration-300 flex flex-col"
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

                <ul className="space-y-2 mb-6 flex-1">
                  {assessment.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={assessment.link}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Deliverables
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Architecting the Leadership
            </h2>
            <p className="text-body text-muted-foreground">
              Our comprehensive assessment deliverables provide actionable insights for both individuals and organizations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-card rounded-xl border border-border"
              >
                <h3 className="font-serif font-semibold text-xl text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Applications
            </span>
            <h2 className="heading-section text-foreground mb-6">
              How Organizations Use Our Assessments
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <h4 className="font-serif font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#1f2a33] relative">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-blue-400 font-medium text-sm uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h2 className="heading-section text-white mb-6">
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
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="text-4xl font-serif font-bold text-white/20 mb-4">{phase.step}</div>
                <h4 className="font-serif font-semibold text-lg text-white mb-2">{phase.title}</h4>
                <p className="text-sm text-white/70">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Benefits
              </span>
              <h2 className="heading-section text-foreground mb-6">
                Why Choose Our Assessment Solutions
              </h2>
              <ul className="space-y-4">
                {[
                  "Objective, evidence-based talent decisions",
                  "Reduced hiring risks and costs",
                  "Improved employee engagement and retention",
                  "Better alignment of talent to business needs",
                  "Transparent career pathways and development resources",
                  "Data-driven succession planning",
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
                <div className="text-center">
                  <ClipboardCheck className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h4 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Ready to Make Better Talent Decisions?
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss how our assessment solutions can help you identify, evaluate, and develop your talent.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Schedule a Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TalentAssessment;
