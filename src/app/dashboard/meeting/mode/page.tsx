'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Briefcase, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function MeetingModePage() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/dashboard/meeting/assistant');
  };

  return (
    <div className="container max-w-2xl mx-auto py-8">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/dashboard"> &larr; Back to Dashboard</Link>
      </Button>
      <h1 className="text-3xl font-bold font-headline mb-2">Select Meeting Mode</h1>
      <p className="text-muted-foreground mb-8">Choose the context of your meeting for tailored assistance.</p>
      
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="p-6">
            <RadioGroup defaultValue="business" className="grid gap-4">
              <Label htmlFor="business-team" className="cursor-pointer">
                <Card className="hover:border-primary has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/50">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <RadioGroupItem value="business" id="business-team" className="sr-only" />
                    <Briefcase className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle>Business Team</CardTitle>
                      <CardDescription>Focus on strategy, objectives, and business value.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </Label>
              <Label htmlFor="technical-team" className="cursor-pointer">
                <Card className="hover:border-primary has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/50">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <RadioGroupItem value="technical" id="technical-team" className="sr-only" />
                    <Terminal className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle>Technical Team</CardTitle>
                      <CardDescription>Focus on implementation details, frameworks, and APIs.</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </Label>
            </RadioGroup>
          </CardContent>
        </Card>
        <div className="flex justify-end mt-6">
          <Button type="submit">Continue &rarr;</Button>
        </div>
      </form>
    </div>
  );
}
