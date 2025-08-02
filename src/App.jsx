import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { motion } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import ResumeBuilder from './components/resume/ResumeBuilder';
import CoverLetterBuilder from './components/coverLetter/CoverLetterBuilder';
import LandingPage from './components/landing/LandingPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <Navigation />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <Outlet />
        </motion.div>
      </div>
    ),
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/login', element: <Login /> },
      {
        path: '/dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: '/resume',
        element: (
          <ProtectedRoute>
            <ResumeBuilder />
          </ProtectedRoute>
        ),
      },
      {
        path: '/cover-letter',
        element: (
          <ProtectedRoute>
            <CoverLetterBuilder />
          </ProtectedRoute>
        ),
      },
    ],
  },
], {
  future: {
    v7_startTransition: true,
  },
});

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;