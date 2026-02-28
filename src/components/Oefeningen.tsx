import { motion } from "framer-motion";

const exercises = [
  {
    name: "Arch & Flatten",
    dutch: "Rug hollen & afvlakken",
    target: "Rug- en buikspieren",
    description:
      "Lig op je rug met opgetrokken knieën. Hol langzaam je rug (arch), houd even vast, en laat dan heel langzaam los terwijl je je rug naar de vloer drukt (flatten). Ontspan volledig.",
    steps: [
      "Lig op je rug, knieën gebogen, voeten plat op de vloer",
      "Adem in en hol langzaam je onderrug — voel de spanning in je rugspieren",
      "Houd 3-5 seconden aan",
      "Adem uit en laat héél langzaam los — vlak je rug af naar de vloer",
      "Ontspan volledig en merk het verschil",
    ],
    reflex: "Green Light Reflex",
  },
  {
    name: "Diagonal Arch & Curl",
    dutch: "Diagonaal oprollen",
    target: "Schuine buikspieren & zijkant romp",
    description:
      "Vanuit rugligging til je één schouder diagonaal op richting de tegenoverliggende knie. Dit adresseert het trauma-reflexpatroon en herstelt balans tussen links en rechts.",
    steps: [
      "Lig op je rug, knieën gebogen",
      "Breng langzaam je rechterhand naar je linkerknie terwijl je je schouder optilt",
      "Houd de spanning even vast",
      "Laat heel langzaam los en keer terug naar de grond",
      "Herhaal aan de andere kant",
    ],
    reflex: "Trauma Reflex",
  },
  {
    name: "Flower",
    dutch: "De bloem",
    target: "Buikspieren & voorkant lichaam",
    description:
      "Lig op je rug en trek knieën en armen naar je borst (als een bloem die sluit). Laat dan heel langzaam los en open je lichaam volledig. Dit adresseert de red light reflex.",
    steps: [
      "Lig op je rug, armen naast je lichaam",
      "Til langzaam je hoofd op, trek je knieën naar je borst en je armen naar je knieën",
      "Voel de samentrekking van je buikspieren",
      "Laat dan héél langzaam los — strek armen en benen uit",
      "Ontspan volledig in een open positie",
    ],
    reflex: "Red Light Reflex",
  },
  {
    name: "Side Bend",
    dutch: "Zijwaartse buiging",
    target: "Zijspieren (obliques) & taille",
    description:
      "Lig op je zij en til je bovenlichaam en been tegelijk op, zodat je zijspieren samentrekken. Laat langzaam los. Helpt bij het herstellen van symmetrie in het lichaam.",
    steps: [
      "Lig op je rechterzij, rechterarm gestrekt onder je hoofd",
      "Til langzaam je hoofd en rechterbeen tegelijk op — voel je linkerzijspieren samentrekken",
      "Houd kort vast",
      "Laat heel langzaam en gecontroleerd zakken",
      "Herhaal aan de andere kant",
    ],
    reflex: "Trauma Reflex",
  },
  {
    name: "Back Lift",
    dutch: "Rug optillen",
    target: "Gehele rugspieren",
    description:
      "Lig op je buik en til langzaam je hoofd en borstkas van de grond. Dit is de kernbeweging voor de green light reflex — de spieren die je gebruikt om rechtop te staan.",
    steps: [
      "Lig op je buik, handen onder je voorhoofd",
      "Til langzaam je hoofd en bovenrug op — gebruik je rugspieren",
      "Houd de spanning 3-5 seconden",
      "Laat heel langzaam zakken, centimeter voor centimeter",
      "Ontspan volledig en voel het verschil",
    ],
    reflex: "Green Light Reflex",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const reflexColor: Record<string, string> = {
  "Red Light Reflex": "bg-destructive/10 text-destructive",
  "Green Light Reflex": "bg-primary/10 text-primary",
  "Trauma Reflex": "bg-accent/10 text-accent",
};

const Oefeningen = () => {
  return (
    <section id="oefeningen" className="section-padding bg-background">
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
            Oefeningen
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Deze somatische oefeningen zijn gebaseerd op de methode van Thomas
            Hanna. Voer ze langzaam en bewust uit — het gaat niet om kracht of
            flexibiliteit, maar om het{" "}
            <strong className="text-foreground">
              herstellen van de communicatie
            </strong>{" "}
            tussen je hersenen en je spieren.
          </p>
        </motion.div>

        <div className="space-y-8">
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={fadeUp}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex flex-wrap items-start gap-3 mb-4">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  {exercise.dutch}
                </h3>
                <span className="text-sm text-muted-foreground italic">
                  ({exercise.name})
                </span>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${reflexColor[exercise.reflex] || "bg-muted text-muted-foreground"}`}
                >
                  {exercise.reflex}
                </span>
              </div>

              <p className="text-sm text-primary font-medium mb-3">
                Doelgebied: {exercise.target}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-5">
                {exercise.description}
              </p>

              <div className="bg-background rounded-xl p-5 border border-border">
                <h4 className="font-sans font-semibold text-foreground text-sm mb-3 uppercase tracking-wide">
                  Stappen
                </h4>
                <ol className="space-y-2">
                  {exercise.steps.map((step, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                    >
                      <span className="text-primary font-semibold shrink-0">
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
          className="mt-12 p-8 rounded-2xl bg-sage-light border border-primary/10 text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Tip:</strong> Doe deze oefeningen
            dagelijks, bij voorkeur 's ochtends of 's avonds. Begin met 3-5
            herhalingen per oefening. Het belangrijkste is{" "}
            <em>langzaamheid</em> en <em>bewustzijn</em> — niet het aantal
            herhalingen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Oefeningen;
