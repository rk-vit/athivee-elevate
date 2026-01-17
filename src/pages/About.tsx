import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Users, Award, TrendingUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHeader from "@/components/ui/PageHeader";
import bg_image from "../../public/aboutcover1.png";
import storyBgImage from "../assets/interior.png"
const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do, delivering transformative results.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Integrity",
    description: "We operate with complete transparency and ethical commitment to our clients.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description: "We continuously evolve our methodologies to stay ahead of industry trends.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partnership",
    description: "We work as true partners, deeply invested in our clients' success.",
  },
];

const philosophy = [
  {
    number: "01",
    title: "People First",
    description: "Every organization's success is built on its people. We focus on unlocking human potential.",
  },
  {
    number: "02",
    title: "Science-Based",
    description: "Our methodologies are grounded in behavioral science and proven research frameworks.",
  },
  {
    number: "03",
    title: "Results-Driven",
    description: "We measure success by tangible outcomes and lasting organizational transformation.",
  },
  {
    number: "04",
    title: "Customized Solutions",
    description: "Every organization is unique. Our solutions are tailored to specific contexts and needs.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        badge="About Athivee"
        title={
          <>
            <span
              className="
                inline-block
                bg-gradient-to-r
                from-[#0A4BFF]
                via-[#2F7BFF]
                to-[#6FA8FF]
                bg-[length:200%_100%]
                bg-left
                bg-clip-text
                text-transparent
                font-extrabold
                tracking-tight
              "
            >
              Architecting the <br /> Leadership
            </span> 

          </>
        }
        subtitle="For over 15 years, Athivee has been at the forefront of leadership development and talent transformation, partnering with organizations worldwide to build exceptional leadership capabilities."
        backgroundImage={bg_image}
      />
      
    <section className="py-24 bg-[#1F2A33] relative overflow-hidden">
  <div className="container-custom">
    <div className="max-w-5xl">

      {/* Analyst Label */}
      <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
        Recognized by Analysts
      </span>

      {/* Quote */}
      <div className="mt-8 flex gap-6">
        <div className="text-blue-500 text-7xl leading-none font-serif opacity-40">
          “
        </div>

        <div>
          <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-light">
            Athivee meets the critical need for leadership development across
            all levels of the organization—offering flexibility, depth, and
            a continuous learning experience that delivers lasting impact.
          </p>

          <p className="mt-6 text-sm text-slate-400">
            — Senior Leadership Analyst, Global Talent Research Firm
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 border-t border-slate-600/30" />

      {/* Embedded Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "500+", label: "Leaders Developed" },
          { value: "50+", label: "Organizations Transformed" },
          { value: "15+", label: "Years of Experience" },
          { value: "95%", label: "Client Satisfaction" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
              {stat.value}
            </div>
            <div className="text-slate-400 text-sm text-white tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </div>
</section>


{/* ================= OUR STORY ================= */}
<section className="relative section-padding overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src={storyBgImage} // your imported bg image
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* Darker Overlay (stronger contrast) */}
  <div className="absolute inset-0 bg-[#0F1A22]/90 z-0" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-0" />

  {/* Content */}
  <div className="container-custom relative z-10">
    <AnimatedSection className="max-w-4xl mx-auto text-center">

      {/* OUR STORY label — stronger + accent */}
      <span className="block text-sm uppercase tracking-[0.3em] font-semibold text-blue-300 mb-6">
        Our Story
      </span>

      {/* Headline — bolder & more visible */}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 leading-tight">
        Building Leadership That <br className="hidden sm:block" />
        Endures and Performs
      </h2>

      {/* Body Copy — brighter & heavier */}
      <div className="space-y-6 text-base md:text-lg leading-relaxed text-slate-100 font-normal max-w-3xl mx-auto">
        <p>
          Athivee was founded with a singular vision: to transform how organizations
          develop and nurture leadership talent. Early on, we recognized that
          traditional training approaches rarely delivered lasting change.
        </p>

        <p>
          Today, Athivee is a trusted partner in behavioural assessment, leadership
          development, and organizational transformation. Our proprietary methodologies
          have helped hundreds of organizations build high-performing leadership teams
          across industries.
        </p>

        <p className="font-medium text-white">
          We believe leadership is not defined by skills alone — but by mindset,
          behaviour, and the ability to inspire sustained performance at every level
          of the organization.
        </p>
      </div>

    </AnimatedSection>
  </div>
</section>




      {/* Why Athivee */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="heading-section text-foreground mb-6">
              What Sets Athivee Apart
            </h2>
            <p className="text-body text-muted-foreground">
              Our unique combination of expertise, methodology, and commitment 
              delivers transformative results for our clients.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border text-center group hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <div className="text-primary group-hover:text-primary-foreground transition-colors">
                    {value.icon}
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Our Philosophy
            </span>
            <h2 className="heading-section text-foreground mb-6">
              The Athivee Way
            </h2>
            <p className="text-body text-muted-foreground">
              Our philosophy is built on four foundational pillars that guide 
              every engagement and ensure lasting transformation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 bg-card rounded-xl border border-border hover:shadow-card transition-shadow"
              >
                <div className="flex-shrink-0">
                  <span className="inline-block text-4xl font-serif font-bold text-primary/20">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Leaders Developed" },
              { value: "50+", label: "Organizations Transformed" },
              { value: "15+", label: "Years of Experience" },
              { value: "95%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       Stats */}
    </Layout>
  );
};

export default About;
