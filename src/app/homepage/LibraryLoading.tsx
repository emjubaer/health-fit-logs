const LibraryLoading = () => {
    return (
        <section
            aria-label="Loading exercise library"
            className="bg-[#0d0e12] py-12 px-4 sm:px-6"
        >
            <div className="max-w-7xl mx-auto min-h-80 flex flex-col items-center 
            justify-center gap-4">
                <span
                    className="loading loading-spinner loading-lg text-[#ccff00]"
                    role="status"
                    aria-label="Loading exercises"
                />
                <p className="text-gray-400 text-sm font-medium">
                    Loading exercises...
                </p>
            </div>
        </section>
    );
};

export default LibraryLoading;
