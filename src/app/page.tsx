import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to ModernSite - Build amazing web experiences with modern technology.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}