import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WatIsPandiculatie = () => {
  return (
    <section id="wat-is-pandiculatie" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-8 text-foreground">
            Wat is pandiculatie?
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Pandiculatie is de <strong className="text-foreground">natuurlijke reactie</strong> van
              je zenuwstelsel om spierspanning los te laten. Denk aan het rekken
              en gapen als je wakker wordt — dat is pandiculatie in actie.
            </p>

            <p>
              Bij chronische spierspanning zijn je hersenen "vergeten" hoe ze
              bepaalde spieren moeten ontspannen. Door jarenlange stress,
              verkeerde houdingen of letsel raken spieren{" "}
              <strong className="text-foreground">permanent aangespannen</strong> — een toestand die
              Thomas Hanna <em>"Sensory Motor Amnesia"</em> (SMA) noemde.
            </p>

            <p>
              Pandiculatie herstelt de communicatie tussen je hersenen en je
              spieren. Het is geen stretching, geen massage, geen medicatie.
              Het is een <strong className="text-foreground">actief leerproces</strong> waarmee je
              je spieren opnieuw leert ontspannen.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          variants={fadeUp}
          className="mt-16 p-8 md:p-12 bg-sage-light rounded-2xl border border-primary/10"
        >
          <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
            Het verschil met stretching
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
            <div>
              <h4 className="font-sans font-semibold text-foreground mb-2">Stretching</h4>
              <p>
                Trekt passief aan een spier. De spier vecht terug met een
                strekreflex. Het effect is tijdelijk omdat de hersenen niet
                opnieuw leren.
              </p>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-primary mb-2">Pandiculatie ✓</h4>
              <p>
                Activeert bewust de spier, ontspant langzaam en herstelt de
                hersencontrole. Het effect is <strong className="text-foreground">blijvend</strong>{" "}
                omdat het zenuwstelsel opnieuw leert.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WatIsPandiculatie;
