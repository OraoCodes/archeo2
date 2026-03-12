import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Upload, FileText, CheckCircle, Loader2, X, HelpCircle, Clock, Star, Users, TrendingUp 
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const resumeReviewSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  mpesaCode: z.string().min(1, 'M-Pesa confirmation code is required'),
  resume: z.instanceof(FileList).refine(
    (files) => files.length > 0,
    'Please upload your resume'
  ).refine(
    (files) => {
      if (!files.length) return false;
      const file = files[0];
      const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const validExtensions = ['.pdf', '.docx'];
      const fileName = file.name.toLowerCase();
      return validTypes.includes(file.type) || validExtensions.some(ext => fileName.endsWith(ext));
    },
    'Only PDF and DOCX files are allowed'
  ),
});

type ResumeReviewFormData = z.infer<typeof resumeReviewSchema>;

const ResumeReview = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>('');

  useEffect(() => {
    document.title = "Resume Review - Archeohub";
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ResumeReviewFormData>({
    resolver: zodResolver(resumeReviewSchema),
  });

  const resumeFile = watch('resume');

  useEffect(() => {
    if (resumeFile && resumeFile.length > 0) setUploadedFileName(resumeFile[0].name);
  }, [resumeFile]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setValue('resume', e.dataTransfer.files);
    }
  };

  const onSubmit = async (data: ResumeReviewFormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('resume', data.resume[0]);
      formData.append('mpesaCode', data.mpesaCode);
      formData.append('fullName', data.fullName);
      formData.append('email', data.email);
      if (data.phone) formData.append('phone', data.phone);

      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSuccessModalOpen(true);
      reset();
      setUploadedFileName('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
<section className="relative pt-20 py-16 bg-blue-900 text-white">
  <div className="container max-w-3xl mx-auto text-center px-4 sm:px-6">
    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
      Get Your Resume <br />
      <span className="text-blue-300">Reviewed by Experts</span>
    </h1>
    <p className="text-lg sm:text-xl text-blue-100">
      Upload your resume and receive actionable insights from our professional team to land your dream job faster.
    </p>

    {/* Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 text-center">
      {[
        { icon: Clock, value: '48h', label: 'Turnaround' },
        { icon: Users, value: '500+', label: 'Reviews' },
        { icon: Star, value: '4.9', label: 'Rating' },
        { icon: TrendingUp, value: '85%', label: 'Success' },
      ].map((stat, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
          <stat.icon className="w-5 h-5 mx-auto mb-1 text-blue-300" />
          <div className="font-bold">{stat.value}</div>
          <div className="text-sm text-white/80">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Form Section */}
      <section id="form" className="py-10 px-4 sm:px-6 md:px-8 flex justify-center">
        <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Personal Info */}
            <div>
              <Label htmlFor="fullName" className="text-black font-medium mb-1 block">Full Name</Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                {...register('fullName')}
                className={`border-black focus:border-blue-700 focus:ring-blue-200 ${errors.fullName ? 'border-red-500' : ''}`}
              />
              {errors.fullName && (
                <p className="text-red-500 mt-1 flex items-center gap-1"><X size={12} />{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-black font-medium mb-1 block">Email</Label>
              <Input
                id="email"
                placeholder="john@example.com"
                {...register('email')}
                className={`border-black focus:border-blue-700 focus:ring-blue-200 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-red-500 mt-1 flex items-center gap-1"><X size={12} />{errors.email.message}</p>
              )}
            </div>

            {/* Resume Upload */}
            <div>
              <Label htmlFor="resume" className="text-black font-medium mb-1 block">Upload Resume</Label>
              <input type="file" id="resume" accept=".pdf,.docx" {...register('resume')} className="hidden" />
              <label
                htmlFor="resume"
                onDrop={handleDrop}
                className={`flex flex-col items-center justify-center h-36 border-2 border-dashed rounded-lg cursor-pointer ${uploadedFileName ? 'border-blue-700 bg-blue-50' : 'border-black hover:border-blue-700 hover:bg-blue-100'}`}
              >
                {uploadedFileName ? (
                  <FileText className="w-6 h-6 text-blue-700 mb-2" />
                ) : (
                  <Upload className="w-6 h-6 text-black mb-2" />
                )}
                <span className="text-black">{uploadedFileName || 'Click or drag to upload PDF/DOCX'}</span>
              </label>
              {errors.resume && <p className="text-red-500 mt-1 flex items-center gap-1"><X size={12} />{errors.resume.message}</p>}
            </div>

            {/* M-Pesa */}
            <div>
              <Label htmlFor="mpesaCode" className="text-black font-medium mb-1 block">M-Pesa Confirmation Code</Label>
              <Input
                id="mpesaCode"
                placeholder="QW123456"
                {...register('mpesaCode')}
                className={`border-black focus:border-blue-700 focus:ring-blue-200 ${errors.mpesaCode ? 'border-red-500' : ''}`}
              />
              {errors.mpesaCode && <p className="text-red-500 mt-1 flex items-center gap-1"><X size={12} />{errors.mpesaCode.message}</p>}
            </div>

            {/* Payment Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-black text-sm flex flex-col gap-1">
              <span><strong>Payment Instructions:</strong></span>
              <span>Send <strong>KSh 199</strong> to Till Number: <strong>3704573</strong></span>
              <span>After payment, enter your M-Pesa confirmation code above before submitting.</span>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-700 text-white hover:bg-blue-600 py-3 font-semibold rounded-xl flex justify-center items-center gap-2"
            >
              {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : <Upload className="w-5 h-5" />}
              <span>{isSubmitting ? 'Submitting...' : 'Submit Resume'}</span>
            </Button>
          </form>
        </div>
      </section>

      <Footer />

      {/* Success Modal */}
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="sm:max-w-md mx-4">
          <DialogHeader className="text-center">
            <CheckCircle className="w-12 h-12 text-blue-700 mx-auto mb-2" />
            <DialogTitle>Your Resume Has Been Received!</DialogTitle>
            <DialogDescription>Our team will review it and send actionable insights shortly.</DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsSuccessModalOpen(false)} className="w-full mt-4 bg-blue-700 text-white hover:bg-blue-600">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResumeReview;