import { Users, Target, Lightbulb, TrendingUp, Award, Compass } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceCard from "@/components/ui/ServiceCard";
import teamImage from "@/assets/team-collaboration.jpg";

const services = [
  {
    title: "Talent Development",
    description: "Comprehensive leadership programs that transform potential into exceptional performance.",
    icon: <Users className="w-6 h-6" />,
    href: "/talent-development",
  },
  {
    title: "Talent Assessment",
    description: "Scientific evaluation frameworks that identify and nurture high-potential talent.",
    icon: <Target className="w-6 h-6" />,
    href: "/talent-assessment",
  },
  {
    title: "Leadership Excellence",
    description: "Executive coaching and development programs for senior leadership transformation.",
    icon: <Award className="w-6 h-6" />,
    href: "/talent-development",
  },
  {
    title: "Organisational Strategy",
    description: "Strategic consulting to align talent initiatives with business objectives.",
    icon: <Compass className="w-6 h-6" />,
    href: "/challenges",
  },
  {
    title: "Culture Transformation",
    description: "Building high-performing organizational cultures that drive sustainable success.",
    icon: <Lightbulb className="w-6 h-6" />,
    href: "/challenges",
  },
  {
    title: "Succession Planning",
    description: "Future-ready leadership pipelines ensuring seamless organizational continuity.",
    icon: <TrendingUp className="w-6 h-6" />,
    href: "/challenges",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <img src={teamImage} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Top Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <div className="w-24 h-1 bg-primary rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Our Expertise
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Comprehensive Talent Solutions
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-body text-muted-foreground">
            We offer end-to-end talent management solutions designed to build 
            world-class leadership capabilities and drive organizational excellence.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                {...service}
                delay={0}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default ServicesOverview;
