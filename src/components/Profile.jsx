import Box from '@mui/system/Box'
import Typography from "@mui/material/Typography"
import { ToggleThemeButton } from '../theme/ThemeProvider'

export default function Profile() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: '1em'
        }}>

            <Typography variant="h4" gutterBottom>Profile</Typography>
            <ToggleThemeButton />

        </Box>
    )
}
