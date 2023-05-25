import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";

import { capitalise, formatOption } from "../utils/stringFormatters";
import { useState } from "react";
import { useIsAlreadySaved, useModifyExercises } from "../contexts/SavedExerciseContext";
import { useIsLoading } from "../contexts/ExerciseContext";

export default function ExerciseCards({ exercisesData }) {

    const isLoading = useIsLoading()

    const exerciseCards = exercisesData.map((exercise, index) => <ExerciseCard key={index} exercise={exercise} />)

    return (
        <>
            {exercisesData.length === 0 ?
                <Typography variant="h6" textAlign='center' mt={2} color='text.secondary'>{isLoading ? 'Loading...' : 'No results'}</Typography>
                :
                <Grid container spacing={2} mt={1} minWidth='100%' mb='1em'>
                    {exerciseCards}
                </Grid>
            }
        </>
    )
}

function ExerciseCard({ exercise }) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const isAlreadySaved = useIsAlreadySaved(exercise)
    const { saveExercise, unsaveExercise } = useModifyExercises()

    const save = () => saveExercise(exercise)
    const unsave = () => unsaveExercise(exercise)

    return (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card sx={{
                minWidth: 275,
                height: '100%',
                transition: 'background 0.2s',
                position: 'relative',
                pr: '30px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: 20 }} gutterBottom>
                        {exercise.name}
                    </Typography>
                    <Typography>
                        <Typography color='text.secondary' component='span'>Type: </Typography>
                        <Typography component='span'>{formatOption(exercise.type)}</Typography>
                    </Typography>
                    <Typography>
                        <Typography color='text.secondary' component='span'>Muscle: </Typography>
                        <Typography component='span'>{formatOption(exercise.muscle)}</Typography>
                    </Typography>
                    <Typography>
                        <Typography color='text.secondary' component='span'>Equipment: </Typography>
                        <Typography component='span'>{formatOption(exercise.equipment)}</Typography>
                    </Typography>
                    <Typography gutterBottom>
                        <Typography color='text.secondary' component='span'>Difficulty: </Typography>
                        <Typography component='span'>{capitalise(exercise.difficulty)}</Typography>
                    </Typography>
                    <Button onClick={handleOpen} sx={{ mt: 'auto', maxWidth: 'fit-content' }}>Instructions</Button>
                    <IconButton
                        onClick={isAlreadySaved ? unsave : save}
                        sx={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            fontSize: '2em',
                            color: 'primary.main'
                        }}>
                        <Tooltip title={isAlreadySaved ? "Unsave exercise" : "Save exercise"}>
                            {isAlreadySaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                        </Tooltip>
                    </IconButton>
                </CardContent>
            </Card>
            {/* <ExerciseModal open={open} handleClose={handleClose} exercise={exercise} /> */}
            <ExerciseDialog open={open} handleClose={handleClose} exercise={exercise} />
        </Grid>
    )
}

function ExerciseDialog({ open, handleClose, exercise }) {

    return (
        <Dialog onClose={handleClose} open={open} scroll='body'>
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} gutterBottom>
                        {exercise.name}
                    </Typography>
                    <Typography>
                        <Typography color='text.secondary' component='span'>Type: </Typography>
                        <Typography component='span'>{formatOption(exercise.type)}</Typography>
                    </Typography>
                    <Typography>
                        <Typography color='text.secondary' component='span'>Muscle: </Typography>
                        <Typography component='span'>{formatOption(exercise.muscle)}</Typography>
                    </Typography>
                    <Typography>
                        <Typography color='text.secondary' component='span'>Equipment: </Typography>
                        <Typography component='span'>{formatOption(exercise.equipment)}</Typography>
                    </Typography>
                    <Typography gutterBottom>
                        <Typography color='text.secondary' component='span'>Difficulty: </Typography>
                        <Typography component='span'>{capitalise(exercise.difficulty)}</Typography>
                    </Typography>
                    <Typography variant="h6" color='text.secondary'>Instructions:</Typography>
                    <Typography gutterBottom>{exercise.instructions}</Typography>
                    <Button onClick={handleClose}>Close</Button>
                </CardContent>
            </Card>
        </Dialog>
    )
}