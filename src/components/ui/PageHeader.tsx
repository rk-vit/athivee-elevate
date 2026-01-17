import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: ReactNode;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, badge, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="heading-display text-black mb-6"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
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
            <div className="relative flex justify-center lg:justify-end">
              <img
                src={backgroundImage}
                alt=""
                className="w-full max-w-md lg:max-w-lg object-contain"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default PageHeader;
