// import {  deepOrange, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            // ...amber,
            main: '#007aba',
            ...(mode === 'dark' && {
                main: '#1f1f1f',
            }),
        },
        // ...(mode === 'dark' && {
        //     background: {
        //         default: deepOrange[900],
        //         paper: deepOrange[900],
        //     },
        // }),
        // secondary: {
        //     ...(mode === 'light'
        //         ? {
        //               primary: '#abcded',
        //               secondary: grey[800],
        //           }
        //         : {
        //               primary: '#007aba',
        //               secondary: grey[500],
        //           }),
        // },
    },
});
