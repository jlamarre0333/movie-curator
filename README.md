# Movie Curator

A modern web application for managing and discovering movies and TV shows. Built with React, TypeScript, and Redux Toolkit.

## Features

- Browse and search movies and TV shows
- Add content to your watchlist
- Track watched content with ratings
- Get personalized recommendations
- Filter and sort your content

## Tech Stack

- Frontend: React, TypeScript, Redux Toolkit, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Testing: Jest, React Testing Library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/movie-curator.git
cd movie-curator
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Add necessary environment variables (see `.env.example`)

4. Start the development servers:
```bash
# Start backend server (from backend directory)
npm start

# Start frontend server (from frontend directory)
npm start
```

## Development

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:5000

## Testing

```bash
# Run frontend tests
cd frontend
npm test

# Run backend tests
cd backend
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 