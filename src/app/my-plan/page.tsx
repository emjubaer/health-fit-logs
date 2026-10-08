"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";

import { WorkoutsContext } from "@/app/context/WorkoutsContext";
import MyPlanCard from "@/app/components/shared/MyplanCard";

const MyPlanPage = () => {

    //Get Data from Context
    const {
        todayPlan,
        savedWorkouts,
        markWorkoutAsDone,
        removeWorkoutFromSaved
    } = useContext(WorkoutsContext);

    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    const [sortBy, setSortBy] = useState<
        "duration" | "calories" | "rating"
    >("duration");
    
    // Decide which workouts to show
    const currentWorkouts =
    activeTab === "today"
    ? todayPlan
    : savedWorkouts;
      
    // Calculate selected tab metrics
    const totalExercises = currentWorkouts.length;

    const totalDuration = currentWorkouts.reduce(
        (total, exercise) => total + exercise.duration,
        0
    );

    const totalCalories = currentWorkouts.reduce(
        (total, exercise) => total + exercise.caloriesBurned,
        0
    );
    // Sort workouts
    const sortedWorkouts = [...currentWorkouts].sort((a, b) => {

        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        return 0;
    });


    // Remove workout
    const handleRemove = (id: string | number) => {

        // Later connect this with your Context function
    };


    // Mark workout as done
    const handleMarkDone = (id: string | number) => {

        console.log("Workout completed:", id);

        // Later connect this with your Context function
    };


    return (
        <main className="bg-[#0d0e12] min-h-screen py-8 md:py-12 px-4 sm:px-6">

            <div className="max-w-7xl mx-auto space-y-8">

                {/* Page Title & Subtitle */}
                <div className="space-y-2">

                    <h1 className="text-2xl sm:text-4xl font-black text-white tracking-wider uppercase">
                        MY PLAN
                    </h1>

                    <p className="text-gray-400 text-sm sm:text-base font-normal">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>

                </div>


                {/* Summary Metrics Bar */}
                <div
                    className="bg-[#13161c] border border-gray-800/80 rounded-2xl
                    p-6 md:p-8 grid grid-cols-3 divide-x divide-gray-800/80"
                >

                    <div className="px-2 sm:px-6">

                        <p className="text-gray-400 text-xs sm:text-sm font-medium">
                            Exercises
                        </p>

                        <p className="text-[#ccff00] text-2xl sm:text-4xl font-black mt-2">
                            {totalExercises}
                        </p>

                    </div>


                    <div className="px-4 sm:px-8">

                        <p className="text-gray-400 text-xs sm:text-sm font-medium">
                            Minutes
                        </p>

                        <p className="text-white text-2xl sm:text-4xl font-black mt-2">
                            {totalDuration}
                        </p>

                    </div>


                    <div className="px-4 sm:px-8">

                        <p className="text-gray-400 text-xs sm:text-sm font-medium">
                            Calories
                        </p>

                        <p className="text-white text-2xl sm:text-4xl font-black mt-2">
                            {totalCalories}
                        </p>

                    </div>

                </div>


                {/* Tabs + Sort */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                    {/* Tabs */}
                    <div className="flex items-center bg-[#13161c] border border-gray-800 rounded-xl p-1">

                        <button
                            onClick={() => setActiveTab("today")}
                            className={`
                                px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm
                                transition
                                ${activeTab === "today"
                                    ? "bg-[#20242c] text-white font-medium"
                                    : "text-gray-500 hover:text-white"
                                }
                            `}
                        >
                            Today's Plan
                        </button>


                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`
                                px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm
                                transition
                                ${activeTab === "saved"
                                    ? "bg-[#20242c] text-white font-medium"
                                    : "text-gray-500 hover:text-white"
                                }
                            `}
                        >
                            Saved
                        </button>

                    </div>


                    {/* Sort */}
                    <div className="flex items-center gap-2">

                        <span className="text-gray-500 text-xs">
                            Sort By
                        </span>

                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(
                                    e.target.value as
                                    | "duration"
                                    | "calories"
                                    | "rating"
                                )
                            }
                            className="bg-[#13161c] border border-gray-800 text-gray-300
                            rounded-lg px-3 py-2 text-xs outline-none
                            focus:border-gray-600"
                        >
                            <option value="duration">
                                Duration
                            </option>

                            <option value="calories">
                                Calories
                            </option>

                            <option value="rating">
                                Rating
                            </option>
                        </select>

                    </div>

                </div>


                {/* Workout List */}
                <div className="space-y-3">

                    {sortedWorkouts.length > 0 ? (

                        sortedWorkouts.map((workout) => (

                            <MyPlanCard
                                key={workout.id}
                                workout={workout}
                                showMarkDone={activeTab === "today"}
                                onRemove={removeWorkoutFromSaved}
                                onMarkDone={markWorkoutAsDone}
                            />

                        ))

                    ) : (

                        /* Empty State */
                        <div className="border border-dashed border-gray-800 rounded-2xl py-16 text-center">

                            <p className="text-white font-semibold">
                                {activeTab === "today"
                                    ? "NOTHING HERE YET."
                                    : "NO SAVED WORKOUTS."
                                }
                            </p>

                            <p className="text-gray-500 text-sm mt-2">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/"
                                className="inline-block mt-5 bg-[#ccff00] hover:bg-[#b8e600]
                                text-black font-semibold rounded-full px-5 py-2 text-sm"
                            >
                                Browse Workouts
                            </Link>

                        </div>

                    )}

                </div>

            </div>

        </main>
    );
};

export default MyPlanPage;