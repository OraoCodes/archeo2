import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingPopup = ({ isOpen, onClose }: BookingPopupProps) => {
  const calendarContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && calendarContainerRef.current) {
      // Load Google Calendar script
      const script = document.createElement('script');
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
      script.async = true;
      
      script.onload = () => {
        // Initialize the scheduling button
        (window as any).calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3YLEOQ3opzwlpeeNvdRj_x3cpNH9aRP7Hv5SccekRYm-UAr0HtAIbA2FMsLNINdCHj4Xi4T1mH?gv=true',
          color: '#039BE5',
          label: 'Book an appointment',
          target: calendarContainerRef.current,
        });
      };

      // Load Google Calendar styles
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
      document.head.appendChild(link);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
        document.head.removeChild(link);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Book a Free Consultation</h2>
          <p className="text-archeohub-muted mb-6">
            Schedule a call with us to discuss your engineering needs.
          </p>
          
          <div ref={calendarContainerRef} className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup; 