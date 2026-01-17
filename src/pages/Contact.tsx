import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHeader from "@/components/ui/pageHeader_contact";
import bgImage from "@/assets/telephone.png";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Layout>
      {/* HEADER */}
      <PageHeader
        badge="Contact Us"
        title="Let's Start a Conversation"
        subtitle="Ready to transform your organization's leadership capabilities? Get in touch with our team to discuss your needs."
        backgroundImage={bgImage}
      />

      {/* DARK CONTACT SECTION */}
      <section className="relative section-padding bg-[#1f2b34] text-white overflow-x-hidden">
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative">

            {/* DESKTOP-ONLY DIVIDER */}
            <div className="hidden lg:block absolute top-16 bottom-16 left-1/2 w-px bg-white/10 pointer-events-none" />

            {/* CONTACT FORM */}
            <AnimatedSection direction="left">
              <div className="bg-[#23323d] rounded-2xl border border-white/10 p-8">
                <h2 className="heading-card text-white mb-6">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif font-semibold text-xl text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-white/70 max-w-sm mx-auto">
                      We've received your message and will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          First Name
                        </label>
                        <Input className="w-full max-w-full" placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Last Name
                        </label>
                        <Input className="w-full max-w-full" placeholder="Doe" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <Input
                        className="w-full max-w-full"
                        type="email"
                        placeholder="john@company.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Company
                      </label>
                      <Input className="w-full max-w-full" placeholder="Your Company" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        How can we help?
                      </label>
                      <Textarea
                        className="w-full max-w-full"
                        placeholder="Tell us about your needs..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full group">
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* CONTACT INFO */}
            <AnimatedSection direction="right">
              <div className="space-y-10">
                <div>
                  <h2 className="heading-card text-white mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-white/70 max-w-md">
                    Whether you're looking to develop leaders, assess talent,
                    or transform your organization, we're here to help.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* EMAIL */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <a
                        href="mailto:info@athivee.com"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        info@athivee.com
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Address</h3>
                      <p className="text-white/70">
                        123 Business District<br />
                        Corporate Plaza, Suite 100<br />
                        City, Country
                      </p>
                    </div>
                  </div>
                </div>

                {/* MAP */}
                <div className="aspect-video rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-white/50 text-sm uppercase tracking-wider">
                    Map Integration Coming Soon
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <AnimatedSection>
              <h2 className="heading-section text-foreground mb-4">
                Ready to Transform Your Leadership?
              </h2>
              <p className="text-body text-muted-foreground mb-8">
                Schedule a consultation with our experts to discuss how we can
                help you achieve your leadership goals.
              </p>
              <Button size="lg" className="group">
                Schedule a Call
                <Phone className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
