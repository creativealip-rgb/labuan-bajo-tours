import { testimonials } from "@/lib/data";

const galleryImages = [
    "1518509562904-e7ef99cdcc86", // Komodo island
    "1501785888041-af3ef285b470", // Scenic view
    "1559128010-7c1ad6e1b6a5", // Beach/ocean - was broken
    "1544551763-46a013bb70d5", // Underwater
    "1469474968028-56623f02e42e", // Scenic
    "1507525428034-b723cf961d3e", // Beach
];

export default function Testimonials() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Testimonial
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                        Momen yang Tak Terlupakan
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Cerita perjalanan dari para wisatawan yang telah menikmati keindahan
                        Labuan Bajo bersama kami
                    </p>
                </div>

                {/* Masonry Gallery - Fixed layout */}
                <div className="grid grid-cols-3 gap-4 mb-12">
                    {/* Row 1 */}
                    <div className="row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer h-80 md:h-96">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-${galleryImages[0]}?q=80&w=600')`,
                            }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-40 md:h-44">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-${galleryImages[1]}?q=80&w=600')`,
                            }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-40 md:h-44">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-${galleryImages[2]}?q=80&w=600')`,
                            }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    </div>
                    {/* Row 2 */}
                    <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-40 md:h-44">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-${galleryImages[3]}?q=80&w=600')`,
                            }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-40 md:h-44">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-${galleryImages[4]}?q=80&w=600')`,
                            }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-accent fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-foreground mb-6 italic">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-muted">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-10">
                    <button className="inline-flex items-center gap-2 px-6 py-3 text-primary font-semibold hover:text-primary-dark transition-colors">
                        Lihat Lebih Banyak
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
