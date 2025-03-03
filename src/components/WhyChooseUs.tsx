
import { DollarSign, BarChart, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-archeohub-accent" />,
      title: "No upfront agency fees",
      description: "We don't charge massive upfront costs like traditional agencies. You only pay for proven results."
    },
    {
      icon: <BarChart className="w-6 h-6 text-archeohub-secondary" />,
      title: "85% trial-to-hire success rate",
      description: "Our curated network of engineers have a proven track record of delivering quality work on time."
    },
    {
      icon: <Shield className="w-6 h-6 text-archeohub-primary" />,
      title: "10% monthly fee for 6 months = retention guarantee",
      description: "Our unique payment structure ensures engineers are committed for the long term."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-archeohub-dark text-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-12">Why Choose Us</h2>
          
          <div className="space-y-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="mt-1 p-2 bg-white/10 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-archeohub-light/80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
