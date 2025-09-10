import { Text } from '../ui/Text';
export default function ProgressCircle({ total }: { total: number }) {
    return (
        <div className="flex flex-col items-center mb-6">
            <div className="relative inline-flex mb-2 w-[200px] h-[200px]">
                <svg className="block w-[200px] h-[200px] mt-2">
                    <circle
                        cx={100}
                        cy={100}
                        r={80}
                        stroke="#FFFFFF"
                        strokeWidth={24}
                        fill="none"
                    />
                    <circle
                        cx={100}
                        cy={100}
                        r={80}
                        className="stroke-green-500 stroke-[24] fill-none transition-[stroke-dashoffset] duration-500"
                        strokeDasharray={2 * Math.PI * 80}
                        strokeDashoffset={2 * Math.PI * 80 * (1 - total / 100)}
                    />
                </svg>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                    <Text
                        text={`${total}%`}
                        className="text-white font-extrabold text-3xl drop-shadow-lg select-none"
                    />
                </div>
            </div>
        </div>
    );
}
