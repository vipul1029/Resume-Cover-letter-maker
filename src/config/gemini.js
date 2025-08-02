// Gemini AI configuration
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API client
const gemini = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Function to generate content using Gemini AI
const generateContent = async (prompt, modelType = 'gemini-pro') => {
  try {
    const model = gemini.getGenerativeModel({ model: modelType });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    if (!response) {
      throw new Error('No response received from Gemini API');
    }
    return response.text();
  } catch (error) {
    console.error('Error generating content:', error);
    throw new Error(`Failed to generate content. Please try again later. Error: ${error.message}`);
  }
};

// Function to generate resume content
export const generateResumeContent = async (prompt) => {
  return await generateContent(prompt);
};

// Function to generate cover letter content
export const generateCoverLetter = async (prompt) => {
  return await generateContent(prompt);
};

// Example prompts for different resume sections
export const resumePrompts = {
  summary: "Generate a professional summary for a resume based on the following information:",
  experience: "Generate detailed work experience section for a resume based on the following information:",
  education: "Generate education section for a resume based on the following information:",
  skills: "Generate a comprehensive skills section for a resume based on the following information:",
  projects: "Generate a projects section for a resume based on the following information:"
};
