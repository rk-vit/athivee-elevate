import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import forestBg from "@/assets/forst.png"
import {
  ArrowRight,
  Zap,
  Star,
  GitBranch,
  GraduationCap,
  Plane,
  Heart,
  Users,
  Briefcase,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHeader from "@/components/ui/pageHeader_challenges";
import chessImage from "@/assets/chess.png";

const challenges = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "High Performing Culture",
    description:
      "Build a culture of excellence where high performance is the norm, not the exception.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "High Potential Development",
    description:
      "Identify and accelerate the development of your organization's future leaders.",
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Succession Management",
    description:
      "Ensure leadership continuity with robust succession planning and development.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Employee Development",
    description:
      "Create development pathways for employees at every level of the organization.",
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: "Talent Mobility",
    description:
      "Enable seamless talent movement across roles, functions, and geographies.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Talent Engagement",
    description:
      "Drive engagement and retention through meaningful development opportunities.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Women’s Leadership Development",
    description:
      "Accelerate women leaders with targeted development and advancement programs.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "First-Time Managers",
    description:
      "Equip new managers with essential skills for their leadership transition.",
  },
];

const Challenges = () => {
  return (
    <Layout>
      {/* HERO */}
      <PageHeader
        badge="Solutions"
        title="Solving Your Talent Challenges"
        subtitle="We address the most pressing talent challenges organizations face today, with proven solutions that deliver measurable results."
        backgroundImage={chessImage}
      />

      {/* HERO → CONTENT TRANSITION */}
      <div className="relative h-24 bg-background">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* CHALLENGES GRID (OVERLAPPING HERO) */}
      {/* CHALLENGES GRID — FOREST BACKGROUND */}
<section
  className="relative -mt-24 section-padding overflow-hidden shadow-[inset_0_80px_80px_-60px_rgba(0,0,0,0.25)]"
  style={{
    backgroundImage: `url(${forestBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-[#0f1c24]/80" />

  {/* SOFT TOP FADE (SEPARATION FROM HERO) */}
  <div className="absolute top-0 inset-x-0 h-24" />


  {/* CONTENT */}
  <div className="container-custom relative z-10">
    {/* SECTION DIVIDER */}
    <div className="flex justify-center mb-16">
      <div className="h-px w-24 bg-white/30" />
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {challenges.map((challenge, index) => (
        <motion.div
          key={challenge.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="
            group rounded-2xl 
            bg-white/95 backdrop-blur-sm
            border border-white/20 
            p-6
            hover:shadow-2xl 
            transition-all
          "
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
            <div className="text-primary group-hover:text-primary-foreground transition-colors">
              {challenge.icon}
            </div>
          </div>

          <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
            {challenge.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4">
            {challenge.description}
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* IMPACT SECTION */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Our Impact
              </span>

              <h2 className="heading-section text-foreground mb-6">
                Transforming Organizations Through Talent
              </h2>

              <p className="text-body text-muted-foreground mb-8 max-w-xl">
                Our solutions help organizations overcome complex talent challenges
                and build leadership capability at scale.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "40%", label: "Leadership Readiness" },
                  { value: "60%", label: "Reduced External Hiring" },
                  { value: "35%", label: "Engagement Improvement" },
                  { value: "50%", label: "Faster Competency" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-serif font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-primary/5 border border-primary/10" />
                <div className="absolute inset-8 rounded-2xl bg-primary/10 border border-primary/20" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <div className="text-6xl font-serif font-bold text-primary mb-2">
                      95%
                    </div>
                    <div className="text-muted-foreground">
                      Client Satisfaction Rate
                    </div>
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

export default Challenges;
