'use server';

import { z } from 'zod';

const requestHelpSchema = z.object({
  topic: z.string(),
  riskSynopsis: z.string(),
});

export async function requestHelpAction(prevState: any, formData: FormData) {
  const rawFormData = {
    topic: formData.get('topic'),
    riskSynopsis: formData.get('riskSynopsis'),
  };

  const validatedData = requestHelpSchema.safeParse(rawFormData);
  if (!validatedData.success) {
    return {
      message: '',
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
    error: '',
  };
}

const emailSolutionsSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  solutions: z.string(),
  topic: z.string(),
});

export async function emailSolutionsAction(prevState: any, formData: FormData) {
    const rawFormData = {
        email: formData.get('email'),
        solutions: formData.get('solutions'),
        topic: formData.get('topic'),
    };

    const validatedData = emailSolutionsSchema.safeParse(rawFormData);

    if (!validatedData.success) {
        return {
            message: '',
            error: validatedData.error.errors.map(e => e.message).join(', '),
        };
    }

    // Simulate sending an email
    console.log('--- SENDING EMAIL ---');
    console.log('To:', validatedData.data.email);
    console.log('Subject:', `Architectural Solutions for: ${validatedData.data.topic}`);
    console.log('Body:', validatedData.data.solutions);
    console.log('---------------------');

    return {
        message: `Solutions successfully sent to ${validatedData.data.email}.`,
        error: '',
    };
}
