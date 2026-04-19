import { Link } from 'react-router-dom';
import { ArrowRight, User, Briefcase, Users } from 'lucide-react';

const WhatWeDo = () => {
  const pillars = [
    {
      icon: <User className="w-7 h-7" />,
      title: "Candidate Development",
      description:
        "We help you sharpen your skills, confidence, and readiness — then match you to opportunities.",
      link: "/for-talent",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Briefcase className="w-7 h-7" />,
      title: "Startup Recruitment",
      description:
        "We deliver vetted, ready-to-interview candidates for one-off placements.",
      link: "/for-startups",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Outsourced Teams",
      description:
        "Build dedicated teams at a fraction of the cost. We recruit, manage, and support them.",
      link: "/outsourcing",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Three pillars. One mission: connecting ambitious talent with fast-growing companies.
          </p>
        </div>

        {/* Alternating rows */}
        <div className="space-y-24">
          {pillars.map((pillar, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${reverse ? "md:order-2" : ""}`}>
                  <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={`${reverse ? "md:order-1" : ""}`}>
                  <div className="flex items-center mb-4 text-blue-600">
                    {pillar.icon}
                  </div>

                  <h3 className="text-3xl font-bold mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-6">
                    {pillar.description}
                  </p>

                  <Link
                    to={pillar.link}
                    className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
                  >
                    Learn More <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;