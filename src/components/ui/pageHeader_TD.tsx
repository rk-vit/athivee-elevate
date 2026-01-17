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
    <section
      className="
        relative
        bg-white
        overflow-hidden
        pt-24
        sm:pt-28
        lg:pt-28
        pb-16
        lg:pb-24
      "
    >
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">

          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: window.innerWidth >= 1024 ? -150 : -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl space-y-4 lg:space-y-6"
            >


            {badge && (
              <span className="inline-block text-black/80 font-medium text-xs uppercase tracking-widest">
                {badge}
              </span>
            )}

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-black leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base sm:text-lg text-black/80 leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* RIGHT: IMAGE */}
          {backgroundImage && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: -50, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                relative
                flex
                justify-center
                lg:justify-end
                -translate-y-6
                sm:-translate-y-12
                lg:translate-y-0
              "
            >
              <img
                src={backgroundImage}
                alt=""
                className="
                  w-full
                  max-w-[300px]
                  sm:max-w-[360px]
                  lg:max-w-lg
                  object-contain
                "
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom fade (desktop only) */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
};

export default PageHeader;
