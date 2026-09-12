import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyArcade from '../components/WhyArcade';
import FeaturedGames from '../components/FeaturedGames';
import HowItWorks from '../components/HowItWorks';
import Technology from '../components/Technology';
import PlayerExperience from '../components/PlayerExperience';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-ink-950 text-bone-50">
      <Navbar />
      <main>
        <Hero />
        <WhyArcade />
        <FeaturedGames />
        <HowItWorks />
        <Technology />
        <PlayerExperience />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home
