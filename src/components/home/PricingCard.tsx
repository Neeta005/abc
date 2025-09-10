import React from 'react';
import { Text } from '../ui/Text';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';
const getColor = (index: number) => {
    const colors = [
        '#1C1C1C',
        'linear-gradient(197.68deg, rgba(255, 171, 67, 0.1) 0.52%, rgba(218, 72, 30, 0.1) 49.87%, rgba(255, 105, 106, 0.1) 99.22%)',
        '#1C1C1C',
    ];
    return colors[index];
};

export function renderPricingCard(
    {
        title,
        popular,
        monthlyPrice,
        description,
        features,
        buttonText,
    }: {
        title: string;
        popular: boolean;
        monthlyPrice: number;
        description: string;
        features: string[];
        buttonText: string;
    },
    index: number
) {
    return (
        <div
            key={index}
            className="flex flex-col w-full max-w-[355px] min-h-[550px] max-h-[550px] p-8 rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] relative"
            style={{ background: getColor(index), marginBottom: index === 0 ? '32px' : '16px' }}
        >
            <div className="flex flex-col items-center justify-between flex-grow h-full">
                <div className="flex flex-col items-center">
                    {popular && (
                        <Text
                            as="span"
                            text="Recommended"
                            className="absolute top-[-4%] left-[30%] text-white text-base font-sans px-4 py-2 rounded-full bg-gradient-to-r from-wineRed to-warmOrange"
                        />
                    )}
                    <Text
                        as="h3"
                        text={title}
                        className=" font-bold text-white mb-8 text-2xl leading-[150%] tracking-[1%] text-center capitalize"
                    />
                    <div className="flex justify-center items-center mb-8">
                        <Text
                            as="span"
                            text="$"
                            className="bg-gradient-to-r from-wineRed to-warmOrange bg-clip-text text-transparent text-[50px] font-bold leading-none inline-block"
                        />
                        <Text
                            as="span"
                            text={monthlyPrice.toString()}
                            className="bg-gradient-to-r from-wineRed to-warmOrange bg-clip-text text-transparent text-[50px] font-bold leading-none"
                        />
                    </div>
                    <Text
                        as="p"
                        text={description}
                        className="text-[20px] whitespace-nowrap text-white mb-4"
                    />
                    <Text as="ul" className="mt-4">
                        {features?.map((feature, index) => (
                            <Text as="li" key={index} className="flex items-center mb-6">
                                <div className="flex flex-row items-start p-1 gap-2.5 w-[26px] h-[26px] bg-gradient-to-r from-wineRed to-warmOrange rounded-[5px] mr-2.5">
                                    <Check className="w-4 h-4" />
                                </div>
                                <Text as="p" text={feature} className="text-gray-300" />
                            </Text>
                        ))}
                    </Text>
                </div>
                <Button
                    className="w-full py-2 px-4 rounded-[10px] text-white mt-auto text-base font-bold capitalize shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                    style={{
                        background: !popular
                            ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)'
                            : 'linear-gradient(90deg, #CD2A51 0%, #F05921 100%)',
                    }}
                >
                    {buttonText}
                </Button>
            </div>
        </div>
    );
}
