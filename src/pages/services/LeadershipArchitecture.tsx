import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceLayout from "@/pages/services/ServiceLayout";

const LeadershipExcel = () => {
  return (
    <ServiceLayout
      badge="Service"
      title="Leadership Excel"
      subtitle="Accelerating the development of high-potential leaders for critical roles."
    >
      <AnimatedSection>
        <p className="text-body text-muted-foreground max-w-3xl">
          Leadership Excel is an intensive, outcome-driven program designed to
          fast-track high-potential individuals into senior leadership readiness.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="font-semibold mb-4">What We Focus On</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Strategic thinking & decision-making</li>
              <li>• Executive presence</li>
              <li>• Leading complexity and change</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">How Leaders Grow</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Coaching & mentoring</li>
              <li>• Real business challenges</li>
              <li>• Continuous feedback loops</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </ServiceLayout>
  );
};

export default LeadershipExcel;
