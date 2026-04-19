import { CheckCircle, Globe, Users, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: "Quality-First Screening",
      description:
        "Only top candidates make it through our multi-stage evaluations."
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Global Work Culture Training",
      description:
        "Talent is prepared for remote collaboration from day one."
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Seamless Hiring Experience",
      description:
        "We handle sourcing, screening, contracts, and onboarding."
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Africa's Best Talent Pool",
      description:
        "Skilled, English-fluent, tech-oriented professionals."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="px-6 lg:px-16 max-w-[1300px] mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Us
          </h2>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Quality-first recruitment that connects exceptional talent with forward-thinking companies.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >

              {/* Icon */}
              <div className="mb-6 inline-flex p-4 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;