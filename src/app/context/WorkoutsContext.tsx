"use client";
import React, { createContext, ReactNode, useState } from 'react';
import { IExercise } from '../types/exerciseTypes';

interface WorkoutsContextType {
    todayPlan: IExercise[];
    setTodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
    savedWorkouts: IExercise[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IExercise[]>>;
}

export const WorkoutsContext = createContext<WorkoutsContextType>({
    todayPlan: [],
    setTodayPlan: () => {},
    savedWorkouts: [],
    setSavedWorkouts: () => {}
});


const WorkoutsProvider = ({children}: {children: ReactNode}) => {

    const [todayPlan, setTodayPlan] = useState<IExercise[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<IExercise[]>([]);

    const sharedData = {
        todayPlan,
        setTodayPlan,
        savedWorkouts,
        setSavedWorkouts
    };

    return (
       <WorkoutsContext.Provider value={sharedData}>
        {children}
       </WorkoutsContext.Provider>
    );
};

export default WorkoutsProvider;