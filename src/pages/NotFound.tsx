import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        {/* Glitch 404 */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <h1 className="text-[10rem] md:text-[14rem] font-black leading-none bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent select-none">
            404
          </h1>
          <motion.div
            className="absolute inset-0 text-[10rem] md:text-[14rem] font-black leading-none bg-gradient-to-br from-primary/20 to-accent/20 bg-clip-text text-transparent select-none"
            animate={{ x: [0, -4, 4, -2, 0], y: [0, 2, -2, 1, 0] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
          >
            404
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-2 text-lg">
            The page <code className="px-2 py-0.5 rounded bg-muted text-sm font-mono text-primary">{location.pathname}</code> doesn't exist.
          </p>
          <p className="text-muted-foreground mb-8">
            It might have been moved, deleted, or you may have mistyped the URL.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
            <Link to="/">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
            <Link to="/services">
              <Search className="h-4 w-4" />
              Browse Services
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="gap-2 w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/20"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
