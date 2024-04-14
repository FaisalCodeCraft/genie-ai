import { ThemeProvider, createMuiTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';
import ContextProvider from 'context';

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  MuiList: {
    styleOverrides: {
      root: {
        "&.MuiList-sideBar-menu": {
          width: 200,
          minHeight: "100vh",
        },
      },
    },
  },
});
function App() {
  return (

    <ThemeProvider theme={theme}>
      <ContextProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </ContextProvider >
    </ThemeProvider>

  )
}

export default App;
