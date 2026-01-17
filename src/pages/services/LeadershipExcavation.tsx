import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const LeadershipExcavation = () => {
  return (
    <ServiceLayout
      badge="Service"
      title="Leadership Excavation"
      subtitle="Uncovering hidden leadership potential within your organization."
    >
      <AnimatedSection>
        <p className="text-body text-muted-foreground max-w-3xl">
          Leadership Excavation is designed to identify latent leadership talent
          that traditional assessments often miss.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Potential diagnostics",
            "Strength-based development",
            "Experiential learning"
          ].map(item => (
            <div key={item} className="p-6 border rounded-xl bg-card text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </ServiceLayout>
  );
};

export default LeadershipExcavation;
