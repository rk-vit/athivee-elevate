import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const LeadershipArchitecture = () => {
  return (
    <ServiceLayout
      badge="Service"
      title="Leadership Architecture"
      subtitle="Building scalable leadership capability across the enterprise."
    >
      <AnimatedSection>
        <p className="text-body text-muted-foreground max-w-3xl">
          Leadership Architecture provides a structured, enterprise-wide approach
          to leadership development across all levels.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <ul className="grid md:grid-cols-2 gap-6 text-muted-foreground">
          <li className="p-6 border rounded-xl bg-card">Leadership competency frameworks</li>
          <li className="p-6 border rounded-xl bg-card">Multi-level development journeys</li>
          <li className="p-6 border rounded-xl bg-card">Succession planning integration</li>
          <li className="p-6 border rounded-xl bg-card">Leadership culture transformation</li>
        </ul>
      </AnimatedSection>
    </ServiceLayout>
  );
};

export default LeadershipArchitecture;
