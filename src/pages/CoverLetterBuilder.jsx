import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const CoverLetterBuilder = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    coverLetter: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      setError('Failed to logout');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateCoverLetter = async () => {
    try {
      // TODO: Implement Gemini AI API call here
      const generatedLetter = `Dear Hiring Manager,

I am writing to express my interest in the ${formData.jobTitle} position at ${formData.companyName}. With my background in ${formData.jobTitle.toLowerCase()} and my passion for ${formData.companyName}'s mission, I am confident that I can make a valuable contribution to your team.

[Generated content will appear here]

Sincerely,
${formData.yourName}`;

      setFormData((prev) => ({
        ...prev,
        coverLetter: generatedLetter,
      }));

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setError('Failed to generate cover letter');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Cover Letter Builder</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Job Information Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Job Information</h2>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  placeholder="Enter job title"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  placeholder="Enter company name"
                />
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Your Information</h2>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="yourEmail"
                  value={formData.yourEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Your Phone</label>
                <input
                  type="tel"
                  name="yourPhone"
                  value={formData.yourPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>

          {/* Generate Cover Letter Section */}
          <div className="mt-8">
            <button
              onClick={generateCoverLetter}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-4"
            >
              Generate Cover Letter
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>

          {success && (
            <div className="text-green-500 text-sm mt-4">
              Cover letter generated successfully!
            </div>
          )}

          {error && (
            <div className="text-red-500 text-sm mt-4">
              {error}
            </div>
          )}

          {/* Cover Letter Preview */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Cover Letter Preview</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: formData.coverLetter }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CoverLetterBuilder;
