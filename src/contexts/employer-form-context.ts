import { createContext, useContext } from "react";
import { FieldErrors, UseFormReturn, UseFormWatch } from "react-hook-form";
import { EmployerFormData as FormData } from "@/types/form.types";

interface FormContextType {
  step: number;
  setStep: (step: number) => void;
  form: UseFormReturn<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
}

const EmployerFormContext = createContext<FormContextType | undefined>(undefined);

export const useEmployerFormContext = () => {
  const context = useContext(EmployerFormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export default EmployerFormContext;