import { ThemeProvider, createMuiTheme } from '@mui/material';
import Home from './pages/Home/Home';
import ContextProvider from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feature from 'pages/Feature/Feature';
import Pricing from 'pages/Pricing/Pricing';
import UseCases from 'pages/UseCases/UseCases';
import About from 'pages/About/About';
import { Contact } from 'pages/Contact/Contact';
import Help from 'pages/Help/Help';
import { ROUTES } from 'constant/routes';
import DashHome from 'pages/Dashboard/Modules/Home/DashHome';
import Videos from 'pages/Dashboard/Modules/Videos/Videos';
import CreateAvater from 'pages/Dashboard/Modules/CreateAvater/CreateAvater';
import DeleteVideos from 'pages/Dashboard/Modules/DeleteVideos/DeleteVideos';

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

          <Routes>
            <Route path={ROUTES.PAGES.HOME} element={<Home />} />
            <Route path={ROUTES.PAGES.FEATURES} element={<Feature />} />
            <Route path={ROUTES.PAGES.PRICING} element={<Pricing />} />
            <Route path={ROUTES.PAGES.USECASES} element={<UseCases />} />
            <Route path={ROUTES.PAGES.ABOUT} element={<About />} />
            <Route path={ROUTES.PAGES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.PAGES.HELP} element={<Help />} />
            {/* Dashboard modules */}
            <Route path={ROUTES.PAGES.DASHBOARD.HOME} element={<DashHome />}> </Route>
            <Route path={ROUTES.PAGES.DASHBOARD.VIDEOS} element={<Videos />}> </Route>
            <Route path={ROUTES.PAGES.DASHBOARD.CREATEAVATER} element={<CreateAvater />}> </Route>
            <Route path={ROUTES.PAGES.DASHBOARD.DELETEVIDEOS} element={<DeleteVideos />}> </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider >
    </ThemeProvider>

  )
}

export default App;
