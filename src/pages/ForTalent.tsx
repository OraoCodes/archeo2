import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Briefcase, Globe, MessageSquare } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForTalent = () => {
  useEffect(() => {
    document.title = "For Talent - Archeohub";
  }, []);

  const benefits = [
    { icon: <User className="w-6 h-6" />, title: "Career coaching & CV support", description: "Get personalized guidance to refine your resume, portfolio, and professional presence." },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Interview preparation", description: "Master technical interviews and behavioral questions with our proven coaching methods." },
    { icon: <Briefcase className="w-6 h-6" />, title: "Technical upskilling path", description: "Targeted learning paths to strengthen your core stack and stay competitive." },
    { icon: <Globe className="w-6 h-6" />, title: "Communication & culture training", description: "Learn global work culture, remote collaboration, and professional communication." }
  ];

  const steps = [
    { number: 1, title: "Apply to join the talent pool", description: "Submit your profile and let us know your career goals and technical interests." },
    { number: 2, title: "Complete our readiness sessions", description: "Work with our coaches to polish your skills, CV, and interview readiness." },
    { number: 3, title: "Get matched to open roles", description: "We connect you with vetted opportunities that align with your skills and goals." },
    { number: 4, title: "Interview → Get hired → Start strong", description: "Interview with confidence, land the role, and hit the ground running." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        {/* Hero Section */}
<section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden min-h-[520px] flex justify-center">
  <div className="relative w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 rounded-3xl shadow-2xl overflow-hidden min-h-[520px] md:min-h-[620px] flex items-center">

    {/* Gradient + Image */}
    <div className="absolute inset-0 flex flex-col md:flex-row">
      {/* Gradient behind content */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-r from-blue-800 to-transparent" />
      
      {/* Image side */}
      <div
        className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      />
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/25" />

    {/* Content Card */}
    <div className="relative z-10 w-full md:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 flex items-center">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg w-full">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 drop-shadow-xl tracking-tight leading-tight text-white">
          Your Career Starts With Becoming Your Best Self
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md text-white/90">
          We don't just help you find a job — we help you grow into the strongest version of your professional self.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300"
        >
          Join The Talent Network <ArrowRight size={22} className="ml-2" />
        </Link>
      </div>
    </div>

  </div>
</section>

        {/* What You Get Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title text-3xl md:text-4xl font-bold">What You Get</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive support to elevate your career and land your dream role.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg text-blue-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title text-3xl md:text-4xl font-bold">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A clear path from potential to placement.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title text-3xl md:text-4xl font-bold">Success Stories</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl border border-gray-200">
                <p className="text-lg italic mb-4 text-gray-800">
                  "The coaching helped me refine my GitHub portfolio and ace my technical interviews. Landed a remote role with a US startup within 6 weeks."
                </p>
                <p className="font-bold">— Software Engineer, Nairobi</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl border border-gray-200">
                <p className="text-lg italic mb-4 text-gray-800">
                  "The communication training was game-changing. I now work confidently with international teams and have grown into a senior role."
                </p>
                <p className="font-bold">— Full-Stack Developer, Lagos</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Level Up Your Career?</h2>
              <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                Join our talent network and start your journey to becoming world-class talent.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-blue-600 font-semibold py-4 px-8 rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg"
              >
                Join the Talent Network <ArrowRight size={20} className="ml-2" />
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