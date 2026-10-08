"use client";
import React, { createContext, ReactNode, useState } from 'react';
import { IExercise } from '../types/exerciseTypes';
import { toast } from 'react-toastify';

interface WorkoutsContextType {
    todayPlan: IExercise[];
    setTodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
    savedWorkouts: IExercise[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IExercise[]>>;
    markWorkoutAsDone: (id: number) => void;
    removeWorkoutFromSaved: (id: number) => void;
}

export const WorkoutsContext = createContext<WorkoutsContextType>({
    todayPlan: [],
    setTodayPlan: () => {},
    savedWorkouts: [],
    setSavedWorkouts: () => {},
    markWorkoutAsDone: () => {},
    removeWorkoutFromSaved: () => {},
});


const WorkoutsProvider = ({children}: {children: ReactNode}) => {

    const [todayPlan, setTodayPlan] = useState<IExercise[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<IExercise[]>([]);

    const markWorkoutAsDone = (id: number) => {
        setTodayPlan(prevPlan => prevPlan.filter(workout => workout.id !== id));
        toast.success("Workout marked as done!");
    }

    const removeWorkoutFromSaved = (id: number) => {    
        setSavedWorkouts(prevSaved => prevSaved.filter(workout => workout.id !== id));
        toast.warning("Workout removed from saved workouts.");
    };

    const sharedData = {
        todayPlan,
        setTodayPlan,
        savedWorkouts,
        setSavedWorkouts,
        markWorkoutAsDone,
        removeWorkoutFromSaved

    };

    return (
       <WorkoutsContext.Provider value={sharedData}>
        {children}
       </WorkoutsContext.Provider>
    );
};

export default WorkoutsProvider;