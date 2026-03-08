import { FadeIn } from "@/components/MotionWrapper";
import { PageTransition } from "@/components/PageTransition";

const PrivacyPage = () => (
  <PageTransition variant="slideUp">
    <div className="min-h-screen pt-24 section-padding">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <h1 className="text-3xl font-display font-bold mb-8 gradient-text">Privacy Policy</h1>
          <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground">Information Collected</h2>
              <p>When you contact me through the form, I collect your name, email, and message content. This is used solely to respond to your inquiry.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground">How Information Is Used</h2>
              <p>Your information is used only to communicate about potential projects. I do not sell or share your data with third parties.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground">Data Security</h2>
              <p>I take reasonable measures to protect your information, but no method of transmission over the internet is 100% secure.</p>
            </section>
            <section>
              <h2 className="text-lg font-display font-semibold text-foreground">Contact</h2>
              <p>For questions about this privacy policy, please reach out through the contact page.</p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  </PageTransition>
);

export default PrivacyPage;
