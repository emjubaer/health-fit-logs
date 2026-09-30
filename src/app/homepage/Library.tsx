import React from 'react';
import { IExercise } from '../types/exerciseTypes';
import ExerciseCard from '../components/shared/ExerciseCard';


const getLibraryData = async () => {
    try {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching library data:', error);
        return [];
    }
};

const Library = async () => {
    const exercisesData: IExercise[] = (await getLibraryData()) || [];

    return (
        <section className="bg-[#0d0e12] py-12 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* Header */}
                <div className="space-y-1">
                    <h1 className="text-white text-3xl sm:text-4xl font-black tracking-wider uppercase">
                        THE LIBRARY
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base font-normal">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                {/* Card Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exercisesData.map((exercise) => (
                        <ExerciseCard key={exercise.id} exercise={exercise} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Library;