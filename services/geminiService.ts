
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getBusinessInsights = async (prompt: string, context: string) => {
  if (!API_KEY) {
    return "API Key is missing. Please ensure process.env.API_KEY is configured.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context about the user's business: ${context}\n\nUser Question: ${prompt}`,
      config: {
        systemInstruction: "You are an expert business consultant and operations analyst for Sebenza System. Your goal is to provide concise, actionable, and data-driven insights. Use a professional yet encouraging tone. Format your response using clean Markdown.",
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate an insight at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI. Please try again later.";
  }
};
