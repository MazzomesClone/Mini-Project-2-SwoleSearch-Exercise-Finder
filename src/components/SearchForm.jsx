import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';

import { ExerciseContext, useIsLoading } from '../contexts/ExerciseContext';
import { useContext } from 'react';
import FilterFields from './FilterFields';

export default function SearchForm() {

    const { handleSearchButton, formPack } = useContext(ExerciseContext)
    const isLoading = useIsLoading()

    return (
        <form onSubmit={handleSearchButton}>
            <Grid container spacing={1} justifyContent='center'>

                <FilterFields formPack={formPack} />

                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <LoadingButton loading={isLoading}
                        variant="contained"
                        sx={{ height: 'max-content', width: '75%', ml: '1em', mt: '1em' }}
                        size='large'
                        type='submit'>
                        Search
                    </LoadingButton>
                </Grid>

            </Grid>
        </form>

    )
}