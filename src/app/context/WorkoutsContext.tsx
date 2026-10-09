"use client";
import React, { createContext, ReactNode, useState } from 'react';
import { IExercise } from '../types/exerciseTypes';
import { toast } from 'react-toastify';

interface WorkoutsContextType {
    todayPlan: IExercise[];
    setTodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
    savedWorkouts: IExercise[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IExercise[]>>;
    markWorkoutAsDone: (id: number | string) => void;
    removeWorkoutFromSaved: (id: number | string) => void;
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

    const markWorkoutAsDone = (id: number | string) => {
        setTodayPlan(prevPlan => prevPlan.filter(workout => workout.id !== id));
        toast.success("Workout marked as done!");
    }

    const removeWorkoutFromSaved = (id: number | string, activeTab: "today" | "saved") => {   
        activeTab === "today" ? setTodayPlan(prevPlan => prevPlan.filter(workout => workout.id !== id)) :
        setSavedWorkouts(prevSaved => prevSaved.filter(workout => workout.id !== id));
        
        // setSavedWorkouts(prevSaved => prevSaved.filter(workout => workout.id !== id));
        toast.warning("Workout removed.");
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