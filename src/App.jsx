import {  ThemeProvider, createMuiTheme } from '@mui/material';
import Home from './pages/Home/Home';
import ContextProvider from './context';
import Dashboard from 'pages/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feature from 'pages/Feature/Feature';
import Pricing from 'pages/Pricing/Pricing';
import UseCases from 'pages/UseCases/UseCases';
import About from 'pages/About/About';
import { Contact } from 'pages/Contact/Contact';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});
function App() {
  return (

    <ThemeProvider theme={theme}>
      <ContextProvider>
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Feature' element={<Feature />} />
            <Route path='/Pricing' element={<Pricing />} />
            <Route path='/UseCases' element={<UseCases />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/Dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider >
    </ThemeProvider>

  )
}

export default App;
