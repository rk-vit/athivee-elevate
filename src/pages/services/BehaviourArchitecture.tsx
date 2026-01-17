import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const BehaviourArchitecture = () => {
  return (
    <ServiceLayout
      badge="Service"
      title="Behaviour Architecture"
      subtitle="Designing the behavioural foundation that enables effective leadership at every level."
    >
      <AnimatedSection>
        <h3 className="heading-section mb-6">What This Service Is</h3>
        <p className="text-body text-muted-foreground max-w-3xl">
          Behaviour Architecture focuses on defining, measuring, and embedding the
          behaviours that drive leadership effectiveness. We help organizations
          translate abstract values into observable leadership actions.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <h3 className="heading-section mb-8">How We Do It</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Behaviour Mapping", "Define leadership behaviours aligned to strategy."],
            ["Assessment", "Measure current behavioural gaps across levels."],
            ["Integration", "Embed behaviours into performance and talent systems."]
          ].map(([title, desc]) => (
            <div key={title} className="p-8 rounded-2xl border bg-card">
              <h4 className="font-semibold text-lg mb-3">{title}</h4>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h3 className="heading-section mb-6">Outcomes</h3>
        <ul className="space-y-4 text-muted-foreground max-w-2xl">
          <li>• Clear behavioural expectations for leaders</li>
          <li>• Consistency in leadership decision-making</li>
          <li>• Strong alignment between values and actions</li>
        </ul>
      </AnimatedSection>
    </ServiceLayout>
  );
};

export default BehaviourArchitecture;
