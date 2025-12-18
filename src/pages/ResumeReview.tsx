import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Upload, FileText, CheckCircle, Loader2, X, CreditCard, Smartphone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const resumeReviewSchema = z.object({
  mpesaCode: z.string().min(1, 'M-Pesa confirmation code is required'),
  resume: z.instanceof(FileList).refine(
    (files) => files.length > 0,
    'Please upload your resume'
  ).refine(
    (files) => {
      if (files.length === 0) return false;
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
  } = useForm<ResumeReviewFormData>({
    resolver: zodResolver(resumeReviewSchema),
  });

  const resumeFile = watch('resume');

  useEffect(() => {
    if (resumeFile && resumeFile.length > 0) {
      setUploadedFileName(resumeFile[0].name);
    }
  }, [resumeFile]);

  const onSubmit = async (data: ResumeReviewFormData) => {
    setIsSubmitting(true);
    try {
      // TODO: Replace with actual API endpoint
      const formData = new FormData();
      formData.append('resume', data.resume[0]);
      formData.append('mpesaCode', data.mpesaCode);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSuccessModalOpen(true);
      reset();
      setUploadedFileName('');
    } catch (error) {
      console.error('Error submitting resume:', error);
      // Handle error - you can add toast notification here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-28 pb-8 md:pt-32 md:pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-archeohub-primary/5 to-transparent -z-10" />
          <div className="container max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-4 sm:mb-6 text-balance">
                Get Your Resume Reviewed
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-archeohub-muted text-balance max-w-2xl mx-auto">
                Upload your resume and receive actionable insights from our expert team to help you land your dream role.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-8 md:py-12 pb-16 md:pb-20">
          <div className="container max-w-2xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-xl md:rounded-2xl border border-border shadow-lg p-6 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
                {/* Resume Upload */}
                <div>
                  <Label htmlFor="resume" className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 block">
                    Upload Your Resume
                  </Label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.docx"
                      {...register('resume')}
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className={`flex flex-col items-center justify-center w-full h-40 sm:h-48 border-2 border-dashed rounded-lg sm:rounded-xl cursor-pointer transition-all ${
                        errors.resume
                          ? 'border-red-500 bg-red-50'
                          : uploadedFileName
                          ? 'border-archeohub-primary bg-archeohub-primary/5'
                          : 'border-border hover:border-archeohub-primary hover:bg-gray-50'
                      }`}
                    >
                      {uploadedFileName ? (
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6">
                          <div className="p-2 sm:p-3 bg-archeohub-primary/10 rounded-lg">
                            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-archeohub-primary" />
                          </div>
                          <div className="text-center max-w-full px-2">
                            <p className="font-medium text-archeohub-dark text-sm sm:text-base break-words">{uploadedFileName}</p>
                            <p className="text-xs sm:text-sm text-archeohub-muted mt-1">Click to change file</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6">
                          <div className="p-2 sm:p-3 bg-gray-100 rounded-lg">
                            <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-archeohub-muted" />
                          </div>
                          <div className="text-center px-2">
                            <p className="font-medium text-archeohub-dark text-sm sm:text-base">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs sm:text-sm text-archeohub-muted mt-1">
                              PDF or DOCX (MAX. 10MB)
                            </p>
                          </div>
                        </div>
                      )}
                    </label>
                  </div>
                  {errors.resume && (
                    <p className="text-xs sm:text-sm text-red-500 mt-2 flex items-center gap-1">
                      <X size={12} className="flex-shrink-0" />
                      <span>{errors.resume.message}</span>
                    </p>
                  )}
                </div>

                {/* Payment Information */}
                <div className="bg-gradient-to-r from-archeohub-primary/10 to-archeohub-secondary/10 border-2 border-archeohub-primary/20 rounded-lg sm:rounded-xl p-4 sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-2.5 bg-archeohub-primary/20 rounded-lg flex-shrink-0">
                      <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-archeohub-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm sm:text-base text-archeohub-dark mb-2 sm:mb-3">
                        Payment Required
                      </h3>
                      <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-archeohub-dark">Amount:</span>
                          <span className="text-archeohub-primary font-bold">KES 199</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-archeohub-dark">Till Number:</span>
                          <span className="text-archeohub-dark font-mono font-bold text-base sm:text-lg">3704573</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Smartphone className="w-4 h-4 text-archeohub-muted flex-shrink-0" />
                          <span className="text-archeohub-muted">
                            <span className="font-medium">Buy Goods</span> - M-Pesa
                          </span>
                        </div>
                        <p className="text-archeohub-muted pt-1 border-t border-archeohub-primary/20">
                          Please make the payment via M-Pesa before submitting your resume. You'll need the confirmation code to complete the form.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* M-Pesa Code */}
                <div>
                  <Label htmlFor="mpesaCode" className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 block">
                    M-Pesa Confirmation Code <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="mpesaCode"
                    type="text"
                    placeholder="Enter your M-Pesa confirmation code"
                    {...register('mpesaCode')}
                    className={`text-sm sm:text-base ${errors.mpesaCode ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.mpesaCode && (
                    <p className="text-xs sm:text-sm text-red-500 mt-2 flex items-center gap-1">
                      <X size={12} className="flex-shrink-0" />
                      <span>{errors.mpesaCode.message}</span>
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-archeohub-muted mt-2">
                    Enter the confirmation code you received after paying <span className="font-semibold text-archeohub-primary">KES 199</span> to Till Number <span className="font-mono font-semibold">3704573</span> via M-Pesa (Buy Goods).
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full button-primary text-sm sm:text-base py-4 sm:py-6"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span className="hidden sm:inline">Submit Resume for Review</span>
                      <span className="sm:hidden">Submit Resume</span>
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Info Section */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-archeohub-primary/5 to-transparent rounded-lg sm:rounded-xl border border-border">
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">What to Expect</h3>
              <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-archeohub-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-archeohub-secondary mt-0.5 flex-shrink-0" />
                  <span>Detailed feedback on your resume structure and content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-archeohub-secondary mt-0.5 flex-shrink-0" />
                  <span>Actionable insights to improve your chances</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-archeohub-secondary mt-0.5 flex-shrink-0" />
                  <span>Personalized recommendations from our expert team</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Success Modal */}
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="sm:max-w-md mx-4">
          <DialogHeader>
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-green-100 rounded-full">
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-center text-xl sm:text-2xl">Resume Received!</DialogTitle>
            <DialogDescription className="text-center text-sm sm:text-base mt-3 sm:mt-4 px-2">
              Your CV has been received. Our team will review it and send you actionable insights.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 sm:mt-6">
            <Button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full button-primary text-sm sm:text-base"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResumeReview;

