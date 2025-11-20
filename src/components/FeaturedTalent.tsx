import { Link } from 'react-router-dom';
import { Code, Bug, Headphones, BarChart, ArrowRight } from 'lucide-react';

const FeaturedTalent = () => {
  const roles = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-stack engineers",
      description: "React, Node.js, Python, and more",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "QA analysts",
      description: "Manual and automated testing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Customer support",
      description: "Technical support specialists",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Data analysts",
      description: "SQL, Python, analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Talent & Roles</h2>
          <p className="text-lg text-archeohub-muted max-w-2xl mx-auto">
            Access to skilled professionals across multiple disciplines.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={role.image} 
                  alt={role.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-lg text-archeohub-primary">
                  {role.icon}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold mb-2">{role.title}</h3>
                <p className="text-sm text-archeohub-muted">{role.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/for-startups"
            className="inline-flex items-center button-primary"
          >
            <span>View Talent Profiles</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTalent;

