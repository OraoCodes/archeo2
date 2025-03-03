
import { FileText, Clock, CheckCircle, ArrowRight } from 'lucide-react';

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
      description: "$300 for 4-6 weeks. Watch them deliver tangible results before making any hiring decisions.",
    },
    {
      id: 3,
      icon: <CheckCircle className="w-12 h-12 text-archeohub-accent" />,
      title: "Hire or Walk Away",
      description: "Pay only if they excel. No long-term commitment if they don't meet your expectations.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="text-lg text-archeohub-muted max-w-2xl mx-auto">
            Our streamlined process gets you from project definition to working with elite engineers in days, not weeks.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden md:block absolute left-[3.5rem] top-10 bottom-10 w-1 bg-gradient-to-b from-archeohub-primary via-archeohub-secondary to-archeohub-accent rounded-full z-0"></div>
          
          {steps.map((step, index) => (
            <div key={step.id} className="mb-16 last:mb-0 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative">
                {/* Step number circle and icon */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-archeohub-primary z-10">
                    <span className="text-2xl font-bold text-archeohub-primary">{step.id}</span>
                  </div>
                  <div className="mt-4 p-5 bg-white rounded-xl shadow-lg flex items-center justify-center z-10">
                    {step.icon}
                  </div>
                </div>
                
                {/* Step content */}
                <div className="bg-white p-8 rounded-xl shadow-lg flex-1 hover:shadow-xl transition-all duration-300 border border-gray-100 z-10">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-archeohub-muted">{step.description}</p>
                </div>
              </div>
              
              {/* Connector arrow (only between steps, not after the last one) */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop arrow */}
                  <div className="hidden md:flex items-center justify-center absolute left-[3.5rem] mt-4">
                    <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border border-archeohub-primary">
                      <ArrowRight className="w-5 h-5 text-archeohub-primary" />
                    </div>
                  </div>
                  
                  {/* Mobile arrow */}
                  <div className="flex md:hidden items-center justify-center my-6">
                    <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border border-archeohub-primary">
                      <ArrowRight className="w-5 h-5 text-archeohub-primary transform rotate-90" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
