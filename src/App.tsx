import { Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from '_Styles/Theme';
import Loading from '_Shared/Loading';
import Routing from '_Routes/index';

function App() {
    const darkModeTheme = createTheme(getDesignTokens('dark'));
    return (
        <Suspense fallback={Loading}>
            <ThemeProvider theme={darkModeTheme}>
                <Routing />
            </ThemeProvider>
        </Suspense>
    );
}

export default App;
