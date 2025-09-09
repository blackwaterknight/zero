'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Loader2 } from 'lucide-react';

const steps = [
  "Acquiring Session Audio",
  "Real-Time Multilingual Transcription",
  "Synthesizing Meeting Minutes",
  "Crafting IAF/TOGAF-Aligned Strategies",
  "Evaluating Strategic Options",
  "Projecting Cost Models",
  "Validating Risk Mitigation Strategies",
  "Generating Insightful Visuals",
];

export default function ProcessingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 4000;
    const stepInterval = totalDuration / steps.length;

    const stepTimers = steps.map((_, index) => 
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, (index + 1) * stepInterval)
    );

    const progressInterval = setInterval(() => {
        setProgress(prev => {
            if (prev >= 100) {
                clearInterval(progressInterval);
                return 100;
            }
            return prev + 1;
        })
    }, totalDuration / 100);

    const finalRedirect = setTimeout(() => {
      router.push('/dashboard/meeting/results');
    }, totalDuration + 500);

    return () => {
      stepTimers.forEach(clearTimeout);
      clearTimeout(finalRedirect);
      clearInterval(progressInterval);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Analyzing Meeting...</h1>
        <p className="text-muted-foreground">Please wait while Archie processes the information.</p>
      </div>

      <div className="w-full max-w-2xl space-y-3">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-4 text-left">
            <div className="flex-shrink-0 w-6">
              {index < currentStep ? (
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              ) : (
                <Loader2 className={`h-6 w-6 text-primary ${index === currentStep ? 'animate-spin' : 'opacity-50'}`} />
              )}
            </div>
            <div className='flex-1'>
                <p className={`transition-colors ${index < currentStep ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                {step}
                </p>
                <p className="text-xs text-muted-foreground/80">
                {index < currentStep ? 'Processing complete.' : (index === currentStep ? `Analyzing ${progress}%...` : 'Pending...')}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
