import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about ModernSite and our mission to build amazing web experiences.',
};

const values = [
  {
    icon: Users,
    title: 'Team First',
    description: 'We believe in the power of collaboration and putting our team first.',
  },
  {
    icon: Target,
    title: 'Goal Oriented',
    description: 'Every project has clear objectives and measurable outcomes.',
  },
  {
    icon: Award,
    title: 'Quality Focused',
    description: 'We never compromise on quality and always strive for excellence.',
  },
  {
    icon: Heart,
    title: 'Passion Driven',
    description: 'We love what we do and it shows in everything we create.',
  },
];

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About ModernSite
          </h1>
          <p className="text-xl text-muted-foreground">
            We're a team of passionate developers and designers dedicated to creating
            exceptional web experiences that drive results.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, ModernSite began as a small team of developers who
                shared a vision: to make modern web development accessible to everyone.
                We saw the complexity that often comes with building web applications
                and wanted to simplify the process.
              </p>
              <p>
                Today, we've grown into a full-service development team that helps
                businesses of all sizes create powerful, scalable web applications.
                Our focus remains the same: delivering exceptional results through
                modern technology and thoughtful design.
              </p>
              <p>
                We believe that great software is built by great teams, and we're
                committed to fostering an environment where creativity and innovation
                can thrive.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-muted/30 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}