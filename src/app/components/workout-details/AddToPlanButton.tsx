"use client";

import { CalendarPlus } from 'lucide-react';
import { IExercise } from '@/app/types/exerciseTypes';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { WorkoutsContext } from '@/app/context/WorkoutsContext';

interface AddToPlanButtonProps {
    workout: IExercise;
}

const AddToPlanButton = ({ workout }: AddToPlanButtonProps) => {

    const { todayPlan, setTodayPlan } = useContext(WorkoutsContext);

    const handleAddToPlan = () => {

        if (todayPlan.some((item: IExercise) => item.id === workout.id)) {
            toast.info("Already in today's plan!");
            return;
        }
        
        setTodayPlan([...todayPlan, workout]);
        toast.success("Added to today's plan!");
        // console.log("Adding to today's plan:", todayPlan);



        // const existing = JSON.parse(localStorage.getItem('my_plan') || '[]');
        // if (!existing.some((item: IExercise) => item.id === workout.id)) {
        //     localStorage.setItem('my_plan', JSON.stringify([...existing, workout]));
        //     window.dispatchEvent(new Event('storage_updated'));
        //     alert("Added to today's plan!");
        // } else {
        //     alert("Already in today's plan!");
        // }
    };

    return (
        <button
            onClick={handleAddToPlan}
            className="w-full sm:w-auto bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm tracking-wider px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2.5 uppercase cursor-pointer"
        >
            <CalendarPlus className="w-4 h-4 stroke-[2.5]" />
            <span>Add to today's plan</span>
        </button>
    );
};

export default AddToPlanButton;