import { Star } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "We needed our first backend engineer and had no time to run a recruitment cycle. They delivered three top-quality finalists — we hired one within a week.",
      author: "Founder",
      role: "Early-Stage Fintech",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Their outsourced devs feel like part of our core team. Communication is excellent, and delivery has improved significantly.",
      author: "CTO",
      role: "SaaS Company",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The career coaching helped me land a remote role with a US startup. The support throughout the process was invaluable.",
      author: "Software Engineer",
      role: "Nairobi, Kenya",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-archeohub-primary/5 to-transparent">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-xl border border-border shadow-sm">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} fill="#EAB62E" color="#EAB62E" className="w-5 h-5 mx-0.5" />
                ))}
              </div>
              
              <p className="text-lg italic mb-6 text-archeohub-dark">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-archeohub-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
