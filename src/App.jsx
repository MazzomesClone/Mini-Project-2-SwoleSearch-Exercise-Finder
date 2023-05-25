import Box from '@mui/system/Box'
import { BrowserRouter } from 'react-router-dom';
import PageRouter from './components/PageRouter';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import ExerciseProvider from './contexts/ExerciseContext';
import SavedExerciseProvider from './contexts/SavedExerciseContext';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <SavedExerciseProvider>
        <ExerciseProvider>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            bgcolor: 'background.default',
            color: 'text.primary',
            transition: 'background 0.2s'
          }}>

            <ResponsiveAppBar />

            <PageRouter />

          </Box>

        </ExerciseProvider>
      </SavedExerciseProvider>
    </BrowserRouter>
  )
}

export default App
