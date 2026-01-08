import { tourPackages, formatPrice } from "@/lib/data";

export default function PopularTrips() {
    return (
        <section id="trips" className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Explore Now
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                        Paket Tour Populer
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Pilihan paket wisata terbaik dengan pengalaman tak terlupakan di
                        Labuan Bajo
                    </p>
                </div>

                {/* Tour Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tourPackages.map((tour, index) => (
                        <div
                            key={tour.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('https://images.unsplash.com/photo-${index === 0
                                            ? "1518509562904-e7ef99cdcc86"
                                            : index === 1
                                                ? "1559128010-7c1ad6e1b6a5"
                                                : index === 2
                                                    ? "1544551763-46a013bb70d5"
                                                    : "1501785888041-af3ef285b470"
                                            }?q=80&w=800')`,
                                    }}
                                />
                                {/* Featured Badge */}
                                {tour.featured && (
                                    <div className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        ⭐ Favorit
                                    </div>
                                )}
                                {/* Duration Badge */}
                                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-foreground text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {tour.duration}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                {/* Location */}
                                <div className="flex items-center gap-1 text-muted text-sm mb-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {tour.location}
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {tour.title}
                                </h3>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center gap-1 text-accent">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="font-semibold text-sm">{tour.rating}</span>
                                    </div>
                                    <span className="text-muted text-sm">({tour.reviews} ulasan)</span>
                                </div>

                                {/* Price */}
                                <div>
                                    {tour.originalPrice && (
                                        <div className="text-muted text-xs line-through">
                                            {formatPrice(tour.originalPrice)}
                                        </div>
                                    )}
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-primary font-bold text-lg">
                                            {formatPrice(tour.price)}
                                        </span>
                                        <span className="text-muted text-xs">/orang</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-10">
                    <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all">
                        Lihat Semua Paket
                    </button>
                </div>
            </div>
        </section>
    );
}
