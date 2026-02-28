import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is pandiculatie wetenschappelijk onderbouwd?",
    answer:
      "Ja. Het principe is gebaseerd op neurowetenschappelijke inzichten over hoe het sensorisch-motorische systeem werkt. Thomas Hanna, een leerling van Moshe Feldenkrais, ontwikkelde de methode in de jaren '80 op basis van het concept 'Sensory Motor Amnesia'. Moderne neurowetenschappers bevestigen dat het brein spierpatronen kan herprogrammeren via bewuste beweging.",
  },
  {
    question: "Voor wie is pandiculatie geschikt?",
    answer:
      "Voor iedereen met chronische spierspanning, rugpijn, nekpijn, stijfheid of houdingsproblemen. Het is bijzonder geschikt voor mensen die al veel hebben geprobeerd — zoals stretching, massage of fysiotherapie — zonder blijvend resultaat. De oefeningen zijn zacht en veilig, ook voor ouderen.",
  },
  {
    question: "Hoe snel merk ik resultaat?",
    answer:
      "Veel mensen merken al na de eerste sessie verschil. De spieren voelen losser en je bewustzijn van je lichaam neemt toe. Voor structurele veranderingen is regelmatige oefening belangrijk — denk aan 10-15 minuten per dag gedurende enkele weken.",
  },
  {
    question: "Vervangt pandiculatie fysiotherapie?",
    answer:
      "Pandiculatie is complementair aan fysiotherapie. Het pakt een ander aspect aan: daar waar fysiotherapie vaak werkt aan de spieren zelf, werkt pandiculatie aan de hersenpatronen die de spanning veroorzaken. Veel fysiotherapeuten integreren somatische technieken in hun behandelingen.",
  },
  {
    question: "Kan ik pandiculatie zelf leren?",
    answer:
      "Absoluut. De basis van pandiculatie is eenvoudig te leren. Er zijn boeken, online cursussen en video's beschikbaar. Het belangrijkste is dat je leert bewust en langzaam te bewegen, en te voelen wat er in je lichaam gebeurt.",
  },
  {
    question: "Wat is Sensory Motor Amnesia (SMA)?",
    answer:
      "SMA is een toestand waarin de hersenen het vermogen hebben verloren om bepaalde spieren bewust aan te sturen en te ontspannen. Dit ontstaat door langdurige stress, herhaalde bewegingspatronen, letsel of trauma. Het resultaat is chronische spanning die je niet kunt 'weg-stretchen'. Pandiculatie is de methode om SMA op te heffen.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-12 text-foreground"
        >
          Veelgestelde vragen
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-background"
              >
                <AccordionTrigger className="text-left text-lg font-sans font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
