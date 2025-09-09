'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { requestHelpAction } from '@/lib/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BellRing, Loader2, CheckCircle } from 'lucide-react';
import type { StaticMomData } from '@/lib/data';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Requesting...
        </>
      ) : (
        <>
          <BellRing className="mr-2 h-4 w-4" />
          Request Help
        </>
      )}
    </Button>
  );
}

export function StrategicTab({ data }: { data: StaticMomData }) {
  const initialState = { message: '', error: '' };
  const [state, dispatch] = useFormState(requestHelpAction, initialState);
  const { toast } = useToast();

  const highImpactRisks = data.risksCompliance
    .filter(risk => risk.impact === 'high')
    .map(risk => risk.riskArea)
    .join(', ');

  const riskSynopsis = `High-impact risks identified: ${highImpactRisks || 'None'}. Review required.`;

  useEffect(() => {
    if (state?.message) {
      toast({
        title: "Success",
        description: state.message,
        variant: 'default',
        action: <CheckCircle className="text-green-500" />
      });
    }
    if (state?.error) {
       toast({
        title: "Error",
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Strategic Alert</CardTitle>
        <CardDescription>When high-risk patterns are detected, you can trigger a "Flying Squad" for expert review.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch}>
          <input type="hidden" name="topic" value={data.meetingDocumentation.title} />
          <input type="hidden" name="riskSynopsis" value={riskSynopsis} />
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Meeting Topic:</h4>
              <p className="text-sm text-muted-foreground">{data.meetingDocumentation.title}</p>
            </div>
            <div>
              <h4 className="font-semibold">Risk Synopsis:</h4>
              <p className="text-sm text-muted-foreground">{riskSynopsis}</p>
            </div>
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
