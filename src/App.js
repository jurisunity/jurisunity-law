import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import HeroSection from './Pages/HeroSection';
import AboutSection from './Pages/AboutSection';
import ContactSection from './Pages/ContactSection';
import Footer from './Pages/Footer';
import Purpose from './Pages/Propuse';
import Founder from './Pages/Founder';
import Eligibility from './Pages/Eligibility';
import GetStartedToday from './Pages/GetStartToday';
import OnlineCertifiedCourse from './Pages/OnlineCertifiedCourse';
import InternshipOpportunity from './Pages/InternshipOpportunity';

function App() {
  return (
    <>
      <Header />
      <main className=''>
        <HeroSection />
        <AboutSection />
        <OnlineCertifiedCourse />
        <InternshipOpportunity/>
        <Eligibility/>
        <Purpose />
        <Founder />
        <GetStartedToday/>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
