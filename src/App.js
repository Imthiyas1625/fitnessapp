import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Footer, Navbar } from './components';
import { Home, ExerciseDetail } from './pages';

function App() {
  return (
    <div className="app-container">
      <Box sx={{ width: { xs: '100%', md: '768px', xl: '1488px' }, margin: 'auto' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>

      </Box>
    </div>
  );
}

export default App;
