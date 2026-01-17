import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Approach from "./pages/Approach";
import TalentDevelopment from "./pages/TalentDevelopment";
import TalentAssessment from "./pages/TalentAssessment";
import Challenges from "./pages/Challenges";
import SuccessStories from "./pages/SuccessStories";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ui/scrollToTop";
import BehaviourArchitecture from "@/pages/services/BehaviourArchitecture";
import LeadershipExcel from "@/pages/services/LeadershipExcel";
import LeadershipExcavation from "@/pages/services/LeadershipExcavation";
import LeadershipArchitecture from "@/pages/services/LeadershipArchitecture";
import CompetencyFramework from "@/pages/services/CompetencyFramework";
import BehaviourAssessment from "@/pages/services/BehaviourAssessment";
import AssessmentCentre from "@/pages/services/AssessmentCentre";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/talent-development" element={<TalentDevelopment />} />          
          <Route path="/talent-assessment" element={<TalentAssessment />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/behaviour-architecture" element={<BehaviourArchitecture />} />
          <Route path="/services/leadership-excel" element={<LeadershipExcel />} />
          <Route path="/services/leadership-excavation" element={<LeadershipExcavation />} />
          <Route path="/services/leadership-architecture" element={<LeadershipArchitecture />} />
          <Route path="/services/competency-framework" element={<CompetencyFramework />} />
          <Route path="/services/behaviour-assessment" element={<BehaviourAssessment />} />
          <Route path="/services/assessment-centre" element={<AssessmentCentre />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
