export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1974&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom text-center text-white px-4">
                <div className="max-w-4xl mx-auto animate-fade-in-up">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                        <span className="text-accent">✨</span>
                        <span className="text-sm font-medium">
                            Destinasi Wisata Terbaik Indonesia
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        Temukan Petualangan
                        <br />
                        <span className="text-accent">Tak Terlupakan</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Jelajahi keajaiban Labuan Bajo, rumah bagi komodo legendaris, pantai
                        pink yang memukau, dan pemandangan bawah laut yang spektakuler.
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white rounded-2xl p-2 md:p-3 shadow-2xl max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                            {/* Destination */}
                            <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200">
                                <p className="text-xs text-gray-500 text-left mb-1">Destinasi</p>
                                <select className="w-full text-gray-800 font-medium bg-transparent focus:outline-none cursor-pointer">
                                    <option>Semua Destinasi</option>
                                    <option>Pulau Komodo</option>
                                    <option>Pulau Padar</option>
                                    <option>Pink Beach</option>
                                    <option>Manta Point</option>
                                </select>
                            </div>

                            {/* Date */}
                            <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200">
                                <p className="text-xs text-gray-500 text-left mb-1">Tanggal</p>
                                <input
                                    type="date"
                                    className="w-full text-gray-800 font-medium bg-transparent focus:outline-none cursor-pointer"
                                    defaultValue={new Date().toISOString().split("T")[0]}
                                />
                            </div>

                            {/* Guests */}
                            <div className="flex-1 px-4 py-3">
                                <p className="text-xs text-gray-500 text-left mb-1">Jumlah Orang</p>
                                <select className="w-full text-gray-800 font-medium bg-transparent focus:outline-none cursor-pointer">
                                    <option>1 Orang</option>
                                    <option>2 Orang</option>
                                    <option>3-5 Orang</option>
                                    <option>6-10 Orang</option>
                                    <option>10+ Orang</option>
                                </select>
                            </div>

                            {/* Search Button */}
                            <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <span className="hidden md:inline">Cari</span>
                            </button>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10 text-white/80">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-medium">Rating 4.9/5</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm font-medium">5000+ Wisatawan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span className="text-sm font-medium">Pembayaran Aman</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}
