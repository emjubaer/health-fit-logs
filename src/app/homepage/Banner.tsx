import Image from 'next/image';
import bannerImage from '@/assets/banner.png';

const Banner = () => {
    return (
        <section className="bg-[#0d0e12] px-4 py-8 md:py-12">
            <div className="max-w-7xl mx-auto bg-[#13161c] rounded-2xl p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-gray-800/40">
                
                {/* Text Content */}
                <div className="text-white space-y-6">
                    <p className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase">
                        WORKOUT LIBRARY
                    </p>
                    
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase">
                        TRAIN WITH INTENT. LOG <br className="hidden sm:inline" />
                        EVERY SET.
                    </h1>
                    
                    <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                    </p>
                    
                    <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs md:text-sm tracking-wider px-6 py-3.5 rounded-md transition-all uppercase cursor-pointer">
                        BROWSE WORKOUTS
                    </button>
                </div>

                {/* Banner Image */}
                <div className="flex justify-center md:justify-end items-center">
                    <div className="relative w-full max-w-md h-auto">
                        <Image 
                            src={bannerImage} 
                            alt="3D Fitness Equipment Illustration" 
                            priority 
                            className="object-contain w-full h-auto drop-shadow-2xl" 
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;