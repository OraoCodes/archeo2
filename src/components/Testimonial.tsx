
import { Star } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-archeohub-primary/5 to-transparent">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} fill="#EAB62E" color="#EAB62E" className="w-6 h-6 mx-1" />
            ))}
          </div>
          
          <p className="text-xl md:text-2xl italic mb-8 text-archeohub-dark font-medium">
            "Saved us $5k vs. traditional agencies. The engineer shipped our MVP in 4 weeks. The quality of talent was exceptional."
          </p>
          
          <div>
            <p className="font-bold text-lg">Brian Kiptum</p>
            <p className="text-archeohub-muted">CTO, Sqdgo Riders</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
