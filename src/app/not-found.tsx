import React from 'react';
import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className="mx-auto w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
            <span className="text-4xl font-bold text-muted-foreground">404</span>
          </div>
          <CardTitle>Page Not Found</CardTitle>
          <CardDescription>
            Sorry, we couldn't find the page you're looking for.
            It might have been moved, deleted, or you entered the wrong URL.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <Button asChild className="flex-1">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild className="flex-1">
              <Link href="/services">
                <Search className="mr-2 h-4 w-4" />
                Browse Services
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}