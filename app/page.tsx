import Hero from '@/components/home/Hero';
import PathFork from '@/components/home/PathFork';
import WhatIsTreaWork from '@/components/home/WhatIsTreaWork';
import HowItWorks from '@/components/home/HowItWorks';
import Trust from '@/components/home/Trust';
import FeaturedTutors from '@/components/home/FeaturedTutors';
import Testimonials from '@/components/home/Testimonials';
import GlobalCTA from '@/components/home/GlobalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <PathFork />
      <WhatIsTreaWork />
      <HowItWorks />
      <Trust />
      <FeaturedTutors />
      <Testimonials />
      <GlobalCTA />
    </>
  );
}
