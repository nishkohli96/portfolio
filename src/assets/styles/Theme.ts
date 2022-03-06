// import {  deepOrange, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            main: '#007aba',
            ...(mode === 'dark' && {
                main: '#1f1f1f',
            }),
        },
        secondary: {
            main: '#abcded',
            ...(mode === 'dark' && {
                main: '#f7f6f3',
            }),
        },
        error: {
            main: '#e57373',
            ...(mode === 'dark' && {
                main: '#d32f2f',
            }),
        },
        warning: {
            main: '#ffb74d',
            ...(mode === 'dark' && {
                main: '#f57c00',
            }),
        },
        info: {
            main: '#4fc3f7',
            ...(mode === 'dark' && {
                main: '#0288d1',
            }),
        },
        success: {
            main: '#81c784',
            ...(mode === 'dark' && {
                main: '#388e3c',
            }),
        },
    },
});
