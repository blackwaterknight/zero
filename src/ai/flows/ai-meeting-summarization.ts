'use server';

/**
 * @fileOverview This file defines a Genkit flow for AI-powered meeting summarization and architectural solution generation.
 *
 * - aiMeetingSummarization - A function that orchestrates the meeting summarization and solution generation process.
 * - AIMeetingSummarizationInput - The input type for the aiMeetingSummarization function, including transcribed audio.
 * - AIMeetingSummarizationOutput - The output type for the aiMeetingSummarization function, containing meeting summaries and architectural recommendations.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIMeetingSummarizationInputSchema = z.object({
  transcribedAudio: z.string().describe('The transcribed text from the meeting audio.'),
});
export type AIMeetingSummarizationInput = z.infer<typeof AIMeetingSummarizationInputSchema>;

const AIMeetingSummarizationOutputSchema = z.object({
  minutesOfMeeting: z.string().describe('A summary of the key discussion points and decisions made during the meeting.'),
  architecturalSolutions: z.string().describe('Architectural solutions and recommendations aligned with IAF/TOGAF frameworks.'),
});
export type AIMeetingSummarizationOutput = z.infer<typeof AIMeetingSummarizationOutputSchema>;

export async function aiMeetingSummarization(input: AIMeetingSummarizationInput): Promise<AIMeetingSummarizationOutput> {
  return aiMeetingSummarizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiMeetingSummarizationPrompt',
  input: {schema: AIMeetingSummarizationInputSchema},
  output: {schema: AIMeetingSummarizationOutputSchema},
  prompt: `You are an AI assistant for architects. Your task is to summarize meetings and provide architectural solutions.

  Based on the transcribed meeting audio, generate a concise summary of the meeting, including key decisions and action items.
  Also, suggest architectural solutions aligned with IAF/TOGAF frameworks based on the meeting discussion.

  Transcribed Audio: {{{transcribedAudio}}}

  Format the output as follows:
  Minutes of Meeting: [Meeting summary with key decisions and action items]
  Architectural Solutions: [IAF/TOGAF-aligned architectural solutions and recommendations]`,
});

const aiMeetingSummarizationFlow = ai.defineFlow(
  {
    name: 'aiMeetingSummarizationFlow',
    inputSchema: AIMeetingSummarizationInputSchema,
    outputSchema: AIMeetingSummarizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
