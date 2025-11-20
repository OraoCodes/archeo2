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

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const interest = watch('interest');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // TODO: Replace with actual form submission endpoint
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-archeohub-primary/5 to-transparent -z-10" />
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6 text-balance">
                Get In Touch
              </h1>
              <p className="text-lg md:text-xl text-archeohub-muted text-balance">
                Whether you're looking to grow your career, hire talent, or scale your team — we're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      {...register('name')}
                      placeholder="Your name"
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="your.email@example.com"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      {...register('company')}
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      What you're looking for *
                    </label>
                    <Select
                      value={interest}
                      onValueChange={(value) => setValue('interest', value)}
                    >
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
                    {errors.interest && (
                      <p className="text-sm text-red-500 mt-1">{errors.interest.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder="Tell us about your needs..."
                      rows={6}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full button-primary"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Direct Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Direct contact</h2>
                <div className="space-y-6">
                  <a
                    href="mailto:contact@archeohub.com"
                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-gray-50 transition-colors"
                  >
                    <div className="p-2 bg-archeohub-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-archeohub-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-archeohub-muted">contact@archeohub.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+254743659514"
                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-gray-50 transition-colors"
                  >
                    <div className="p-2 bg-archeohub-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-archeohub-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-archeohub-muted">+254 743 659 514</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/company/archeohub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-gray-50 transition-colors"
                  >
                    <div className="p-2 bg-archeohub-primary/10 rounded-lg">
                      <Linkedin className="w-5 h-5 text-archeohub-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">LinkedIn</h3>
                      <p className="text-archeohub-muted">Connect with us on LinkedIn</p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-archeohub-primary/5 to-transparent rounded-xl border border-border">
                  <h3 className="font-bold mb-2">Response time</h3>
                  <p className="text-archeohub-muted text-sm">
                    We typically respond within 24 hours during business days.
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

export default Contact;

