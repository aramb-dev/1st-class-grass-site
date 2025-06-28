import React from 'react';
import { Zap, Shield, Smartphone, Globe, Code, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { FeatureCard } from '@/types';

const features: FeatureCard[] = [
  {
    id: '1',
    title: 'Lightning Fast',
    description: 'Optimized for speed with modern build tools and CDN delivery.',
    icon: 'Zap',
  },
  {
    id: '2',
    title: 'Secure by Default',
    description: 'Built-in security features and best practices out of the box.',
    icon: 'Shield',
  },
  {
    id: '3',
    title: 'Mobile First',
    description: 'Responsive design that works perfectly on all devices.',
    icon: 'Smartphone',
  },
  {
    id: '4',
    title: 'Global Scale',
    description: 'Deploy worldwide with edge computing and global CDN.',
    icon: 'Globe',
  },
  {
    id: '5',
    title: 'Developer Friendly',
    description: 'Modern tooling and excellent developer experience.',
    icon: 'Code',
  },
  {
    id: '6',
    title: 'Team Collaboration',
    description: 'Built for teams with collaboration tools and workflows.',
    icon: 'Users',
  },
];

const iconMap = {
  Zap,
  Shield,
  Smartphone,
  Globe,
  Code,
  Users,
};

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to help you build better web applications
            faster and more efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <Card
                key={feature.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to get started with all these features?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Start Building Today
            </a>
            <a
              href="/docs"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}