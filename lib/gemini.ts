import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

interface GenerateAiResponseParams {
  destination: string;
  duration: number;
  budget: number;
  instructions?: string;
}

export async function generateAiResponse(prompt: GenerateAiResponseParams) {
  if (!prompt.destination || !prompt.duration) {
    return "Please provide destination and duration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
Plan a trip with the following details:

Destination: ${prompt.destination}
Duration: ${prompt.duration} days
Budget: ₹${prompt.budget} (per person)
Additional preferences: ${prompt.instructions || "None"}
      `,
      config: {
        systemInstruction: `
You are a travel planner AI.

Rules:
- Only respond to travel-related queries
- Politely refuse unrelated queries
- Keep responses concise but helpful
- Use clean markdown formatting
- Use headings and bullet points
- Include itinerary, places, and tips
        `,
      },
    });

    return response.text;
  } catch (error) {
    console.error(error);
    return "Failed to generate travel plan. Try again.";
  }
}