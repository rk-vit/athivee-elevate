import { motion } from "framer-motion";
import { FileText, Download, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHeader from "@/components/ui/pageHeader_insights";
import DeskImage from "@/assets/desk.png";

const resources = [
  {
    type: "Article",
    title: "The Future of Leadership Development",
    description:
      "Exploring emerging trends and best practices in developing tomorrow's leaders.",
    date: "Coming Soon",
  },
  {
    type: "Whitepaper",
    title: "Building High-Performing Teams",
    description:
      "A comprehensive guide to creating and sustaining team excellence.",
    date: "Coming Soon",
  },
  {
    type: "Case Study",
    title: "Leadership Transformation at Scale",
    description:
      "How one organization transformed its entire leadership culture.",
    date: "Coming Soon",
  },
  {
    type: "Guide",
    title: "First-Time Manager Success",
    description:
      "Essential strategies for new managers stepping into leadership.",
    date: "Coming Soon",
  },
  {
    type: "Report",
    title: "State of Leadership 2024",
    description:
      "Key insights and trends from our annual leadership research.",
    date: "Coming Soon",
  },
  {
    type: "Toolkit",
    title: "Succession Planning Framework",
    description:
      "Practical tools for building robust succession pipelines.",
    date: "Coming Soon",
  },
];

const Resources = () => {
  return (
    <Layout>
      {/* HERO */}
      <PageHeader
        badge="Resources"
        title="Insights & Knowledge"
        subtitle="Explore our collection of articles, whitepapers, and tools to support your leadership and talent development journey."
        backgroundImage={DeskImage}
      />

      {/* RESOURCES GRID */}
      <section className="section-padding bg-[#fafafa]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white/90 backdrop-blur rounded-2xl border border-border p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {resource.type}
                  </span>

                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {resource.date}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {resource.description}
                </p>

                <button
                  disabled
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground opacity-50 cursor-not-allowed"
                >
                  <Download className="w-4 h-4" />
                  Coming Soon
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="section-padding bg-[#0f172a]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <FileText className="w-12 h-12 text-white/40 mx-auto mb-6" />

              <h2 className="font-serif text-3xl text-white mb-4">
                Stay Ahead of Leadership Thinking
              </h2>

              <p className="text-white/70 mb-8">
                Subscribe to receive our latest insights, research, and tools
                directly in your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                />
                <button className="px-6 py-3 rounded-lg bg-white text-[#0f172a] font-medium hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
