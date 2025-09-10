import ArrowButton from '@/components/ui/arrowbutton';
import useRegister from '@/stores/registrationStore';
import { ValidationResult } from '@/types/validation';
const ArrowNavigation = ({
    length,
    student = true,
    validations,
}: {
    length: number;
    student?: boolean;
    validations?: ((data?: any) => ValidationResult)[];
}) => {
    const step = useRegister((state) => state.step);
    const setStep = useRegister((state) => state.setStep);
    const error = useRegister((state) => state.error);
    const setError = useRegister((state) => state.setError);
    length = student && step < 6 ? 6 : length;
    const handleSteps = () => {
        if (validations) {
            const mssg = validations[step]();

            if (!mssg?.success) {
                setError(mssg?.message || 'Please fix validation errors');
                return;
            } else {
                setError('');
            }
        }

        setStep(step + 1);
    };

    return (
        <>
            {step < length - 1 && (
                <div
                    className={`absolute left-[876px]  top-[425px] -translate-y-1/2 z-20 hidden lg:block 'opacity-50 pointer-events-none' : ''`}
                >
                    <ArrowButton direction="right" onClick={handleSteps} />
                </div>
            )}
            {step >= 0 && (
                <div className="absolute left-[32px] top-[425px] -translate-y-1/2 z-20">
                    {student && step !== 6 ? (
                        <ArrowButton
                            direction="left"
                            onClick={() => setStep(Math.max(0, step - 1))}
                        />
                    ) : (
                        <ArrowButton
                            direction="left"
                            onClick={() => setStep(Math.max(0, step - 1))}
                        />
                    )}
                </div>
            )}
        </>
    );
};

export default ArrowNavigation;
