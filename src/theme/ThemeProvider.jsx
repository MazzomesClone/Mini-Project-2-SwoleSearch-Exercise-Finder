import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useContext, useMemo, createContext } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const fontFamily = "'Rubik', sans-serif"

const lightConfig = {
    palette: {
        mode: 'light',
        primary: {
            main: '#792929'
        },
        background: {
            default: '#f7f7f7'
        }
    },
    typography: {
        fontFamily: fontFamily
    }
}

const darkConfig = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#db8787'
        },
        background: {
            paper: '#1e1e1e'
        }
    },
    typography: {
        fontFamily: fontFamily
    }
}

export function ToggleThemeButton() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <Button variant='contained' sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} >
            Switch Theme&nbsp;&nbsp;{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </Button>
    );
}

export default function ThemeWrapper({ children }) {
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme(mode === 'light' ? lightConfig : darkConfig),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
