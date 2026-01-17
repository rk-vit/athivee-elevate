import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBG from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* ===== Subtle dotted background (very light) ===== */}
      {/* ===== Subtle dotted background (visible but premium) ===== */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage:
            "radial-gradient(#d1d5db 1.2px, transparent 1.2px)",
          backgroundSize: "20px 20px",
          opacity: 0.6,
        }}
      />


      {/* ===== Content Wrapper ===== */}
      <div className="relative z-10 w-full container-custom pt-32 pb-24">
        <div className="grid lg:grid-cols-[1fr_auto] items-center gap-20">

          {/* ================= CENTER CONTENT ================= */}
          <div className="max-w-4xl mx-auto text-center">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center items-center gap-3 mb-6"
            >
              <span className="h-6 w-px bg-slate-300" />
              <span className="text-slate-600 text-sm tracking-wider uppercase font-medium">
                Leadership Architects
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              <span className="text-blue-600">Building</span>{" "}
              <span className="text-slate-900">Tomorrow&apos;s</span>
              <br />
              <span className="relative inline-block text-red-600">
                Leaders
                {/* underline animation */}
                <motion.span
                  className="absolute left-0 -bottom-2 h-1 w-full bg-red-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>{" "}
              <span className="text-slate-900">Today</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              We architect transformative leadership journeys, cultivating
              exceptional talent that drives organizational excellence and
              sustainable growth.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-slate-900 text-white hover:bg-slate-800 px-8"
              >
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8"
              >
                <Link to="/about">Discover Our Approach</Link>
              </Button>
            </motion.div>
          </div>

          {/* ================= RIGHT SPEAKER IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="hidden lg:flex justify-end"
          >
            <img
              src={heroBG}
              alt="Leadership Speaker"
              className="max-h-[85vh] w-auto object-contain"
            />
          </motion.div>





        </div>
      </div>
    </section>
  );
};

export default HeroSection;
