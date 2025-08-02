import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Create Your Future with Confidence
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build impressive resumes and cover letters in minutes with our intelligent, AI-powered tool.
            Whether you're starting out or stepping up, make every application count.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/signup"
              className="btn-primary px-8 py-4 text-lg font-semibold"
            >
              Get Started Free
            </Link>
            <Link
              to="/login"
              className="btn-outline px-8 py-4 text-lg font-semibold"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Generation</h3>
              <p className="text-gray-600">
                Our advanced AI algorithms create professional and tailored resumes and cover letters
                that highlight your strengths and achievements.
              </p>
            </div>

            <div className="card">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Preview</h3>
              <p className="text-gray-600">
                See how your resume and cover letter will look in real-time as you make changes.
                Our preview feature ensures your documents are perfect before submission.
              </p>
            </div>

            <div className="card">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Templates</h3>
              <p className="text-gray-600">
                Choose from our professional templates or create your own custom design.
                Our templates are industry-specific and ATS-friendly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
