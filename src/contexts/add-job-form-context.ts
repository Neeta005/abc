import { createContext, useContext } from "react";
import { FieldErrors, UseFormReturn, UseFormWatch } from "react-hook-form";
import { JobPostFormData as FormData } from "@/types/form.types";

interface FormContextType {
    step: number;
    setStep: (step: number) => void;
    form: UseFormReturn<FormData>;
    errors: FieldErrors<FormData>;
    watch: UseFormWatch<FormData>;
    validateFormData: (data: Partial<FormData>) => { success: boolean; data?: Partial<FormData>; error?: any };
}

const AddJobFormContext = createContext<FormContextType | undefined>(undefined);

export const useAddJobFormContext = () => {
    const context = useContext(AddJobFormContext);
    if (!context) {
        throw new Error("AddJobContext must be used within a AddJobProvider");
    }
    return context;
};

export default AddJobFormContext;