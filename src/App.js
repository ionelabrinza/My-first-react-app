import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsList from './features/projects/ProjectsList';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <ProjectsList />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
