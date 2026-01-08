import { statistics } from "@/lib/data";

export default function PlanningSection() {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="container-custom">
                {/* Upper Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Kenapa Kami
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
                        Kami Memudahkan Perjalanan,
                        <br />
                        <span className="text-primary">Anda Fokus Menikmati</span>
                    </h2>
                    <p className="text-muted text-lg leading-relaxed">
                        Tinggalkan kerumitan perencanaan kepada kami. Dari transportasi,
                        akomodasi, hingga guide profesional, semuanya sudah kami siapkan
                        untuk Anda.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary/5 transition-colors group">
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl mb-2">Terpercaya</h3>
                        <p className="text-muted">
                            Pengalaman 10+ tahun melayani wisatawan dengan rating kepuasan tinggi
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary/5 transition-colors group">
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl mb-2">Harga Transparan</h3>
                        <p className="text-muted">
                            Tidak ada biaya tersembunyi, semua sudah termasuk dalam paket
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary/5 transition-colors group">
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl mb-2">Guide Profesional</h3>
                        <p className="text-muted">
                            Tim guide berlisensi yang ramah dan berpengalaman
                        </p>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="bg-foreground rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {statistics.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center ${index < statistics.length - 1
                                        ? "md:border-r border-white/20"
                                        : ""
                                    }`}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/80 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
