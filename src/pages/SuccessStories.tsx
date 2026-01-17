import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import pageHeaderImage from "@/assets/success_stories_book.png";

const testimonials = [
  {
    quote:
      "Athivee's approach to leadership development has transformed our entire management team. The results have been remarkable.",
    author: "Chief Human Resources Officer",
    company: "Fortune 500 Manufacturing Company",
    rating: 5,
  },
  {
    quote:
      "Their assessment methodology gave us unprecedented insights into our talent landscape. We now make much better talent decisions.",
    author: "VP of Talent Management",
    company: "Global Technology Company",
    rating: 5,
  },
  {
    quote:
      "The leadership program was genuinely transformative. Our participants returned with new perspectives and enhanced capabilities.",
    author: "Learning & Development Director",
    company: "International Financial Services",
    rating: 5,
  },
];

const caseStudies = [
  {
    title: "Building a Leadership Pipeline",
    industry: "Manufacturing",
    challenge: "Lack of ready-now successors for critical roles",
    solution:
      "Comprehensive leadership development program with assessment centres",
    results: [
      "40% improvement in succession readiness",
      "75% internal promotion rate",
      "Reduced external hiring by 60%",
    ],
  },
  {
    title: "Transforming First-Time Managers",
    industry: "Technology",
    challenge:
      "High-performing individual contributors struggling in management roles",
    solution: "Intensive manager development program with coaching",
    results: [
      "50% improvement in team engagement",
      "35% faster time to productivity",
      "90% participant satisfaction",
    ],
  },
  {
    title: "Accelerating Women Leaders",
    industry: "Financial Services",
    challenge: "Underrepresentation of women in senior leadership",
    solution: "Targeted women's leadership development initiative",
    results: [
      "30% increase in women in senior roles",
      "Enhanced leadership pipeline",
      "Industry recognition for D&I",
    ],
  },
];

const SuccessStories = () => {
  return (
    <Layout>
      {/* IMAGE-ONLY HERO */}
      <section className="relative min-h-[100svh] bg-[#f6f6f4] flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(180deg, #ffffff 0%, #f2f2ee 100%),
              radial-gradient(circle at center, rgba(0,0,0,0.05), transparent 55%)
            `,
          }}
        />

        <div className="relative z-10 w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="-translate-y-8 sm:-translate-y-14"
          >
            <img
              src={pageHeaderImage}
              alt="Success Stories Book"
              className="
                block
                w-[120vw]
                sm:w-[100vw]
                md:max-w-xl
                lg:max-w-3xl
                xl:max-w-4xl
                2xl:max-w-5xl
                max-w-none
                mx-auto
                drop-shadow-[0_60px_120px_rgba(0,0,0,0.22)]
              "
            />
          </motion.div>
        </div>
      </section>

      {/* SOFT TRANSITION */}
      <div className="h-24 bg-gradient-to-b from-[#f6f6f4] to-background" />

      {/* TESTIMONIALS */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="heading-section text-foreground">
              What Our Clients Say
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border border-border transition-all
                  ${
                    index === 1
                      ? "bg-card shadow-xl scale-[1.03]"
                      : "bg-card/80"
                  }
                `}
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  “{t.quote}”
                </p>
                <div>
                  <p className="font-medium text-foreground">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-24 h-px bg-border mx-auto my-20" />

      {/* CASE STUDIES */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Impact Stories
            </span>
            <h2 className="heading-section text-foreground">
              Transformations That Matter
            </h2>
          </AnimatedSection>

          <div className="space-y-10">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-card rounded-2xl border border-border pl-10"
              >
                <div className="absolute left-4 top-8 bottom-8 w-[2px] bg-primary/20" />

                <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <span className="inline-block text-sm text-primary font-medium mb-2">
                      {study.industry}
                    </span>
                    <h3 className="heading-card text-foreground mb-4">
                      {study.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wider">
                          Challenge
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wider">
                          Solution
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {study.solution}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wider">
                          Results
                        </h4>
                        <ul className="space-y-2">
                          {study.results.map((r) => (
                            <li
                              key={r}
                              className="text-sm text-muted-foreground flex gap-2"
                            >
                              <span className="text-primary font-semibold">
                                •
                              </span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-24 h-px bg-border mx-auto my-20" />

      {/* GALLERY */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Gallery
            </span>
            <h2 className="heading-section text-foreground">
              Moments of Transformation
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="
                  aspect-square rounded-xl
                  bg-gradient-to-br from-secondary to-secondary/60
                  flex items-center justify-center
                "
              >
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  Coming Soon
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStories;
