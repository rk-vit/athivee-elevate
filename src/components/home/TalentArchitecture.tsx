import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import talentImage from "@/assets/talent-network.jpg";

const pillars = [
  {
    title: "Assess",
    description: "Identify potential through scientific assessment methodologies",
    color: "bg-primary",
  },
  {
    title: "Develop",
    description: "Transform capabilities through immersive learning experiences",
    color: "bg-navy-light",
  },
  {
    title: "Deploy",
    description: "Strategically place talent for maximum organizational impact",
    color: "bg-accent",
  },
  {
    title: "Sustain",
    description: "Build lasting cultures of excellence and continuous growth",
    color: "bg-primary",
  },
];

const TalentArchitecture = () => {
  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      {/* Top Separator with decoration */}
      <div className="absolute top-0 inset-x-0">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-accent rounded-full" />
      </div>

      {/* Decorative image */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 opacity-10">
        <img src={talentImage} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Building Blocks Visual */}
              <div className="grid grid-cols-2 gap-5">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="relative group cursor-pointer"
                  >
                    <div className={`${pillar.color} p-7 rounded-2xl text-primary-foreground aspect-square flex flex-col justify-end shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="font-serif font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="relative z-10">
                        <h4 className="font-serif font-semibold text-xl mb-2">{pillar.title}</h4>
                        <p className="text-sm text-primary-foreground/85 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Center Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 150 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-white shadow-2xl border-4 border-muted flex items-center justify-center"
              >
                <span className="font-serif font-bold text-3xl text-primary">TA</span>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Talent Architecture
            </span>
            <h2 className="heading-section text-foreground mb-4">
              Building Your Talent Pool
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-8" />
            <p className="text-body text-muted-foreground mb-8">
              Our proprietary Talent Architecture framework provides a systematic 
              approach to building world-class leadership capabilities. We don't just 
              develop individuals—we architect entire talent ecosystems.
            </p>
            <ul className="space-y-5">
              {[
                "Holistic assessment of current and potential capabilities",
                "Customized development journeys aligned with business goals",
                "Strategic talent deployment for maximum impact",
                "Sustainable frameworks for continuous excellence",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default TalentArchitecture;
