import React from 'react';
import StatCard from './StatCard';
import Image from 'next/image';
import { internshipData } from './Data/StatData';
export function InternshipStats() {
    return (
        <section className="antialiased bg-eclipseBlue text-white py-0 xs:px-0">
            <div
                className="hidden md:flex items-center justify-center md:h-[350px] max-w-full w-auto bg-cover bg-center bg-no-repeat opacity-90"
                style={{ backgroundImage: "url('/assets/stats-banner.jfif')" }}
            >
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto p-6 rounded-lg">
                    {internshipData?.map(({ imgPath, count, label }, idx) => (
                        <StatCard
                            key={`${label}-${idx}`}
                            icon={
                                <Image
                                    src={imgPath[0]}
                                    alt={label}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16"
                                />
                            }
                            count={count}
                            label={label}
                        />
                    ))}
                </div>
            </div>

            <div
                className="flex md:hidden items-center justify-center h-full max-w-full w-auto bg-cover bg-center bg-no-repeat opacity-90"
                style={{ backgroundImage: "url('/assets/stats-banner-mobile.jfif')" }}
            >
                <div className="mt-12 grid grid-cols-1 gap-8 max-w-5xl mx-auto p-6 rounded-lg">
                    {internshipData?.map(({ imgPath, count, label }, idx) => (
                        <StatCard
                            key={`${label}-${idx}`}
                            icon={
                                <Image
                                    src={imgPath[1]}
                                    alt={label}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16"
                                />
                            }
                            count={count}
                            label={label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
