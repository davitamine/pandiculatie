import { motion } from "framer-motion";
import heroImage from "@/assets/hero-pandiculation.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Persoon die een natuurlijke strekbeweging maakt in de natuur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="relative z-10 section-padding max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 text-balance"
        >
          Bevrijd je lichaam van chronische spierspanning
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl leading-relaxed"
        >
          Ontdek pandiculatie — de natuurlijke bewegingstechniek waarmee je
          hersenen je spieren leren ontspannen. Zonder kracht, zonder pijn.
        </motion.p>

        <motion.a
          href="#wat-is-pandiculatie"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
        >
          Meer ontdekken
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
