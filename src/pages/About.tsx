import { useEffect } from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    document.title = "About Us - Archeohub";
  }, []);

  const values = [
    { icon: <Target className="w-8 h-8" />, title: "Quality", description: "We maintain the highest standards in talent evaluation and client service." },
    { icon: <Eye className="w-8 h-8" />, title: "Transparency", description: "Clear communication, honest processes, and no hidden surprises." },
    { icon: <Heart className="w-8 h-8" />, title: "Growth", description: "We're committed to the continuous development of both talent and companies." },
    { icon: <Users className="w-8 h-8" />, title: "Impact", description: "Creating meaningful opportunities that transform careers and businesses." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero Section - Split Layout */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 flex justify-center min-h-[520px] overflow-hidden">
          <div className="relative w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 rounded-3xl shadow-2xl overflow-hidden flex items-center min-h-[520px] md:min-h-[620px]">

            {/* Background Split: left gradient, right image */}
            <div className="absolute inset-0 flex flex-col md:flex-row">
              {/* Left gradient */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-r from-archeohub-primary to-transparent" />
              {/* Right image */}
              <div
                className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Hero Content */}
            <div className="relative z-10 w-full md:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 flex items-center">
              <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-lg">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
                  About Archeohub
                </h1>
                <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                  Connecting ambitious talent with fast-growing companies across the globe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl space-y-20">
            {/* Mission */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Our mission" className="w-full h-auto rounded-xl shadow-lg" />
              </div>
              <div>
                <h2 className="section-title mb-6">Our Mission</h2>
                <p className="text-xl text-archeohub-dark leading-relaxed">
                  Expanding global opportunities by elevating African talent and empowering companies to build stronger teams.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="section-title mb-6">Our Vision</h2>
                <p className="text-xl text-archeohub-dark leading-relaxed">
                  To be the most trusted partner for talent development, recruitment, and team scaling across continents.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Our vision" className="w-full h-auto rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Values</h2>
              <p className="text-lg text-archeohub-muted max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <div key={i} className="text-center p-6">
                  <div className="inline-flex p-4 bg-archeohub-primary/10 rounded-lg text-archeohub-primary mb-4 justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-archeohub-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-8">
            <h2 className="section-title">What We Do</h2>
            <div className="grid gap-8">
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">For Talent</h3>
                <p className="text-archeohub-muted">
                  We help candidates become top-tier professionals through career coaching, technical upskilling, and global opportunity matching.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">For Startups</h3>
                <p className="text-archeohub-muted">
                  We help startups with one-off placements — fast, affordable, and founder-friendly recruitment.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">For Companies</h3>
                <p className="text-archeohub-muted">
                  We help companies build reliable outsourced teams with full operational support and seamless integration.
                </p>
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