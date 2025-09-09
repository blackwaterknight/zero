'use client';

import { useState, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { InfoList } from '@/app/dashboard/meeting/results/page';
import { Check, Mail, Send, Loader2, CheckCircle, CalendarPlus } from 'lucide-react';
import type { StaticMomData } from '@/lib/data';
import { emailSolutionsAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send to sonia.mishra@capgemini.com
        </>
      )}
    </Button>
  );
}


export function SolutionsTab({ data }: { data: StaticMomData }) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const { toast } = useToast();
  
  const initialState = { message: '', error: '' };
  const [state, dispatch] = useFormState(emailSolutionsAction, initialState);

  const solutionsText = `
Framework Alignment:
- IAF Perspectives: ${data.architecturalSolutions.frameworkAlignment.iafPerspectives.join(', ')}
- TOGAF ADM Phases: ${data.architecturalSolutions.frameworkAlignment.togafAdmPhases.join(', ')}

Recommended Solution Components:
- ${data.architecturalSolutions.recommendedSolution.join('\n- ')}
  `.trim();

  useEffect(() => {
    if (state.message) {
      toast({
        title: "Success",
        description: state.message,
        action: <CheckCircle className="text-green-500" />,
      });
      setShowEmailForm(false); 
    }
    if (state.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Architectural Solutions</CardTitle>
        <CardDescription>Recommendations aligned with standard architectural frameworks.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Framework Alignment</h4>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">IAF</Badge>
            <Badge variant="secondary">TOGAF</Badge>
          </div>
          <InfoList label="IAF Perspectives" items={data.architecturalSolutions.frameworkAlignment.iafPerspectives} className="mt-2" />
          <InfoList label="TOGAF ADM Phases" items={data.architecturalSolutions.frameworkAlignment.togafAdmPhases} className="mt-2" />
        </div>
        <InfoList label="Recommended Solution Components" items={data.architecturalSolutions.recommendedSolution} icon={<Check className="text-primary"/>} />
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 border-t pt-6">
        {!showEmailForm ? (
          <Button onClick={() => setShowEmailForm(true)} variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Email these Solutions
          </Button>
        ) : (
          <form action={dispatch} className="w-full space-y-4">
            <input type="hidden" name="solutions" value={solutionsText} />
            <input type="hidden" name="topic" value={data.meetingDocumentation.title} />
            
            <h4 className="font-semibold">Confirm Email Action</h4>
            <p className="text-sm text-muted-foreground">
              This will send the architectural solutions and a calendar invite for next Thursday to <span className="font-medium text-primary">sonia.mishra@capgemini.com</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <SubmitButton />
               <Button variant="ghost" size="sm" onClick={() => setShowEmailForm(false)} className="mt-2 sm:mt-0">
                Cancel
              </Button>
            </div>
            {state.error && <p className="text-sm text-destructive">{state.error}</p>}
          </form>
        )}
      </CardFooter>
    </Card>
  );
}
