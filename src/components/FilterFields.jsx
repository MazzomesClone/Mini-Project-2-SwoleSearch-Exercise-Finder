import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { formatOption } from '../utils/stringFormatters';

const typeOptions = [
    'cardio',
    'olympic_weightlifting',
    'plyometrics',
    'powerlifting',
    'strength',
    'stretching',
    'strongman'
]

const muscleOptions = [
    'abdominals',
    'abductors',
    'adductors',
    'biceps',
    'calves',
    'chest',
    'forearms',
    'glutes',
    'hamstrings',
    'lats',
    'lower_back',
    'middle_back',
    'neck',
    'quadriceps',
    'traps',
    'triceps'
]

const difficultyOptions = [
    'beginner',
    'intermediate',
    'expert'
]

const gridOptions = { xs: 12, sm: 6, md: 2 }

const inputStyle = { m: 1, width: '100%' }

export default function FilterFields({ formPack }) {

    const { nameProps, typeProps, muscleProps, difficultyProps } = formPack
    
    return (
        <>
            <Grid item {...gridOptions}>
                <FormControl sx={{ m: 1, width: '100%' }}>
                    <TextField
                        id="name"
                        label="Name"
                        helperText="Name of exercise"
                        {...nameProps}
                    />
                </FormControl>
            </Grid>

            <Grid item {...gridOptions}>
                <FormControl sx={inputStyle}>
                    <InputLabel id="type">Type</InputLabel>
                    <Select
                        labelId="type"
                        id="type"
                        label="Type"
                        {...typeProps}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        {typeOptions.map((type, index) =>
                            <MenuItem value={type} key={index}>{formatOption(type)}</MenuItem>
                        )}
                    </Select>
                    <FormHelperText>Type of exercise</FormHelperText>
                </FormControl>
            </Grid>

            <Grid item {...gridOptions}>
                <FormControl sx={inputStyle}>
                    <InputLabel id="muscle">Muscle</InputLabel>
                    <Select
                        labelId="muscle"
                        id="muscle"
                        label="Muscle"
                        {...muscleProps}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        {muscleOptions.map((muscle, index) =>
                            <MenuItem value={muscle} key={index}>{formatOption(muscle)}</MenuItem>
                        )}
                    </Select>
                    <FormHelperText>Targeted muscle group</FormHelperText>
                </FormControl>
            </Grid>

            <Grid item {...gridOptions}>
                <FormControl sx={inputStyle}>
                    <InputLabel id="difficulty">Difficulty</InputLabel>
                    <Select
                        labelId="difficulty"
                        id="difficulty"
                        label="Difficulty"
                        {...difficultyProps}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        {difficultyOptions.map((difficulty, index) =>
                            <MenuItem value={difficulty} key={index}>{formatOption(difficulty)}</MenuItem>
                        )}
                    </Select>
                    <FormHelperText>Difficulty level of exercise</FormHelperText>
                </FormControl>
            </Grid>
        </>
    )
}