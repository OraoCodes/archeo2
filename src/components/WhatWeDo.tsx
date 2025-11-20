import { Link } from 'react-router-dom';
import { ArrowRight, User, Briefcase, Users } from 'lucide-react';

const WhatWeDo = () => {
  const pillars = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Candidate Development",
      description: "Become the kind of professional global companies want. We help you sharpen your skills, confidence, and readiness — then match you to opportunities.",
      link: "/for-talent",
      linkText: "Learn more",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Startup Recruitment",
      description: "Need your first engineer or your next product hire? We deliver vetted, ready-to-interview candidates for one-off placements.",
      link: "/for-startups",
      linkText: "Hire talent",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Outsourced Teams",
      description: "Build dedicated engineering, QA, support, or data teams at a fraction of the cost. We recruit, manage, and support them — you get seamless execution.",
      link: "/outsourcing",
      linkText: "Scale your team",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">What We Do</h2>
          <p className="text-lg text-archeohub-muted max-w-2xl mx-auto">
            Three pillars. One mission: connecting ambitious talent with fast-growing companies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-border hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-lg text-archeohub-primary">
                  {pillar.icon}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-archeohub-muted mb-6 flex-grow">{pillar.description}</p>
                <Link 
                  to={pillar.link}
                  className="inline-flex items-center text-archeohub-primary font-medium hover:text-archeohub-primary/80 transition-colors group"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

