import React from 'react';
import { CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Define Your Project",
      description: "Tell us your technical challenge and requirements. We'll match you with the perfect engineer.",
      date: "Day 1",
      status: "completed"
    },
    {
      id: 2,
      title: "Engineer Trial",
      description: "$300 for 4-6 weeks. Watch them deliver tangible results before making any hiring decisions.",
      date: "Week 1-6",
      status: "completed"
    },
    {
      id: 3,
      title: "Hire or Walk Away",
      description: "Pay only if they excel. No long-term commitment if they don't meet your expectations.",
      date: "After Trial",
      status: "current"
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

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden">
          {steps.map((step, index) => (
            <div key={step.id} className="mb-12 last:mb-0 relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Vertical line connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-7 top-14 bottom-0 w-1 bg-gradient-to-b from-archeohub-primary to-archeohub-secondary"></div>
              )}
              
              <div className="flex gap-6">
                {/* Circle indicator */}
                <div className="relative">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center z-10 ${
                    step.status === 'completed' ? 'bg-archeohub-primary' : 'bg-white border-2 border-archeohub-primary'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-7 h-7 text-white" />
                    ) : (
                      <span className="text-xl font-bold text-archeohub-primary">{step.id}</span>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-1 text-sm font-medium text-archeohub-muted">{step.date}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-archeohub-muted">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Horizontal connector line */}
          <div className="absolute top-7 left-0 right-0 h-1 bg-gradient-to-r from-archeohub-primary via-archeohub-secondary to-archeohub-accent"></div>
          
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="w-1/3 px-4 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                {/* Circle indicator */}
                <div className="flex justify-center mb-8 relative">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center z-10 ${
                    step.status === 'completed' ? 'bg-archeohub-primary' : 
                    step.status === 'current' ? 'bg-archeohub-secondary' : 'bg-white border-2 border-archeohub-primary'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-7 h-7 text-white" />
                    ) : (
                      <span className="text-xl font-bold text-white">{step.id}</span>
                    )}
                  </div>
                </div>
                
                {/* Date */}
                <div className="text-center mb-2">
                  <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium text-archeohub-muted">
                    {step.date}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-archeohub-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
