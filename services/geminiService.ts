import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateAIResponse = async (
  prompt: string,
  systemInstruction?: string
): Promise<string> => {
  try {
    const ai = getClient();
    const model = ai.models;
    
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while connecting to the AI service. Please check your connection and API key.";
  }
};

export const checkPII = (text: string): boolean => {
  // Simple regex heuristic for demo purposes
  // Detects SSN-like patterns or Email-like patterns
  const ssnRegex = /\d{3}-\d{2}-\d{4}/;
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  return ssnRegex.test(text) || emailRegex.test(text);
};