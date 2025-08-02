import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const ResumeBuilder = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      setError('Failed to logout');
    }
  };

  const handleSaveResume = async () => {
    try {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setError('Failed to save resume');
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Resume Builder</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Resume Preview Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Resume Preview</h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
                <p className="text-gray-600 mb-4">john.doe@email.com | (123) 456-7890</p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Professional Summary</h4>
                  <p className="text-gray-600">Experienced professional with a passion for technology and innovation...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {success && (
          <div className="text-green-500 text-sm mt-4">
            Resume saved successfully!
          </div>
        )}

        {error && (
          <div className="text-red-500 text-sm mt-4">
            {error}
          </div>
        )}

        <div className="flex justify-between items-center">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
          <button
            onClick={handleSaveResume}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Save Resume
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeBuilder;
