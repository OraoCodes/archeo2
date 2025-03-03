
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="text-lg text-archeohub-muted max-w-2xl mx-auto">
            Straightforward pricing with no hidden fees. Pay only for value delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Trial Package */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border overflow-hidden">
            <div className="p-8">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-archeohub-primary/10 text-archeohub-primary text-xs font-medium">
                Trial
              </div>
              <h3 className="text-2xl font-bold mb-4">$250–500 flat fee</h3>
              <p className="text-archeohub-muted mb-6">
                Try an engineer for 4-6 weeks with minimal risk. Perfect for testing the waters.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Pre-vetted senior engineers",
                  "Defined project scope",
                  "Weekly progress reports",
                  "No long-term commitment",
                  "Walk away if not satisfied"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={20} className="text-archeohub-secondary mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary w-full flex justify-center"
              >
                Start Your Trial
              </a>
            </div>
          </div>
          
          {/* Hire Package */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border overflow-hidden">
            <div className="p-8">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-archeohub-accent/10 text-archeohub-accent text-xs font-medium">
                Hire
              </div>
              <h3 className="text-2xl font-bold mb-4">15% of salary or 10% monthly for 6 months</h3>
              <p className="text-archeohub-muted mb-6">
                Only pay when you're ready to bring the engineer on full-time. Two flexible options.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "All trial benefits",
                  "Seamless transition to full-time",
                  "Retention guarantee",
                  "Ongoing support",
                  "Replacement if needed"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={20} className="text-archeohub-secondary mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary w-full flex justify-center"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
