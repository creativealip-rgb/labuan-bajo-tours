"use client";

import { useState } from "react";
import { faqData } from "@/lib/data";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Header */}
                    <div>
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            FAQ
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                            Pertanyaan yang Sering Diajukan
                        </h2>
                        <p className="text-muted mb-8">
                            Temukan jawaban untuk pertanyaan umum seputar perjalanan ke Labuan
                            Bajo. Jika Anda memiliki pertanyaan lain, jangan ragu untuk
                            menghubungi kami.
                        </p>

                        {/* Contact CTA */}
                        <div className="bg-primary/5 rounded-2xl p-6">
                            <h3 className="font-semibold text-lg mb-2">Masih punya pertanyaan?</h3>
                            <p className="text-muted text-sm mb-4">
                                Tim kami siap membantu Anda 24/7
                            </p>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Hubungi via WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Accordion */}
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-sm"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-foreground pr-4">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    >
                                        <svg
                                            className="w-4 h-4 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-48" : "max-h-0"
                                        }`}
                                >
                                    <p className="px-6 pb-5 text-muted">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
