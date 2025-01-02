import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import AnimatedBackground from './components/AnimatedBackground';
import './styles/theme.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen text-foreground bg-gradient-to-br from-background via-background/95 to-background">
        <AnimatedBackground />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
       
      </div>
    </Router>
  );
}