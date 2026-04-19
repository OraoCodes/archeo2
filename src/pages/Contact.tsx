import { useEffect, useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  interest: z.string().min(1, 'Please select what you\'re looking for'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - Archeohub";
  }, []);

  const { register, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const interest = watch('interest');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      console.log('Form data:', data);
      await new Promise(resolve => setTimeout(resolve, 1200)); // simulate API
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      reset();
    } catch {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-16 scroll-mt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-archeohub-primary/10 to-transparent -z-10" />
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg text-archeohub-dark">
                Get In Touch
              </h1>
              <p className="text-lg md:text-xl text-archeohub-muted drop-shadow-sm">
                Whether you're looking to grow your career, hire talent, or scale your team — we're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form Card */}
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Send us a message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <InputField id="name" label="Name *" register={register('name')} error={errors.name} placeholder="Your name" />
                  <InputField id="email" label="Email *" type="email" register={register('email')} error={errors.email} placeholder="your.email@example.com" />
                  <InputField id="company" label="Company" register={register('company')} placeholder="Your company (optional)" />
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">What you're looking for *</label>
                    <Select value={interest} onValueChange={(v) => setValue('interest', v)}>
                      <SelectTrigger className={errors.interest ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="talent">I'm looking for career opportunities</SelectItem>
                        <SelectItem value="startup">I'm a startup looking to hire</SelectItem>
                        <SelectItem value="outsourcing">I'm a company looking to outsource</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.interest && <p className="text-sm text-red-500 mt-1">{errors.interest.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder="Tell us about your needs..."
                      rows={6}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full flex justify-center items-center gap-2 transition-all">
                    {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
                  </Button>
                </form>
              </div>

              {/* Direct Contact Info */}
              <div className="space-y-8">
                {contactInfo.map((info, idx) => (
                  <ContactCard key={idx} {...info} />
                ))}
                <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold mb-2">Response time</h3>
                  <p className="text-archeohub-muted text-sm">We typically respond within 24 hours during business days.</p>
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

export default Contact;

// --- Helper Components ---
const InputField = ({ id, label, type = 'text', register, error, placeholder }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">{label}</label>
    <Input id={id} type={type} {...register} placeholder={placeholder} className={error ? 'border-red-500' : ''} />
    {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
  </div>
);

const contactInfo = [
  { icon: <Mail className="w-5 h-5 text-archeohub-primary" />, title: 'Email', text: 'contact@archeohub.com', href: 'mailto:contact@archeohub.com' },
  { icon: <Phone className="w-5 h-5 text-archeohub-primary" />, title: 'Phone', text: '+254 743 659 514', href: 'tel:+254743659514' },
  { icon: <Linkedin className="w-5 h-5 text-archeohub-primary" />, title: 'LinkedIn', text: 'Connect with us on LinkedIn', href: 'https://linkedin.com/company/archeohub' }
];

const ContactCard = ({ icon, title, text, href }: any) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-colors">
    <div className="p-2 bg-archeohub-primary/10 rounded-lg">{icon}</div>
    <div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-archeohub-muted">{text}</p>
    </div>
  </a>
);