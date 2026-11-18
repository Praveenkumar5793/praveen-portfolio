import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StackSection } from './components/StackSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AIAssistantSection } from './components/AIAssistantSection';
import { AnswersSection } from './components/AnswersSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <Navbar />
      <main>
        <Hero />
        <StackSection />
        <ExperienceSection />
        <ProjectsSection />
        <AIAssistantSection />
        <AnswersSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
