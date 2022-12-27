import React from 'react';
import './App.css';
import {Container} from "./components/container/Container";
import {createTheme, ThemeProvider} from "@mui/material";
import {blueGrey, deepPurple} from "@mui/material/colors";

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

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container/>
        </ThemeProvider>
    )
}

export default App;
