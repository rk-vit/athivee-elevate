import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHeader from "@/components/ui/PageHeader";
import pageHeaderImage from "@/assets/elevator.png";
import pageHeaderImageDesktop from "@/assets/elevator_desktop.png"
const methodology = [
  {
    title: "Discovery & Diagnosis",
    description: "Deep understanding of your organizational context, challenges, and aspirations through comprehensive assessment.",
    items: ["Stakeholder interviews", "Culture assessment", "Capability mapping", "Gap analysis"],
  },
  {
    title: "Design & Development",
    description: "Custom-designed interventions that address specific needs while building sustainable capabilities.",
    items: ["Tailored curriculum", "Blended learning approach", "Action learning projects", "Executive coaching"],
  },
  {
    title: "Delivery & Implementation",
    description: "Immersive learning experiences that drive behavioural change and build lasting competencies.",
    items: ["Experiential workshops", "Simulation exercises", "Peer learning", "Real-world application"],
  },
  {
    title: "Measure & Sustain",
    description: "Rigorous evaluation and reinforcement mechanisms to ensure lasting transformation.",
    items: ["Impact assessment", "ROI measurement", "Sustainability frameworks", "Continuous improvement"],
  },
];

const journey = [
  { step: 1, title: "Awareness", description: "Building self-awareness and understanding of current state" },
  { step: 2, title: "Insight", description: "Developing deep insights into behaviour and impact" },
  { step: 3, title: "Practice", description: "Applying new skills in safe, supportive environments" },
  { step: 4, title: "Integration", description: "Embedding new behaviours into daily practice" },
  { step: 5, title: "Mastery", description: "Achieving sustainable excellence and inspiring others" },
];

const Approach = () => {
  return (
    <Layout>
      {/* HERO — IMAGE ONLY */}
{/* HERO — IMAGE ONLY */}
<section className="relative h-screen w-full bg-white overflow-hidden">
  <motion.div
    initial={{ opacity: 0, scale: 0.96, y: 30 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="absolute inset-0 flex items-center justify-center"
  >
    {/* Mobile image */}
    <img
      src={pageHeaderImage}
      alt="Our Approach"
      className="
        block lg:hidden
        w-full h-full
        object-contain
        pointer-events-none
        select-none
      "
    />

    {/* Desktop image */}
    <img
      src={pageHeaderImageDesktop}
      alt="Our Approach"
      className="
        hidden lg:block
        w-full h-full
        object-contain
        pointer-events-none
        select-none
      "
    />
  </motion.div>

  {/* Soft bottom transition */}
  <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
</section>


      {/* Methodology */}
<section className="relative section-padding bg-[#1f2b34] text-white overflow-hidden">
  {/* Subtle background texture */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_45%)]" />

  <div className="container-custom relative z-10">
    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
        Learning Methodology
      </span>

      <h2 className="heading-section text-white mb-6">
        Our Four-Phase Framework
      </h2>

      <p className="text-lg text-white/70">
        A systematic approach that ensures comprehensive understanding,
        targeted development, and measurable outcomes.
      </p>
    </AnimatedSection>

    <div className="space-y-8">
      {methodology.map((phase, index) => (
        <motion.div
          key={phase.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="
            grid lg:grid-cols-12 gap-6 p-8
            bg-white/5 backdrop-blur-sm
            rounded-2xl
            border border-white/10
            hover:border-white/20
            transition-all
          "
        >
          {/* Phase Number */}
          <div className="lg:col-span-1 flex items-start">
            <span className="text-5xl font-serif font-bold text-white/15">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Title + Description */}
          <div className="lg:col-span-4">
            <h3 className="heading-card text-white mb-3">
              {phase.title}
            </h3>
            <p className="text-white/70">
              {phase.description}
            </p>
          </div>

          {/* Bullet Items */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-3">
              {phase.items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-white/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Transformative Journey */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Transformative Journey
            </span>
            <h2 className="heading-section text-foreground mb-6">
              The Path to Leadership Excellence
            </h2>
            <p className="text-body text-muted-foreground">
              Every leader's journey with us follows a carefully orchestrated 
              progression from awareness to mastery.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {journey.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-card rounded-xl p-6 border border-border text-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-serif font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  {index < journey.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                What Makes Us Different
              </span>
              <h2 className="heading-section text-foreground mb-6">
                Beyond Traditional Training
              </h2>
              <p className="text-body text-muted-foreground mb-8">
                While conventional training focuses on knowledge transfer, our approach 
                creates lasting behavioural change through immersive, experiential methods 
                grounded in adult learning principles.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Experiential Learning",
                    description: "Learning by doing, with real-world simulations and action projects.",
                  },
                  {
                    title: "Behavioural Focus",
                    description: "Addressing the underlying behaviours that drive performance.",
                  },
                  {
                    title: "Sustained Impact",
                    description: "Reinforcement mechanisms that ensure lasting transformation.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 bg-primary rounded-xl text-primary-foreground">
                    <div className="text-3xl font-serif font-bold mb-2">70%</div>
                    <div className="text-sm text-primary-foreground/80">Experiential Learning</div>
                  </div>
                  <div className="p-6 bg-cream rounded-xl">
                    <div className="text-3xl font-serif font-bold text-primary mb-2">20%</div>
                    <div className="text-sm text-muted-foreground">Social Learning</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="p-6 bg-cream rounded-xl">
                    <div className="text-3xl font-serif font-bold text-primary mb-2">10%</div>
                    <div className="text-sm text-muted-foreground">Formal Learning</div>
                  </div>
                  <div className="p-6 bg-accent rounded-xl text-accent-foreground">
                    <div className="text-3xl font-serif font-bold mb-2">100%</div>
                    <div className="text-sm text-accent-foreground/80">Commitment to Results</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Approach;
