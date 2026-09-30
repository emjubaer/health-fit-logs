"use client";

import { Bookmark } from 'lucide-react';
import { IExercise } from '@/app/types/exerciseTypes';

interface SaveForLaterButtonProps {
    workout: IExercise;
}

const SaveForLaterButton = ({ workout }: SaveForLaterButtonProps) => {
    const handleSaveForLater = () => {
        const existing = JSON.parse(localStorage.getItem('saved_workouts') || '[]');
        if (!existing.some((item: IExercise) => item.id === workout.id)) {
            localStorage.setItem('saved_workouts', JSON.stringify([...existing, workout]));
            window.dispatchEvent(new Event('storage_updated'));
            alert("Saved for later!");
        } else {
            alert("Already saved!");
        }
    };

    return (
        <button
            onClick={handleSaveForLater}
            className="w-full sm:w-auto bg-[#13161c] hover:bg-gray-800 text-white border border-gray-800/80 font-bold text-xs sm:text-sm tracking-wider px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2.5 uppercase cursor-pointer"
        >
            <Bookmark className="w-4 h-4 stroke-[2]" />
            <span>Save for later</span>
        </button>
    );
};

export default SaveForLaterButton;