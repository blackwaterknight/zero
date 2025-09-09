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
  solutions: z.string(),
  topic: z.string(),
});

function getNextThursday(): Date {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday - 0, ... Thursday - 4, ...
    const daysUntilThursday = (4 - dayOfWeek + 7) % 7;
    const nextThursday = new Date(today.getTime());
    nextThursday.setDate(today.getDate() + daysUntilThursday + 7); // Ensure it's next week's Thursday
    nextThursday.setHours(15, 0, 0, 0); // Set to 3 PM
    return nextThursday;
}

function createICS(topic: string, solutions: string): string {
    const eventDate = getNextThursday();
    const startTime = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    eventDate.setHours(eventDate.getHours() + 1);
    const endTime = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Capgemini//Archie//EN',
        'BEGIN:VEVENT',
        `UID:${now}@capgemini.com`,
        `DTSTAMP:${now}`,
        `DTSTART:${startTime}`,
        `DTEND:${endTime}`,
        `SUMMARY:Follow-up for: ${topic}`,
        `DESCRIPTION:Please review the attached architectural solutions prior to the meeting.\\n\\n${solutions.replace(/\n/g, '\\n')}`,
        'LOCATION:Microsoft Teams',
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');

    return icsContent;
}


export async function emailSolutionsAction(prevState: any, formData: FormData) {
    const rawFormData = {
        solutions: formData.get('solutions'),
        topic: formData.get('topic'),
    };
    
    // For demo purposes, the email is hardcoded.
    const email = "sonia.mishra@capgemini.com";

    const validatedData = emailSolutionsSchema.safeParse(rawFormData);

    if (!validatedData.success) {
        return {
            message: '',
            error: validatedData.error.errors.map(e => e.message).join(', '),
        };
    }

    const icsFileContent = createICS(validatedData.data.topic, validatedData.data.solutions);

    // Simulate sending an email with ICS attachment
    console.log('--- SIMULATING EMAIL & CALENDAR INVITE ---');
    console.log('To:', email);
    console.log('Subject:', `Architectural Solutions & Meeting Invite for: ${validatedData.data.topic}`);
    console.log('Body:', validatedData.data.solutions);
    console.log('---');
    console.log('ICS Attachment (invite.ics):');
    console.log(icsFileContent);
    console.log('-------------------------------------------');

    return {
        message: `Solutions and calendar invite successfully sent to ${email}.`,
        error: '',
    };
}
