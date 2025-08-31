import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroContent from '../components/HeroContent';
import Services from '../components/Services';
import Industries from '../components/Industries';
import StatsSection from '../components/StatsSection';
import Projects from '../components/Projects';
import CustomerReviews from '../components/CustomerReviews';
import Team from '../components/Team';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <HeroContent />
      <Services />
      <Industries />
      <StatsSection />
      <Projects />
      <CustomerReviews />
      {/* <Team /> */}
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
