import React from 'react';
import { Text } from '../ui/Text';
export default function renderHeader() {
    return (
        <>
            <div className="flex items-center justify-center w-auto mb-2">
                <div className="inline-block px-4 py-2 rounded-full bg-white/10">
                    <Text
                        as="p"
                        className="font-sans font-bold text-base leading-none tracking-normal capitalize bg-gradient-to-r from-wineRed to-warmOrange bg-clip-text text-transparent"
                    >
                        <Text as="span" className="text-white">
                            🔥
                        </Text>{' '}
                        Pricing Plans
                    </Text>
                </div>
            </div>
            <Text
                as="h1"
                text="Flexible Plans to Fit Your Hiring Needs"
                className="font-sans text-center text-white font-bold xs:text-[20px] md:text-[25px] lg:text-[35px] xl:text-[40px] leading-loose tracking-wide mb-4 mt-2"
            />
            <Text
                as="p"
                text="Choose a plan that matches your recruitment goals – start for free, scale as you grow!"
                className="text-center text-[14px] md:text-[16px] text-white mb-[50px] capitalize"
            />
        </>
    );
}
