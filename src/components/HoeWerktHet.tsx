import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Aanspannen",
    description:
      "Je spant de al gespannen spier bewust nog iets verder aan. Dit 'wekt' de hersenen en herstelt het bewustzijn van die spier.",
  },
  {
    number: "02",
    title: "Langzaam ontspannen",
    description:
      "Je laat de spanning heel langzaam en gecontroleerd los. Dit is het leermoment: je hersenen leren de spier weer aan te sturen.",
  },
  {
    number: "03",
    title: "Volledig loslaten",
    description:
      "Je ontspant de spier volledig en merkt het verschil. Met herhaling wordt dit de nieuwe 'standaard' voor je zenuwstelsel.",
  },
];

const HoeWerktHet = () => {
  return (
    <section id="hoe-werkt-het" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-16 text-foreground"
        >
          Hoe werkt het?
        </motion.h2>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex gap-6 md:gap-10 items-start"
            >
              <span className="text-5xl md:text-6xl font-serif font-bold text-primary/20 shrink-0 leading-none">
                {step.number}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoeWerktHet;
