# Archie – Capgemini Architect Assistant

This is a Next.js web application built for a hackathon POC. It demonstrates how AI can assist architects by summarizing meetings, generating architectural recommendations, and providing access to a knowledge base. The project is built with a focus on showcasing Firebase integration, real-time capabilities, and a professional, polished user experience.

## ✨ Features

- **AI-Powered Meeting Analysis**: Simulate recording a meeting and receive an AI-generated summary, architectural solutions, cost estimations, and risk analysis.
- **Architects Wagon Wheel**: An interactive knowledge base for accessing architectural methods, best practices, and expert resources.
- **Firebase Integration**: Utilizes Firebase for potential authentication, real-time data (simulated), and serverless functions (simulated).
- **Modern UI/UX**: A clean, professional, and responsive user interface built with Next.js, ShadCN/UI, and Tailwind CSS, following Capgemini's branding.
- **Demo Ready**: Designed for a hackathon demo, with simulated processing and pre-seeded data to ensure a smooth and impressive presentation.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Firebase account](https://firebase.google.com/) and a new Firebase project.
- [Firebase CLI](https://firebase.google.com/docs/cli) installed and configured.

### 1. Project Setup

Clone the repository and install the dependencies.

```bash
# Clone this project
git clone <repository_url>
cd archie-assistant

# Install dependencies
npm install
```

### 2. Firebase Configuration

1.  **Create a Firebase Project**: Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  **Add a Web App**: In your project settings, add a new Web App (`</>`).
3.  **Get Config**: Firebase will provide you with a `firebaseConfig` object. Copy these credentials.
4.  **Create `.env.local`**: Create a `.env.local` file in the root of the project and add your Firebase config variables.

    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=...
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
    NEXT_PUBLIC_FIREBASE_APP_ID=...
    ```

### 3. Running the Application

This application uses Genkit for its AI flow, which needs to run alongside the Next.js development server.

```bash
# In your first terminal, start the Next.js dev server
npm run dev

# In a second terminal, start the Genkit flow server
npm run genkit:dev
```

Now, open [http://localhost:9002](http://localhost:9002) in your browser to see the application.

### 4. Seeding Firestore Data (Optional)

The application currently uses local static data for the demo. To use Firestore, you would need to:
1.  Initialize Firestore in your Firebase project.
2.  Write a script (e.g., `scripts/seed.js`) to upload the contents of `src/lib/data.ts` and `src/lib/wagon-wheel-data.ts` to your Firestore database.
3.  Update the components in `src/app/dashboard/` to fetch data from Firestore instead of importing from local files.

## 💡 Suggested Demo Script

1.  **Login**: Open the app and land on the login screen. Use any email and password (e.g., `architect@capgemini.com`) and click "Login".
2.  **Dashboard**: You'll be taken to the dashboard. Briefly explain the two main features: "Join a Meeting" and "Explore Knowledge Base".
3.  **Start Meeting Flow**: Click on "Join a Meeting".
4.  **Select Mode**: Choose either "Business Team" or "Technical Team" and click "Continue".
5.  **Simulate Recording**: On the assistant screen, click "Start Recording". Talk for a moment about a fictional project (e.g., migrating SAP to the cloud). Then click "Stop & Analyze".
6.  **AI Processing**: Watch as the app simulates a multi-step AI analysis pipeline. This is a great moment to explain what the AI is "doing" (transcribing, summarizing, etc.).
7.  **Review Results**:
    *   Once on the results screen, tour the different tabs.
    *   Start with the **Minutes** and **Documentation** tabs to show the basic summary.
    *   Move to the **Solutions** and **Options** tabs to highlight the architectural recommendations.
    *   Show the **Cost** tab with its donut chart and the **Risks** tab with the heatmap for visual impact.
8.  **Trigger Strategic Alert**: Go to the **Strategic** tab. Explain that high-risk items were detected, and click "Request Help" to simulate notifying an expert "Flying Squad". A success notification will appear.
9.  **Explore Knowledge Base**: Navigate back to the dashboard via the "Back to Home" button. Click "Explore Knowledge Base".
10. **Wagon Wheel**: Showcase the "Wagon Wheel" layout. Click on a category like "METHODS" to drill down into its subsections.

## 🛠️ Future Extensibility

This POC is architected for easy extension.

-   **Real AI/STT**: The meeting analysis flow is simulated in `src/app/dashboard/meeting/processing/page.tsx`. To add real AI, you can:
    *   Implement audio recording using a library like `react-media-recorder`.
    *   Send the recorded audio to a Firebase Function that uses a service like Google's Speech-to-Text or Whisper API.
    *   Use the `aiMeetingSummarization` Genkit flow in `src/ai/flows` by passing the transcribed text to it.
    *   The Genkit flow can be expanded to generate all the data needed for the results tabs.
-   **Real-time Firestore**: The results currently use static data. This can be replaced with a real-time listener from Firestore to show live updates, which is highly impressive in a demo.
-   **Email/Notifications**: The "Flying Squad" action in `src/lib/actions.ts` can be modified to call a real Firebase Function that sends an email using a service like SendGrid or Resend.
