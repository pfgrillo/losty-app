import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import {Map} from "./components/map/Map";
import {Container} from "./components/container/Container";
import {createTheme, ThemeProvider} from "@mui/material";
import {blueGrey, deepPurple} from "@mui/material/colors";
import {NotFound} from "./components/NotFound";

const theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
        secondary: {
            main: blueGrey[500]
        },
        success: {
            main: '#83C785'
        },
        error: {
            main: '#F87B72'
        }
    },
});

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Container/>,
        errorElement: <NotFound/>,
        children: [
            {
                errorElement: <NotFound/>,
                children: [
                    {
                        path: '/map',
                        index: true,
                        element: <Map/>,
                    }
                ]
            }
        ]
    },

]);

root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <RouterProvider router={router}/>
          <Provider store={store}>
            <App />
          </Provider>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
