import Box from '@mui/system/Box'
import { SavedExerciseContext } from '../contexts/SavedExerciseContext'
import ExerciseCards from './ExerciseCards'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FilterFields from './FilterFields'
import Container from '@mui/material/Container'
import { useContext } from 'react'

export default function SavedExercises() {

  const { savedExercises, formPack } = useContext(SavedExerciseContext)

  const { nameProps, typeProps, muscleProps, difficultyProps } = formPack

  const filteredExercises = savedExercises.filter(
    exercise => {
      if (nameProps.value && !exercise.name.toLowerCase().includes(nameProps.value)) return false
      if (typeProps.value && !exercise.type.includes(typeProps.value)) return false
      if (muscleProps.value && !exercise.muscle.includes(muscleProps.value)) return false
      if (difficultyProps.value && !exercise.difficulty.includes(difficultyProps.value)) return false

      return true
    }
  )

  return (
    <Container maxWidth='xl' sx={{ mt: '1em' }}>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>

        <Typography variant='h5' color='text.secondary' fontWeight='500'>Saved exercises:</Typography>
        <Grid container spacing={1} justifyContent='center'>
          <FilterFields formPack={formPack} />
        </Grid>
        <ExerciseCards exercisesData={filteredExercises} />

      </Box>

    </Container>
  )
}
