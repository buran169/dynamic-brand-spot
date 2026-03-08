import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TouchBubbles } from "@/components/TouchBubbles";
import { CursorFollower } from "@/components/CursorFollower";
import { ScrollProgress } from "@/components/ScrollProgress";
import { GrainOverlay } from "@/components/GrainOverlay";
import { BackToTop } from "@/components/BackToTop";
import { MobileCTABar } from "@/components/MobileCTABar";
import { FloatingContact } from "@/components/FloatingContact";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SkipToContent } from "@/components/SkipToContent";
import { ChatAssistant } from "@/components/ChatAssistant";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <Breadcrumbs />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <I18nProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LoadingScreen />
        <TouchBubbles />
        <CursorFollower />
        <GrainOverlay />
        <BrowserRouter>
          <SkipToContent />
          <ScrollProgress />
          <Header />
          <main id="main-content" className="pt-0">
            <AnimatedRoutes />
          </main>
          <Footer />
          <BackToTop />
          <FloatingContact />
          <ChatAssistant />
          <PWAInstallPrompt />
          <MobileCTABar />
        </BrowserRouter>
      </TooltipProvider>
    </I18nProvider>
  </QueryClientProvider>
);

export default App;
