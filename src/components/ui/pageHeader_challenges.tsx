import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: ReactNode;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
}

const PageHeader = ({
  title,
  subtitle,
  badge,
  backgroundImage,
}: PageHeaderProps) => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-white">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {badge && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-black/80 font-medium text-sm uppercase tracking-widest mb-4"
              >
                {badge}
              </motion.span>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="heading-display text-black mb-6"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-lg md:text-xl text-black/85 leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>

          {/* RIGHT: IMAGE */}
          {backgroundImage && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <img
                src={backgroundImage}
                alt=""
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
              />
            </motion.div>
          )}

        </div>
      </div>

      {/* OPTIONAL: bottom fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
};

export default PageHeader;
