'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/logo';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const email = (event.target as HTMLFormElement).email.value;
    const password = (event.target as HTMLFormElement).password.value;

    // Simulate domain validation and Firebase Auth call
    setTimeout(() => {
      if (!email.toLowerCase().endsWith('@capgemini.com')) {
        toast({
          title: "Login Failed",
          description: "Only Capgemini emails are allowed.",
          variant: "destructive",
        });
        setError('Only Capgemini emails are allowed.');
        setIsLoading(false);
        return;
      }
      
      // In a real app, you would use Firebase Auth here.
      // For this POC, we'll just simulate a successful login.
      if (email && password) {
        router.push('/dashboard');
      } else {
        setError('Please enter your credentials.');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="absolute top-8">
        <Logo />
      </div>
      <Card className="w-full max-w-sm shadow-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Welcome to Archie</CardTitle>
          <CardDescription>Enter your credentials to access your architect assistant.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="architect@capgemini.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required defaultValue="password" />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
             <Button className="w-full" variant="outline" type="button" disabled={isLoading}>
              Sign Up
            </Button>
          </CardFooter>
        </form>
      </Card>
      <div className="absolute bottom-8 text-center text-sm text-muted-foreground">
        <p>Powered by Firebase &amp; Capgemini AI – Real-Time Excellence</p>
      </div>
    </main>
  );
}
