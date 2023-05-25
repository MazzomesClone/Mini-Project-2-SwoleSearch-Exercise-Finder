import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"
import { Link } from "react-router-dom"

export default function Home() {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            mt: '1em'
        }}>

            <Typography variant="h2" mt={4} fontWeight='bold'>SWOLE💪SEARCH</Typography>
            <Typography mt={2} sx={{ width: '500px' }}>SwoleSearch allows you to search for various exercises and techniques to help you reach your full potential!</Typography>
            <Typography variant='h5' mt={2} mb={2} sx={{ width: '500px' }}>Start below:</Typography>
            <Link to='/search'><Button variant="contained">Begin Searching</Button></Link>

        </Box>
    )
}
