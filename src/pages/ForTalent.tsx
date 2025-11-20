import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, User, Briefcase, Globe, MessageSquare } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForTalent = () => {
  useEffect(() => {
    document.title = "For Talent - Archeohub";
  }, []);

  const benefits = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Career coaching & CV support",
      description: "Get personalized guidance to refine your resume, portfolio, and professional presence."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Interview preparation",
      description: "Master technical interviews and behavioral questions with our proven coaching methods."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Technical upskilling path",
      description: "Targeted learning paths to strengthen your core stack and stay competitive."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Communication & culture training",
      description: "Learn global work culture, remote collaboration, and professional communication."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Apply to join the talent pool",
      description: "Submit your profile and let us know your career goals and technical interests."
    },
    {
      number: 2,
      title: "Complete our readiness sessions",
      description: "Work with our coaches to polish your skills, CV, and interview readiness."
    },
    {
      number: 3,
      title: "Get matched to open roles",
      description: "We connect you with vetted opportunities that align with your skills and goals."
    },
    {
      number: 4,
      title: "Interview → Get hired → Start strong",
      description: "Interview with confidence, land the role, and hit the ground running."
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
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Professional development and career growth" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-archeohub-dark/80 via-archeohub-dark/70 to-archeohub-dark/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-archeohub-primary/10 to-transparent" />
          </div>
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6 text-white text-balance drop-shadow-lg">
                Your Career Starts With Becoming Your Best Self
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 text-balance drop-shadow-md">
                We don't just help you find a job — we help you grow into the strongest version of your professional self.
              </p>
              <Link to="/contact" className="button-primary inline-flex items-center text-base md:text-lg px-8 py-4 bg-white text-archeohub-primary hover:bg-archeohub-accent hover:text-white shadow-lg">
                <span>Join the Talent Network</span>
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">What You Get</h2>
              <p className="text-lg text-archeohub-muted max-w-2xl mx-auto">
                Comprehensive support to elevate your career and land your dream role.
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
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">How It Works</h2>
              <p className="text-lg text-archeohub-muted max-w-2xl mx-auto">
                A clear path from potential to placement.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {steps.map((step, index) => (
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

        {/* Candidate Stories Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">Success Stories</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-6 bg-gradient-to-br from-archeohub-primary/5 to-transparent rounded-xl border border-border">
                <p className="text-lg italic mb-4 text-archeohub-dark">
                  "The coaching helped me refine my GitHub portfolio and ace my technical interviews. Landed a remote role with a US startup within 6 weeks."
                </p>
                <p className="font-bold">— Software Engineer, Nairobi</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-archeohub-primary/5 to-transparent rounded-xl border border-border">
                <p className="text-lg italic mb-4 text-archeohub-dark">
                  "The communication training was game-changing. I now work confidently with international teams and have grown into a senior role."
                </p>
                <p className="font-bold">— Full-Stack Developer, Lagos</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-archeohub-primary text-white">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Ready to Level Up Your Career?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
                Join our talent network and start your journey to becoming world-class talent.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-archeohub-primary font-medium py-4 px-8 rounded-lg hover:bg-archeohub-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>Join the Talent Network</span>
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

export default ForTalent;

