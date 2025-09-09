'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Loader2 } from 'lucide-react';

const steps = [
  "Capturing audio",
  "Transcribing (multi-language)",
  "Summarizing MoM",
  "Generating IAF/TOGAF-aligned solutions",
  "Comparing solution options",
  "Estimating high-level costs",
  "Assessing risks & compliance",
  "Rendering visuals",
];

export default function ProcessingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const totalDuration = 3500;
    const stepInterval = totalDuration / steps.length;

    const timers = steps.map((_, index) => 
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, (index + 1) * stepInterval)
    );

    const finalRedirect = setTimeout(() => {
      router.push('/dashboard/meeting/results');
    }, totalDuration + 500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finalRedirect);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Analyzing Meeting...</h1>
        <p className="text-muted-foreground">Please wait while Archie processes the information.</p>
      </div>

      <div className="w-full max-w-md space-y-3">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-4 text-left">
            <div className="flex-shrink-0">
              {index < currentStep ? (
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              ) : (
                <Loader2 className={`h-6 w-6 text-primary ${index === currentStep ? 'animate-spin' : 'opacity-50'}`} />
              )}
            </div>
            <p className={`transition-colors ${index < currentStep ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
