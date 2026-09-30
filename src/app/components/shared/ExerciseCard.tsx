import Image from 'next/image';
import Link from 'next/link';
import { Clock, Flame, Star } from 'lucide-react';
import { IExercise } from '../../types/exerciseTypes';

interface ExerciseCardProps {
    exercise: IExercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
    return (
        <Link 
            href={`/workouts/${exercise.id}`}
            className="group bg-[#13161c] rounded-2xl border border-gray-800/40 overflow-hidden
             hover:border-gray-700 transition-all duration-200 flex flex-col justify-between"
        >
            <div>
                {/* Image */}
                <div className="relative w-full h-52 sm:h-56 bg-gray-900 overflow-hidden">
                    <Image
                        src={exercise.image}
                        alt={exercise.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                    {/* Muscle Groups / Category Tags */}
                    <div className="flex flex-wrap gap-2">
                        {exercise.muscleGroups?.map((group, index) => (
                            <span
                                key={index}
                                className="bg-[#ccff00] text-black text-[10px] font-black tracking-wide
                                 px-2.5 py-1 rounded-full uppercase"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Exercise Name */}
                    <h3 className="text-white text-xl font-black tracking-tight uppercase 
                     leading-tight group-hover:text-[#ccff00] transition-colors">
                        {exercise.name}
                    </h3>

                    {/* Equipment */}
                    <p className="text-gray-400 text-sm font-medium">
                        {exercise.equipment}
                    </p>
                </div>
            </div>

            {/* Stats Row */}
            <div className="px-5 pb-5 pt-3 border-t border-gray-800/60 flex justify-start
                  gap-4 text-xs font-semibold text-gray-400"> 
                <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{exercise.duration} min</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-gray-400" />
                    <span>{exercise.caloriesBurned} kcal</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-gray-400 fill-transparent" />
                    <span>{exercise.rating}</span>
                </div>
            </div>
        </Link>
    );
};

export default ExerciseCard;