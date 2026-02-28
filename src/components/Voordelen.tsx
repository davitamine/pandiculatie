import { motion } from "framer-motion";

const benefits = [
  {
    title: "Pijnverlichting",
    description: "Verminder chronische rug-, nek- en schouderpijn door de oorzaak aan te pakken, niet het symptoom.",
    icon: "🌿",
  },
  {
    title: "Betere houding",
    description: "Herstel je natuurlijke houding zonder geforceerde correcties. Je lichaam vindt zelf de balans terug.",
    icon: "🧘",
  },
  {
    title: "Meer bewegingsvrijheid",
    description: "Beweeg soepeler en vrijer. Spieren die je niet meer voelde, worden weer aanspreekbaar.",
    icon: "🌊",
  },
  {
    title: "Stressvermindering",
    description: "Chronische spanning is vaak stress opgeslagen in je lichaam. Pandiculatie helpt die los te laten.",
    icon: "☀️",
  },
  {
    title: "Zelfstandig toepasbaar",
    description: "Je hebt geen therapeut nodig. Pandiculatie kun je thuis beoefenen, op je eigen tempo.",
    icon: "🏠",
  },
  {
    title: "Blijvend resultaat",
    description: "Omdat je zenuwstelsel opnieuw leert, zijn de resultaten duurzaam — niet tijdelijk.",
    icon: "✨",
  },
];

const Voordelen = () => {
  return (
    <section id="voordelen" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-16 text-foreground text-center"
        >
          Wat kan pandiculatie voor jou betekenen?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <span className="text-3xl mb-4 block">{benefit.icon}</span>
              <h3 className="text-xl font-serif font-semibold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Voordelen;
