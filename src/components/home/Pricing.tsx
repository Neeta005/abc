import React from 'react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import renderHeader from './PricingHeader';
import { renderPricingCard } from './PricingCard';
import { pricingTiers } from './Data/PricingData';

export function Pricing() {
    return (
        <>
            <section
                className="hidden md:block py-12 relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/pricings-bg.jfif')" }}
            >
                <div className="absolute w-full h-[296.77px] left-0 top-[calc(50%-296.77px/2-174.61px)] bg-gradient-to-r from-[rgba(255,171,67,0.62)] to-[rgba(255,255,255,0.58)] blur-[350px] z-0"></div>
                <div className="absolute left-[-1.78%] right-[74.12%] top-[-1.35%] bottom-[65.29%] bg-gradient-to-b from-warmOrange to-white blur-[150px] z-0"></div>
                <div className="mx-auto px-4 relative z-10">
                    {renderHeader()}
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {pricingTiers?.map(renderPricingCard)}
                    </div>
                </div>
            </section>

            <section
                className="md:hidden py-12 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/pricings-bg-mobile.jfif')" }}
            >
                <div className="mx-auto px-4">
                    {renderHeader()}
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {pricingTiers?.map(renderPricingCard)}
                    </div>
                </div>
            </section>
        </>
    );
}
