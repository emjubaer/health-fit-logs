
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IExercise } from "@/app/types/exerciseTypes";

interface WorkoutCardProps {
    workout: IExercise;
    activeTab: "today" | "saved";
    onRemove?: (id: string | number, activeTab: "today" | "saved") => void;
    onMarkDone?: (id: string | number) => void;
    showMarkDone?: boolean;
}

const MyPlanCard = ({
    workout,
    onRemove,
    onMarkDone,
    activeTab,
    showMarkDone = false,
}: WorkoutCardProps) => {
    return (
        <div className="bg-[#13161c] border border-gray-800/80 rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">

            {/* Workout Image */}
            <div className="w-full sm:w-[105px] h-[150px] sm:h-[70px] shrink-0 overflow-hidden rounded-xl">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    className="w-full h-full object-cover"
                    width={105}
                    height={70}
                />
            </div>

            {/* Workout Information */}
            <div className="flex-1 min-w-0">

                <h3 className="text-white font-bold uppercase text-sm sm:text-base truncate">
                    {workout.name}
                </h3>

                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-300">

                    <span className="flex items-center gap-1">
                        <span className="text-[#ccff00]">◷</span>
                        {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                        <span className="text-[#ccff00]">🔥</span>
                        {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <span className="text-[#ccff00]">★</span>
                        {workout.rating}
                    </span>

                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0">

                <Link
                    href={`/workouts/${workout.id}`}
                    className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-full px-4 py-2 text-xs transition"
                >
                    View Details
                </Link>

                {showMarkDone && (
                    <button
                        onClick={() => onMarkDone?.(workout.id)}
                        className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-medium rounded-full px-4 py-2 text-xs transition"
                    >
                        ✓ Mark as Done
                    </button>
                )}

                <button
                    onClick={() => onRemove?.(workout.id, activeTab)}
                    className="text-gray-500 hover:text-white text-lg px-1 transition"
                    aria-label={`Remove ${workout.name}`}
                >
                    ×
                </button>
                
            </div>
        </div>
    );
};

export default MyPlanCard;