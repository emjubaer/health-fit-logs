import React from 'react';
import Image from 'next/image';
import { IExercise } from '@/app/types/exerciseTypes';
import AddToPlanButton from '@/app/components/workout-details/AddToPlanButton'
import SaveForLaterButton from '@/app/components/workout-details/SaveForLaterButton';

interface WorkoutDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getLibraryData = async (): Promise<IExercise[]> => {
    try {
        const res = await fetch('https://api.api-store.workers.dev/api/fitlog/', {
            cache: 'no-store'
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching library data:', error);
        return [];
    }
};

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
    const { id } = await params;
    const exercises: IExercise[] = await getLibraryData();
    const workout = exercises.find((item: IExercise) => String(item.id) === id);

    if (!workout) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-white">Workout Not Found</h2>
                <p className="text-gray-400 mt-2">Could not find details for workout ID: {id}</p>
            </div>
        );
    }

    const {
        name,
        image,
        description,
        muscleGroups,
        equipment,
        difficulty,
        sets,
        reps,
        duration,
        caloriesBurned,
        rating,
        instructions,
    } = workout;

    return (
        <section className="bg-[#0d0e12] min-h-screen py-8 lg:py-12 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                
                {/* Left Side: Workout Cover Image */}
                <div className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] bg-[#13161c] rounded-3xl overflow-hidden border border-gray-800/60 shadow-2xl">
                    <Image
                        src={image}
                        alt={name || "Workout Image"}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Workout Information */}
                <div className="text-white space-y-6">
                    
                    {/* Title & Description */}
                    <div className="space-y-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-none">
                            {name}
                        </h1>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            {description || "A compound press that builds chest thickness, triceps, and pressing power from a stable bench."}
                        </p>
                    </div>

                    {/* Category / Muscle Group Tag Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                        {muscleGroups?.map((group, index) => (
                            <span
                                key={index}
                                className="bg-[#ccff00] text-black text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Metadata Specs Panel */}
                    <div className="bg-[#13161c] rounded-2xl border border-gray-800/80 divide-y divide-gray-800/60 text-xs sm:text-sm font-medium">
                        <div className="flex justify-between items-center px-5 py-3.5">
                            <span className="text-gray-400 font-bold uppercase tracking-wider">Equipment</span>
                            <span className="text-white font-semibold">{equipment}</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3.5">
                            <span className="text-gray-400 font-bold uppercase tracking-wider">Difficulty</span>
                            <span className="text-white font-semibold">{difficulty || "Intermediate"}</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3.5">
                            <span className="text-gray-400 font-bold uppercase tracking-wider">Sets</span>
                            <span className="text-white font-semibold">{sets || 4}</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3.5">
                            <span className="text-gray-400 font-bold uppercase tracking-wider">Reps</span>
                            <span className="text-white font-semibold">{reps || "6-8"}</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3.5">
                            <span className="text-gray-400 font-bold uppercase tracking-wider">Duration</span>
                            <span className="text-white font-semibold">{duration} min</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3.5">
                            <span className="text-gray-400 font-bold uppercase tracking-wider">Calories</span>
                            <span className="text-white font-semibold">{caloriesBurned} kcal</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3.5">
                            <span className="text-gray-400 font-bold uppercase tracking-wider">Rating</span>
                            <span className="text-white font-semibold">{rating}</span>
                        </div>
                    </div>

                    {/* Instructions Section */}
                    <div className="space-y-4 pt-2">
                        <h2 className="text-lg font-extrabold uppercase tracking-wider text-white">
                            Instructions
                        </h2>
                        <ol className="space-y-2.5 text-gray-300 text-sm leading-relaxed">
                            {instructions && instructions.length > 0 ? (
                                instructions.map((step, idx) => (
                                    <li key={idx} className="flex gap-2.5 items-start">
                                        <span className="font-bold text-gray-400">{idx + 1}.</span>
                                        <span>{step}</span>
                                    </li>
                                ))
                            ) : (
                                <>
                                    <li className="flex gap-2.5 items-start">
                                        <span className="font-bold text-gray-400">1.</span>
                                        <span>Lie on the bench with eyes under the bar and feet planted.</span>
                                    </li>
                                    <li className="flex gap-2.5 items-start">
                                        <span className="font-bold text-gray-400">2.</span>
                                        <span>Unrack with locked elbows and lower the bar to mid-chest.</span>
                                    </li>
                                    <li className="flex gap-2.5 items-start">
                                        <span className="font-bold text-gray-400">3.</span>
                                        <span>Press up in a slight arc until elbows lock without bouncing.</span>
                                    </li>
                                    <li className="flex gap-2.5 items-start">
                                        <span className="font-bold text-gray-400">4.</span>
                                        <span>Keep shoulder blades pinched and a natural arch in the back.</span>
                                    </li>
                                </>
                            )}
                        </ol>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                        <AddToPlanButton workout={workout} />
                        <SaveForLaterButton workout={workout} />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WorkoutDetailsPage;