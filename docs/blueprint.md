# **App Name**: Archie Assistant

## Core Features:

- Login Authentication: Secure user authentication using Firebase Auth with email/password login. Firebase Authentication is utilized.
- Meeting Mode Selection: Select the meeting type for targeted assistance. Choose Business or Technical Team option.
- Meeting Recording Simulation: Simulate meeting audio recording with start and stop functionality; multi-language support with the capability to save static files from Firestore to prepare meeting summary and architecture recommendations with AI.
- AI-Powered Meeting Summarization: Use an AI tool to generate meeting summaries and architectural recommendations from transcribed audio. Generates MoM (Minutes of Meeting) and IAF/TOGAF-aligned solution suggestions based on meeting discussion, triggered after meeting audio recording simulation.
- Results Presentation: Show meeting outcomes like MoM, architectural options, and risk evaluation. Includes cost estimation with charts to provide quick, comparable solution analysis.  All result fetched and kept synced by Firestore in Realtime.
- Strategic Alert Trigger: If meeting summaries identify risks or critical concerns, notify Flying Squad.
- Architects Wagon Wheel Navigation: Enables users to navigate to different subsection in Wagon Wheel which helps get information.

## Style Guidelines:

- Primary color: Capgemini blue (#0067A3), conveying trust and professionalism.
- Background color: Light grey (#F2F4F7) offers a neutral, clean backdrop.
- Accent color: A brighter, related blue (#00A1E0) used selectively for highlights and interactive elements.
- Body and headline font: 'PT Sans', a humanist sans-serif, is selected to make the application user friendly.
- Consistent usage of Capgemini-style icons, following the company brand book.
- Use grid-based layouts to organize data-dense components
- Transition animations of elements should appear for emphasis or transitions of modes in the application.