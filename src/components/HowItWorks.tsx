
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
    <section id="how-it-works" className="py-20 md:py-28 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="text-lg text-archeohub-muted max-w-2xl mx-auto">
            Our streamlined process gets you from project definition to working with elite engineers in days, not weeks.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Container */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 relative z-10">
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-3 border-2 border-archeohub-primary">
                    <span className="text-xl font-bold text-archeohub-primary">{step.id}</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-md flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md md:ml-4 flex-1 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-archeohub-muted">{step.description}</p>
                </div>
              </div>
              
              {/* Connector Line - Don't show after the last step */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center absolute left-8 ml-[0.5px] top-[7.5rem] h-[4.5rem] z-0">
                  <div className="h-full w-0.5 bg-archeohub-primary"></div>
                  <div className="absolute bottom-0 transform translate-x-[-40%]">
                    <ArrowRight className="w-5 h-5 text-archeohub-primary" />
                  </div>
                </div>
              )}
              
              {/* Mobile Connector - Arrow Down */}
              {index < steps.length - 1 && (
                <div className="flex md:hidden items-center justify-center mb-8">
                  <ArrowRight className="w-6 h-6 text-archeohub-primary transform rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
