import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Globe, Zap, Shield, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Discover our comprehensive web development services designed to help your business grow.',
};

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
    features: ['React & Next.js', 'TypeScript', 'API Development', 'Database Design'],
    price: 'Starting at $5,000',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    features: ['React Native', 'iOS Development', 'Android Development', 'App Store Deployment'],
    price: 'Starting at $8,000',
  },
  {
    icon: Globe,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with payment processing and inventory management.',
    features: ['Shopify Development', 'WooCommerce', 'Payment Integration', 'Inventory Management'],
    price: 'Starting at $7,000',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your existing applications and improve user experience.',
    features: ['Speed Optimization', 'SEO Improvements', 'Core Web Vitals', 'Monitoring Setup'],
    price: 'Starting at $2,000',
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Comprehensive security assessments and vulnerability testing.',
    features: ['Security Testing', 'Vulnerability Assessment', 'Compliance Review', 'Security Training'],
    price: 'Starting at $3,000',
  },
  {
    icon: Users,
    title: 'Consulting',
    description: 'Strategic technology consulting to help guide your digital transformation.',
    features: ['Technology Strategy', 'Architecture Review', 'Team Training', 'Project Planning'],
    price: 'Starting at $200/hour',
  },
];

export default function ServicesPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive web development services designed to help your business
            grow and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <div className="text-lg font-semibold text-foreground mb-3">
                    {service.price}
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business is unique. If you don't see exactly what you're looking for,
            let's discuss how we can create a custom solution that fits your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}