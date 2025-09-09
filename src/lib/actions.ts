'use server';

import { z } from 'zod';

const requestHelpSchema = z.object({
  topic: z.string(),
  riskSynopsis: z.string(),
});

export async function requestHelpAction(formData: FormData) {
  const rawFormData = {
    topic: formData.get('topic'),
    riskSynopsis: formData.get('riskSynopsis'),
  };

  const validatedData = requestHelpSchema.safeParse(rawFormData);
  if (!validatedData.success) {
    return {
      error: 'Invalid data provided.',
    };
  }

  // In a real application, this would trigger a Firebase Function
  // to send an email or create a ticket.
  console.log('--- FLYING SQUAD ALERT ---');
  console.log('Topic:', validatedData.data.topic);
  console.log('Synopsis:', validatedData.data.riskSynopsis);
  console.log('--------------------------');
  
  // This simulates a successful call to a backend service.
  return {
    message: 'Flying Squad has been notified. They will reach out shortly.',
  };
}
