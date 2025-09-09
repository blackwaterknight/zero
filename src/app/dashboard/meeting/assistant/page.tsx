'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, MicOff, Square, Play, Hourglass, Wind } from 'lucide-react';
import Link from 'next/link';

export default function AssistantPage() {
  const router = useRouter();
  const [isRecording, setIsRecording] = useState(false);

  const handleStart = () => setIsRecording(true);
  const handleStop = () => {
    setIsRecording(false);
    router.push('/dashboard/meeting/processing');
  };

  return (
    <div className="container max-w-4xl mx-auto py-8">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/dashboard/meeting/mode"> &larr; Back to Mode Selection</Link>
      </Button>
      <h1 className="text-3xl font-bold font-headline mb-2">Meeting Assistant</h1>
      <p className="text-muted-foreground mb-8">
        {isRecording ? "Recording in progress..." : "Ready to capture your meeting."}
      </p>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-video bg-muted/30 flex flex-col items-center justify-center p-8 text-center relative">
            <div className="absolute top-4 left-4 flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              LIVE SIMULATION
            </div>

            {!isRecording ? (
              <div className="flex flex-col items-center gap-4">
                <Mic className="w-24 h-24 text-primary/70" />
                <h2 className="text-2xl font-bold">Ready to Record</h2>
                <p className="text-muted-foreground max-w-md">
                  Click 'Begin Architect Analysis' to begin the simulation. The assistant will listen and prepare for analysis.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <Mic className="w-24 h-24 text-destructive animate-pulse" />
                  <Wind className="w-8 h-8 text-muted-foreground absolute -right-4 top-1/2 animate-ping opacity-50"/>
                  <Wind className="w-12 h-12 text-muted-foreground absolute -left-8 top-1/4 animate-ping opacity-30 delay-500"/>
                </div>
                <h2 className="text-2xl font-bold">Capturing Audio...</h2>
                <p className="text-muted-foreground max-w-md">
                  The AI is now capturing the conversation. Click 'Process Insights Now' when the meeting concludes.
                </p>
              </div>
            )}
          </div>
          <div className="bg-card border-t p-4 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4">
              {!isRecording ? (
                <Button size="lg" onClick={handleStart}>
                  <Play className="mr-2 h-5 w-5" />
                  Begin Architect Analysis
                </Button>
              ) : (
                <Button size="lg" variant="destructive" onClick={handleStop}>
                  <Square className="mr-2 h-5 w-5" />
                  Process Insights Now
                </Button>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-2">Powered by Capgemini’s AI-Driven Architecture Engine</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
