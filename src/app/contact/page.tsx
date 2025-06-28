import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ModernSite. We\'d love to hear about your project and how we can help.',
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@modernsite.com',
    description: 'Send us an email anytime',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm',
  },
  {
    icon: MapPin,
    title: 'Office',
    content: '123 Tech Street, San Francisco, CA 94105',
    description: 'Come say hello at our office',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Monday - Friday: 8am - 6pm PST',
    description: 'We\'re here to help during business hours',
  },
];

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to start your project? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                We're here to help and answer any question you might have.
                We look forward to hearing from you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.description}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Quick answers to common questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    How long does a typical project take?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Project timelines vary based on complexity, but most web applications
                    take 4-12 weeks from start to finish.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Do you provide ongoing support?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer maintenance and support packages to keep your
                    application running smoothly after launch.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    What's your development process?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We follow an agile development process with regular check-ins,
                    demos, and feedback sessions to ensure we're building exactly
                    what you need.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}