import { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from '_Styles/Theme';
import Loading from '_Shared/Loading';
import Routing from '_Constants/Routes';
import 'aos/dist/aos.css';

function App() {
    const darkModeTheme = createTheme(getDesignTokens('dark'));

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Suspense fallback={Loading}>
            <BrowserRouter>
                <ThemeProvider theme={darkModeTheme}>
                    <Routing />
                </ThemeProvider>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
