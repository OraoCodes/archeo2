
import { FileText, Clock, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FileText className="w-12 h-12 text-archeohub-primary" />,
      title: "Define Your Project",
      description: "Tell us your technical challenge and requirements. We'll match you with the perfect engineer.",
    },
    {
      id: 2,
      icon: <Clock className="w-12 h-12 text-archeohub-secondary" />,
      title: "Trial a Engineer",
      description: "$250-500 for 4-6 weeks. Watch them deliver tangible results before making any hiring decisions.",
    },
    {
      id: 3,
      icon: <CheckCircle className="w-12 h-12 text-archeohub-accent" />,
      title: "Hire or Walk Away",
      description: "Pay only if they excel. No long-term commitment if they don't meet your expectations.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="text-lg text-archeohub-muted max-w-2xl mx-auto">
            Our streamlined process gets you from project definition to working with elite engineers in days, not weeks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="step-card flex flex-col items-center text-center group">
              <div className="mb-6 transition-transform duration-500 ease-in-out transform group-hover:scale-110">
                {step.icon}
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-archeohub-primary text-white font-bold mb-4">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-archeohub-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
