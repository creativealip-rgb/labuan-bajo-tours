import { destinations } from "@/lib/data";

const unsplashImages = [
    "1518509562904-e7ef99cdcc86", // Komodo
    "1501785888041-af3ef285b470", // Padar
    "1559128010-7c1ad6e1b6a5", // Pink Beach
    "1544551763-46a013bb70d5", // Manta
    "1469474968028-56623f02e42e", // Gili Laba
    "1507525428034-b723cf961d3e", // Taka Makassar
];

export default function DiscoverSection() {
    return (
        <section id="destinations" className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Destinasi
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                        Jelajahi Keajaiban Labuan Bajo
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Dari pulau-pulau eksotis hingga dunia bawah laut yang memukau
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((dest, index) => (
                        <div
                            key={dest.id}
                            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-${unsplashImages[index]}?q=80&w=800')`,
                                }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <h3 className="text-white text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                                    {dest.name}
                                </h3>
                                <p className="text-white/80 text-sm transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2">
                                    {dest.description}
                                </p>

                                {/* CTA Button */}
                                <div className="mt-4 transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                                    <button className="inline-flex items-center gap-2 text-white font-medium hover:text-accent transition-colors">
                                        Lihat Detail
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Corner Badge */}
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Explore
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
