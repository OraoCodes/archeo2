import { Link } from 'react-router-dom';
import { X, Calendar, Video, ArrowRight } from 'lucide-react';
import { useBanner } from '../contexts/BannerContext';

const WebinarBanner = () => {
  const { isBannerVisible, setIsBannerVisible } = useBanner();

  if (!isBannerVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-archeohub-primary via-archeohub-primary/95 to-archeohub-secondary text-white py-3 px-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="hidden sm:flex items-center gap-2">
              <div className="p-2 bg-white/20 rounded-lg">
                <Video className="w-5 h-5" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <span className="text-sm sm:text-base font-semibold">
                  🎯 Upcoming Webinar:
                </span>
                <span className="text-sm sm:text-base">
                  Talent Readiness
                </span>
                <div className="flex items-center gap-1 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>December 15, 2025 at 7:00 PM EAT</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-white text-archeohub-primary font-medium px-4 py-2 rounded-lg hover:bg-archeohub-accent hover:text-white transition-all duration-300 text-sm whitespace-nowrap"
            >
              <span>Register Now</span>
              <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => setIsBannerVisible(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Dismiss banner"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarBanner;

