
import { Star } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-archeohub-accent/5 to-transparent">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} fill="#0EA5E9" color="#0EA5E9" className="w-6 h-6 mx-1" />
            ))}
          </div>
          
          <p className="text-xl md:text-2xl italic mb-8 text-archeohub-dark font-medium">
            "Saved us $5k vs. traditional agencies. The engineer shipped our MVP in 4 weeks. The quality of talent was exceptional."
          </p>
          
          <div>
            <p className="font-bold text-lg">Sarah Johnson</p>
            <p className="text-archeohub-muted">Founder, TechLaunch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
