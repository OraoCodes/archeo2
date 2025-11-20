import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Target, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForStartups = () => {
  useEffect(() => {
    document.title = "For Startups - Archeohub";
  }, []);

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Shortlist in days",
      description: "We deliver vetted, ready-to-interview candidates quickly — no months-long waits."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Technical & cultural evaluation",
      description: "Every candidate is screened for both technical depth and startup culture fit."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Affordable and founder-friendly",
      description: "One-off placement model with transparent fees — no long-term lock-ins."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Hands-on support until onboarding",
      description: "We're with you through the entire process, ensuring a smooth transition."
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Intake call",
      description: "We understand your needs, team culture, and technical requirements."
    },
    {
      number: 2,
      title: "We source & screen",
      description: "Our team finds and evaluates candidates using our rigorous quality standards."
    },
    {
      number: 3,
      title: "You interview top finalists",
      description: "Review our shortlist and interview the candidates that best fit your needs."
    },
    {
      number: 4,
      title: "You hire — we support onboarding",
      description: "Once you make your choice, we help ensure a seamless start."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Startup team collaboration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-archeohub-dark/80 via-archeohub-dark/70 to-archeohub-dark/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-archeohub-primary/10 to-transparent" />
          </div>
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6 text-white text-balance drop-shadow-lg">
                Hiring your next engineer shouldn't take three months
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 text-balance drop-shadow-md">
                Building your founding team is one of the most important decisions you'll make. We help you source, evaluate, and place top talent — quickly and cost-effectively.
              </p>
              <Link to="/contact" className="button-primary inline-flex items-center text-base md:text-lg px-8 py-4 bg-white text-archeohub-primary hover:bg-archeohub-accent hover:text-white shadow-lg">
                <span>Request Candidates</span>
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">How We Help Startups</h2>
              <p className="text-lg text-archeohub-muted max-w-2xl mx-auto">
                One-off placements designed for fast-moving founders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border border-border hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-archeohub-primary/10 rounded-lg text-archeohub-primary">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-archeohub-muted">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-archeohub-dark font-medium mb-4">
                Whether you need your <strong>first engineer</strong>, a <strong>product lead</strong>, or a <strong>multi-tasking operations generalist</strong>, we help you find the right fit.
              </p>
              <p className="text-xl font-bold text-archeohub-primary">Hire once. Hire well.</p>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Process</h2>
              <p className="text-lg text-archeohub-muted max-w-2xl mx-auto">
                A streamlined approach to finding your perfect hire.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-archeohub-primary text-white flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-archeohub-muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-archeohub-primary text-white">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Ready to Find Your Next Hire?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
                Let's discuss your needs and get you connected with top talent.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-archeohub-primary font-medium py-4 px-8 rounded-lg hover:bg-archeohub-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>Request Candidates</span>
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForStartups;

