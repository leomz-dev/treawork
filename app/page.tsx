import Hero from '@/components/home/Hero';
import WhatIsTreaWork from '@/components/home/WhatIsTreaWork';
import HowItWorks from '@/components/home/HowItWorks';
import Trust from '@/components/home/Trust';
import Testimonials from '@/components/home/Testimonials';
import GlobalCTA from '@/components/home/GlobalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsTreaWork />
      <HowItWorks />
      <Trust />
      <Testimonials />
      <GlobalCTA />
    </>
  );
}
