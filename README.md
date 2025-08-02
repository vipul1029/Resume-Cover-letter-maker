# Resume & Cover Letter Builder

A professional web application for creating and managing resumes and cover letters with AI-powered content generation.

## Features

- ✨ AI-powered resume and cover letter generation
- 🎨 Modern, responsive UI with glassmorphism design
- 🔐 Secure authentication with Firebase
- 📝 Customizable templates and real-time preview
- 📄 PDF export functionality
- 📱 Fully responsive design

## Tech Stack

- **Frontend**: React 18, Vite, TailwindCSS
- **Authentication**: Firebase Authentication
- **AI Integration**: Google Gemini AI
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Error Handling**: Error Boundaries
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Google Firebase Account
- Google Gemini API Key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/resume-coverletter-maker.git
```

2. Install dependencies:
```bash
cd resume-coverletter-maker
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory and add:
```
VITE_GEMINI_API_KEY=your_api_key_here
VITE_FIREBASE_API_KEY=your_firebase_key_here
```

4. Run the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── assets/              # Static assets
├── components/          # Reusable React components
│   ├── Auth/           # Authentication components
│   ├── landing/        # Landing page components
│   └── shared/         # Shared UI components
├── contexts/           # React Contexts
├── services/           # API and service layer
├── utils/              # Utility functions
├── App.jsx             # Root component
└── index.css           # Global styles
```

## Development Guidelines

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use descriptive variable names
- Write meaningful commit messages
- Use ESLint and Prettier for code formatting

### State Management

- Use React Context API for global state
- Implement proper error boundaries
- Use custom hooks for reusable logic

### Performance

- Implement code splitting
- Use React.memo for performance optimization
- Implement proper loading states
- Use virtual scrolling for large lists

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
