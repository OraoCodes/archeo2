import { useEffect } from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    document.title = "About Us - Archeohub";
  }, []);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality",
      description: "We maintain the highest standards in talent evaluation and client service."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency",
      description: "Clear communication, honest processes, and no hidden surprises."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Growth",
      description: "We're committed to the continuous development of both talent and companies."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Impact",
      description: "Creating meaningful opportunities that transform careers and businesses."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[500px] flex items-center scroll-mt-32">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="About Archeohub - Our team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-archeohub-dark/80 via-archeohub-dark/70 to-archeohub-dark/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-archeohub-primary/10 to-transparent" />
          </div>
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6 text-white text-balance drop-shadow-lg">
                About Archeohub
              </h1>
              <p className="text-lg md:text-xl text-white/90 text-balance drop-shadow-md">
                Connecting ambitious talent with fast-growing companies across the globe.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Our mission" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="section-title text-left mb-6">Our Mission</h2>
                  <p className="text-xl text-archeohub-dark leading-relaxed">
                    Expanding global opportunities by elevating African talent and empowering companies to build stronger teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="section-title text-left mb-6">Our Vision</h2>
                  <p className="text-xl text-archeohub-dark leading-relaxed">
                    To be the most trusted partner for talent development, recruitment, and team scaling across continents.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Our vision" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Values</h2>
              <p className="text-lg text-archeohub-muted max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex p-4 bg-archeohub-primary/10 rounded-lg text-archeohub-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-archeohub-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do Summary */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="section-title">What We Do</h2>
              <div className="space-y-6 text-left max-w-2xl mx-auto">
                <div className="p-6 bg-white rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-2">For Talent</h3>
                  <p className="text-archeohub-muted">
                    We help candidates become top-tier professionals through career coaching, technical upskilling, and global opportunity matching.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-2">For Startups</h3>
                  <p className="text-archeohub-muted">
                    We help startups with one-off placements — fast, affordable, and founder-friendly recruitment.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-2">For Companies</h3>
                  <p className="text-archeohub-muted">
                    We help companies build reliable outsourced teams with full operational support and seamless integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

