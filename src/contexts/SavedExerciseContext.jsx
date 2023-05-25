import axios from "axios";
import sha256 from 'crypto-js/sha256';
import { createContext, useContext, useEffect, useState } from "react";
import { useFormPack } from "../hooks/useForm";

export const SavedExerciseContext = createContext({})

function stringToId(str) {
    const hash = sha256(str).toString().slice(0, 8);
    return parseInt(hash, 16);
}

export default function SavedExerciseProvider({ children }) {

    const [savedExercises, setSavedExercises] = useState([])
    const formPack = useFormPack()

    useEffect(() => {
        fetchSavedExercises()
    }, [])

    function fetchSavedExercises() {
        // For Github Pages Demo
        return axios.get('db.json')
            .then(res => setSavedExercises(res.data))
            .catch(err => console.log(err.message))
        //
        //
        axios.get('http://localhost:3000/posts')
            .then(res => setSavedExercises(res.data))
            .catch(err => console.log(err.message))
    }

    function saveExercise(exercise) {
        // For Github Pages Demo
        return alert('Saving is disabled in this demo')
        //
        //
        axios.post('http://localhost:3000/posts', {
            id: stringToId(exercise.name),
            ...exercise
        })
            .then(res => console.log(res.data))
            .then(fetchSavedExercises)
            .catch(err => console.log(err.message))
    }

    function unsaveExercise(exercise) {
        // For Github Pages Demo
        return alert('Saving is disabled in this demo')
        //
        //
        const deleteExercise = savedExercises.find(savedExercise => exercise.name === savedExercise.name)
        axios.delete(`http://localhost:3000/posts/${deleteExercise.id}`)
            .then(res => console.log(res.data))
            .then(fetchSavedExercises)
    }

    return (
        <SavedExerciseContext.Provider value={{ savedExercises, saveExercise, unsaveExercise, formPack }}>
            {children}
        </SavedExerciseContext.Provider>
    )
}

export function useModifyExercises() {
    const { saveExercise, unsaveExercise } = useContext(SavedExerciseContext)
    return { saveExercise, unsaveExercise }
}

export function useIsAlreadySaved(exercise) {
    const { savedExercises } = useContext(SavedExerciseContext)
    return savedExercises.find(savedExercise => exercise.name === savedExercise.name)
}