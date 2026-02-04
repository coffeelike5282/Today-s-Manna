import { GoogleGenAI, Type } from "@google/genai";
import { MannaData } from '../types';

// IMPORTANT: In a real production app, never expose API keys on the client side.
// This is for demonstration within the secure sandbox environment.
const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const MANNA_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    verseRef: { type: Type.STRING, description: "Book Chapter:Verse, e.g., 'John 3:16'" },
    verseText: { type: Type.STRING, description: "The verse broken into newlines for display, Korean" },
    fullVerse: { type: Type.STRING, description: "The full verse text in Korean" },
    interpretation: { type: Type.STRING, description: "A heartwarming interpretation of the verse, Korean" },
    mission: { type: Type.STRING, description: "A simple, actionable daily mission, quote style, Korean" },
  },
  required: ["verseRef", "verseText", "fullVerse", "interpretation", "mission"],
};

export const fetchDailyManna = async (): Promise<MannaData | null> => {
  if (!API_KEY) {
    console.warn("No API Key found for Gemini");
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a daily manna for a Christian meditation app. The tone should be cute, pastel, encouraging, and warm. Include a Bible verse, a short interpretation, and a simple mission.",
      config: {
        responseMimeType: "application/json",
        responseSchema: MANNA_SCHEMA,
        systemInstruction: "You are a warm, encouraging companion for a daily bible meditation app.",
      },
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text) as MannaData;
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch Manna:", error);
    return null;
  }
};
