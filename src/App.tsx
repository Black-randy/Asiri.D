import { useEffect, useState, useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
// import BlogSection from '@/components/sections/BlogSection';
import { ThemeProvider, useTheme } from '@/providers/theme-provider';
import Squares from '@/components/ui/Squares';
import { navItems } from '@/data/navigation';
import ReactGA from 'react-ga4';
import speedInsights from '@vercel/speed-insights'; // Correct default import for Vite


function AppContent() {
  // Access the current theme and a function to update it
  const { theme, setTheme } = useTheme();

  // State to track the currently active section
  const [activeSection, setActiveSection] = useState('home');

  // Reference to the main content area
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize Google Analytics with the measurement ID from environment variables
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
      ReactGA.initialize(gaId);
      // Send a pageview event for the initial page load
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }

    // Define the sections to observe for intersection
    const sections = ['home', 'about', 'projects', 'blog', 'contact'];

    // Create an IntersectionObserver to detect which section is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update the active section state when a section comes into view
            setActiveSection(entry.target.id);

            // Send a pageview event for the section
            ReactGA.send({ 
              hitType: "pageview", 
              page: `/${entry.target.id}`,
              title: entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1) // Capitalize the section name
            });
          }
        });
      },
      { 
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-20% 0px -20% 0px' // Adjust the viewport margins for triggering
      }
    );

    // Observe each section by its ID
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup the observer when the component unmounts
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');

    // Log the theme toggle event in Google Analytics
    ReactGA.event({
      category: 'Theme',
      action: 'Toggle',
      label: theme === 'light' ? 'Dark' : 'Light'
    });
  };

  return (
    <div className="min-h-screen bg-background/50 text-foreground transition-colors duration-300 relative">
      {/* Render animated squares in the background */}
      <Squares 
        speed={0.2} 
        squareSize={40}
        direction='diagonal'
        borderColor={theme === 'dark' ? '#fff' : '#000'}
        hoverFillColor={theme === 'dark' ? '#222' : '#eee'}
      />
      
      {/* Render the navigation bar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection} 
        navItems={navItems} 
        setActiveSection={setActiveSection}
      />

      <main ref={mainRef} className="container mx-auto px-4 pt-8 md:pt-24 pb-8 md:pb-4 space-y-16 md:space-y-24 relative z-10">
        <div className="relative min-h-[80vh] w-full">
          <HeroSection />
        </div>
        <AboutSection />
        <ProjectsSection />
        {/* <div id="blog">
          <BlogSection />
        </div> */}
        <ContactSection /> 
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  // Inject Vercel Speed Insights once at the root level
  useEffect(() => {
    speedInsights.injectSpeedInsights();
  }, []);
  // Wrap the application in a ThemeProvider to manage theme state
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;