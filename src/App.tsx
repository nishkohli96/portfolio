import { Suspense, useEffect } from 'react';
import AOS from 'aos';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from '_Styles/Theme';
import Loading from '_Shared/Loading';
import Routing from '_Routes/index';
import 'aos/dist/aos.css';

function App() {
    const darkModeTheme = createTheme(getDesignTokens('dark'));

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <Suspense fallback={Loading}>
            <ThemeProvider theme={darkModeTheme}>
                <Routing />
            </ThemeProvider>
        </Suspense>
    );
}

export default App;
