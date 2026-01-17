import { motion } from "framer-motion";

const PageHeaderInsights = ({ badge, title, subtitle, backgroundImage }) => {
  return (
    <section className="relative overflow-hidden bg-[#f6f6f4] min-h-[100svh] flex items-center">
      {/* Architectural Wall Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(180deg, #fafafa 0%, #f0f0ec 100%),
            radial-gradient(circle at top left, rgba(0,0,0,0.04), transparent 45%)
          `,
        }}
      />

      {/* Subtle Grain */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]" />

      {/* Content */}
      <div className="relative z-10 container-custom py-28 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="tracking-[0.25em] text-xs font-medium text-muted-foreground uppercase">
            {badge}
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-semibold text-foreground mt-4 mb-5 leading-tight">
            {title}
          </h1>


          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Right */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="
          block 
          mt-12 sm:mt-16 lg:mt-0
          -translate-y-24 sm:-translate-y-32 lg:translate-y-0
        "
      >
        <img
          src={backgroundImage}
          alt="Workspace"
          className="mx-auto w-full max-w-s sm:max-w-sm lg:max-w-xl drop-shadow-[0_40px_80px_rgba(0,0,0,0.18)]"
        />
      </motion.div>


      </div>
    </section>
  );
};

export default PageHeaderInsights;
