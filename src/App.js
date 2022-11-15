import '@mui/material';
import 'react-icons';
import 'react-icons/bi';
import 'react-icons/md';
import 'react-icons/bs';
import 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  initiateSocketConnection();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
 
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
