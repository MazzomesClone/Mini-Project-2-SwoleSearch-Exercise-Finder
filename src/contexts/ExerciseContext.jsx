import axios from "axios"
import { createContext, useContext, useRef, useState } from "react";
import { useFormPack } from "../hooks/useForm";

const APIkey = import.meta.env.VITE_API_KEY

export const ExerciseContext = createContext({})

export default function ExerciseProvider({ children }) {

    const [exercises, setExercises] = useState([])
    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const formPack = useFormPack()
    const timeoutId = useRef()
    const searchQueries = useRef(undefined)

    function fetchExercises(page) {
        console.log('Fetching...')

        const offset = (page - 1) * 10

        const { name, type, muscle, difficulty } = searchQueries.current

        setIsLoading(true)

        // Fetch workouts
        axios.get(`https://api.api-ninjas.com/v1/exercises?name=${name.toLowerCase()}&type=${type}&muscle=${muscle}&difficulty=${difficulty}&offset=${offset}`, {
            headers: {
                "X-Api-Key": APIkey
            }
        })
            .then(res => { setExercises(res.data); setIsLoading(false); console.log(res.data) })
            .catch(err => console.log(err.message))
    }

    function handleSearchButton(e) {
        e.preventDefault()
        const { nameProps, typeProps, muscleProps, difficultyProps } = formPack
        searchQueries.current = {
            name: nameProps.value,
            type: typeProps.value,
            muscle: muscleProps.value,
            difficulty: difficultyProps.value
        }
        fetchExercises(1)   // Reset to page 1 on new search
        setPage(1)
    }

    function handlePageChangeSearch(page) {
        if (searchQueries.current) {
            clearTimeout(timeoutId.current)
            timeoutId.current = setTimeout(() => {
                fetchExercises(page)
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }, 800)
            setPage(page)
        }
    }

    return (
        <ExerciseContext.Provider value={{ exercises, handleSearchButton, handlePageChangeSearch, page, isLoading, formPack }}>
            {children}
        </ExerciseContext.Provider>
    )
}

export function useExercises() {
    const { exercises } = useContext(ExerciseContext)
    return exercises
}

export function usePagination() {
    const { page, handlePageChangeSearch } = useContext(ExerciseContext)

    const handleChangePage = (event, value) => handlePageChangeSearch(value)

    return { page, handleChangePage }
}

export function useIsLoading() {
    const { isLoading } = useContext(ExerciseContext)
    return isLoading
}