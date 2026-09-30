
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#0d0e12] border-t border-gray-800/60 text-white py-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Left: Brand Logo + FITLOG */}
                <Link href="/" className="flex items-center gap-2.5">
                    <Image 
                        src={logo} 
                        alt="FITLOG Logo" 
                        width={24} 
                        height={24} 
                        className="object-contain" 
                    />
                    <span className="text-lg font-black tracking-wider uppercase">
                        FITLOG
                    </span>
                </Link>

                {/* Right: Copyright Line */}
                <p className="text-xs text-gray-500 font-normal text-center sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;