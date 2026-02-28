import { motion } from "framer-motion";

const reflexes = [
  {
    name: "Green Light Reflex",
    dutch: "Actiereflex",
    icon: "🟢",
    description:
      "De 'aan de slag'-reflex. De spieren in de rug van het lichaam trekken samen. Bij gewoontevorming kun je je rugspieren niet meer ontspannen.",
    causes:
      "Te veel hooi op je vork, voortdurende stress, moeite met ontspannen, slechte slaap.",
    symptoms:
      "Rugpijn, hernia, ischias, schouder- en nekpijn, spanningshoofdpijn.",
  },
  {
    name: "Red Light Reflex",
    dutch: "Terugtrekreflex",
    icon: "🔴",
    description:
      "Dit is onze angst- en beschermingsreflex. De spieren aan de voorkant van het lichaam trekken samen, wat leidt tot een voorovergebogen houding en afgeronde schouders.",
    causes:
      "Langdurig zitten, onzekerheid, angst, depressie, emotionele stress of verdriet.",
    symptoms:
      "Oppervlakkige ademhaling, nek- en schouderpijn, hoofdpijn, weinig energie, kniepijn, spijsverteringsproblemen en lage rugpijn.",
  },
  {
    name: "Trauma Reflex",
    dutch: "Vermijdingsreflex",
    icon: "🟡",
    description:
      "De 'wegduik'-reflex waarbij één zijde van het lichaam samentrekt. Denk aan hoe je reageert als je op iets scherps trapt.",
    causes:
      "Blessures, ongelukken, eenzijdig sporten (racketsporten), of gewoontes zoals altijd op één been staan.",
    symptoms:
      "Schouder-/nekpijn, kniepijn, SI-gewrichtsproblemen, scoliose, schijnbaar ongelijke beenlengte.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const DrieReflexen = () => {
  return (
    <section id="drie-reflexen" className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 text-foreground">
            De 3 stressreflexen
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Thomas Hanna ontdekte drie reflexpatronen die aan de basis liggen van
            de meeste chronische spierspanning. Wanneer we "vastlopen" in een van
            deze reflexen, ontstaat{" "}
            <strong className="text-foreground">
              Sensory Motor Amnesia (SMA)
            </strong>{" "}
            — je hersenen verliezen het bewuste contact met bepaalde spieren,
            waardoor ze permanent aangespannen blijven.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reflexes.map((reflex, index) => (
            <motion.div
              key={reflex.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              variants={fadeUp}
              className="p-8 rounded-2xl bg-background border border-border hover:border-primary/20 transition-colors"
            >
              <span className="text-4xl block mb-4">{reflex.icon}</span>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                {reflex.dutch}
              </h3>
              <p className="text-sm text-primary font-medium mb-4">
                {reflex.name}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {reflex.description}
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-foreground">
                    Oorzaken:{" "}
                  </span>
                  <span className="text-muted-foreground">{reflex.causes}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">
                    Symptomen:{" "}
                  </span>
                  <span className="text-muted-foreground">
                    {reflex.symptoms}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrieReflexen;
