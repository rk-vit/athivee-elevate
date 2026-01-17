import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import leadershipImage from "../../../public/cta.png";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Top Separator */}
      <div className="absolute top-0 inset-x-0 z-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-accent rounded-full" />
      </div>

      {/* Background Image - No Overlay */}
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={leadershipImage} 
          alt="Leadership training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>


      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="container-custom relative z-10 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-white/80 font-medium text-sm uppercase tracking-widest mb-6"
          >
            Get Started Today
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-section text-white mb-6"
          >
            Ready to Transform Your Organization?
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-1 bg-accent rounded-full mx-auto mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed"
          >
            Let's discuss how our tailored solutions can help you build 
            exceptional leadership capabilities and drive sustainable success.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 group text-base px-8">
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-primary hover:bg-white/10 text-base px-8">
              <Link to="/success-stories">
                <Phone className="mr-2 w-5 h-5" />
                View Success Stories
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
