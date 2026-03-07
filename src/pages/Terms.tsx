import { FadeIn } from "@/components/MotionWrapper";

const TermsPage = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <FadeIn>
        <h1 className="text-3xl font-display font-bold mb-8 gradient-text">Terms of Service</h1>
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">1. Services</h2>
            <p>I provide freelance web development, Discord bot development, SA-MP development, and graphics design services as described on this website. All services are subject to availability and agreement on scope.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">2. Payment</h2>
            <p>Payment terms are agreed upon before project commencement. A deposit may be required for larger projects. Full payment is due upon delivery unless otherwise agreed.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">3. Revisions</h2>
            <p>Each project includes a reasonable number of revisions as agreed. Additional revisions may incur extra charges.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">4. Intellectual Property</h2>
            <p>Upon full payment, all custom work created for you is transferred to you. I retain the right to showcase the work in my portfolio unless otherwise agreed.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">5. Disclaimer</h2>
            <p>I do not sell or share third-party account credentials. Digital subscription assistance services only involve official purchase guidance and setup support.</p>
          </section>
        </div>
      </FadeIn>
    </div>
  </div>
);

export default TermsPage;
