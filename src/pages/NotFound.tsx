
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    document.title = "Page Not Found | Archeohub";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-archeohub-accent/5 to-transparent">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold font-display mb-6 text-archeohub-dark">404</h1>
        <p className="text-xl text-archeohub-muted mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link 
          to="/" 
          className="button-primary inline-flex items-center"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
