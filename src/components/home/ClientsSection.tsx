import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

/* ================================
   CLIENT LOGOS
================================ */
import Amway from "@/assets/logos/clients/amyway.png";
import Beroe from "@/assets/logos/clients/beroe.png";
import BgrNeo from "@/assets/logos/clients/bgrneo.png";
import Enexio from "@/assets/logos/clients/enexio.png";
import IndiaCements from "@/assets/logos/clients/ic.png";
import MRF from "@/assets/logos/clients/mrf.png";
import Nippo from "@/assets/logos/clients/nippo.png";
import NipponPaint from "@/assets/logos/clients/nippon-paint.png";
import Novares from "@/assets/logos/clients/novares.png";
import NSK from "@/assets/logos/clients/NSK.png";
import Precot from "@/assets/logos/clients/perecot.png";
import Rorito from "@/assets/logos/clients/rorito.png";
import Synergy from "@/assets/logos/clients/synergy.png";
import TataPower from "@/assets/logos/clients/Tata-Power.png";
import TVS from "@/assets/logos/clients/tvs.png";
import Veta from "@/assets/logos/clients/veta.png";
import Witzenmann from "@/assets/logos/clients/witzeman.png";

const clients = [
  { name: "Amway", logo: Amway },
  { name: "Beroe", logo: Beroe },
  { name: "BGR NEO", logo: BgrNeo },
  { name: "ENEXIO", logo: Enexio },
  { name: "India Cements", logo: IndiaCements },
  { name: "MRF", logo: MRF },
  { name: "NIPPO", logo: Nippo },
  { name: "Nippon Paint", logo: NipponPaint },
  { name: "Novares", logo: Novares },
  { name: "NSK", logo: NSK },
  { name: "PRECOT", logo: Precot },
  { name: "Rorito", logo: Rorito },
  { name: "Synergy", logo: Synergy },
  { name: "Tata Power", logo: TataPower },
  { name: "TVS", logo: TVS },
  { name: "VETA", logo: Veta },
  { name: "Witzenmann", logo: Witzenmann },
];

const ClientsSection = () => {
  return (
    <section className="py-24 bg-[#1f2a33] overflow-hidden">

      {/* Heading */}
      <div className="container-custom mb-14">
        <AnimatedSection className="text-center">
          <span className="block text-sm uppercase tracking-widest font-medium text-blue-400 mb-4">
            Recognized by Analysts
          </span>

          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white">
            Trusted by Leading Organizations Worldwide
          </h2>
        </AnimatedSection>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-6 md:gap-12"
          animate={{ x: [0, -2000] }}   // 🔥 pixel-based scroll
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                px-6 py-5 md:px-10 md:py-6
                bg-white
                rounded-xl
                border border-white/10
                shadow-sm
                flex items-center justify-center
              "
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="
                  h-8 md:h-12
                  w-auto
                  max-w-[120px]
                  object-contain
                  grayscale
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
