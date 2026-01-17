import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, href, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Link to={href} className="group block h-full">
        <div className="h-full p-8 bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-1">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <div className="text-primary group-hover:text-primary-foreground transition-colors">
              {icon}
            </div>
          </div>
          <h3 className="heading-card text-foreground mb-3">{title}</h3>
          <p className="text-body-sm text-muted-foreground mb-6">{description}</p>
          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
