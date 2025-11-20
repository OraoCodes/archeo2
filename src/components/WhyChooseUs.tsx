import { CheckCircle, Globe, Users, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality-First Screening",
      description: "Only top candidates make it through our multi-stage evaluations."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Work Culture Training",
      description: "Talent is prepared for remote collaboration from day one."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Seamless Hiring Experience",
      description: "We handle sourcing, screening, contracts, and onboarding."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Africa's Best Talent Pool",
      description: "Skilled, English-fluent, tech-oriented professionals."
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-archeohub-dark text-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">Why Choose Us</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Quality-first recruitment that delivers results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex p-4 bg-white/10 rounded-lg mb-4 text-white">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
