const Footer = () => {
  return (
    <footer className="section-padding bg-foreground text-primary-foreground/70 pb-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="font-serif text-2xl font-semibold text-primary-foreground">
            pandiculatie<span className="text-accent">.nl</span>
          </span>
          <p className="mt-3 max-w-md leading-relaxed">
            Informatie over pandiculatie en somatische bewegingseducatie voor
            mensen met chronische spierspanning.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 mb-10 text-sm">
          <a href="#wat-is-pandiculatie" className="hover:text-primary-foreground transition-colors">
            Wat is het?
          </a>
          <a href="#hoe-werkt-het" className="hover:text-primary-foreground transition-colors">
            Hoe werkt het?
          </a>
          <a href="#voordelen" className="hover:text-primary-foreground transition-colors">
            Voordelen
          </a>
          <a href="#faq" className="hover:text-primary-foreground transition-colors">
            FAQ
          </a>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-sm">
          <p>
            © {new Date().getFullYear()} pandiculatie.nl — Deze website biedt
            educatieve informatie en vervangt geen medisch advies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
