import Pagination from "@mui/material/Pagination";
import Box from "@mui/system/Box";
import { useExercises, usePagination } from "../contexts/ExerciseContext";
import ExerciseCards from "./ExerciseCards";
import SearchForm from "./SearchForm";
import Container from "@mui/material/Container";

export default function SearchPage() {

    const exercisesData = useExercises()

    const { page, handleChangePage } = usePagination()

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            width: '100%',
            mt: '1em'
        }}>

            <Container maxWidth='xl'
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column'
                }}>

                <SearchForm />
                <ExerciseCards exercisesData={exercisesData} />

            </Container >

            <Box sx={{
                py: '10px',
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'background.paper',
            }}>

                <Pagination count={10} page={page} onChange={handleChangePage} color='primary' />

            </Box>

        </Box>
    )
}