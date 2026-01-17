import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/pageHeader_TD";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface ServiceLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const ServiceLayout = ({ badge, title, subtitle, children }: ServiceLayoutProps) => {
  return (
    <Layout>
      <PageHeader badge={badge} title={title} subtitle={subtitle} />

      <section className="section-padding bg-background">
        <div className="container-custom space-y-24">
          {children}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#f6f2e8]">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-section text-foreground mb-6">
              Let’s Build Leadership That Lasts
            </h2>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Speak with our experts to understand how this service can be tailored to your organization.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Schedule a Conversation
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceLayout;
