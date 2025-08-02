// Gemini AI configuration
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API client
const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Function to generate resume content
export const generateResumeContent = async (prompt) => {
  try {
    const model = gemini.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating resume content:', error);
    throw error;
  }
};

// Example prompts for different resume sections
export const resumePrompts = {
  summary: "Generate a professional summary for a resume based on the following information:",
  experience: "Generate detailed work experience section for a resume based on the following information:",
  education: "Generate education section for a resume based on the following information:",
  skills: "Generate a comprehensive skills section for a resume based on the following information:",
  projects: "Generate a projects section for a resume based on the following information:"
};
