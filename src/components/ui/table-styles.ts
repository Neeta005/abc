import { cva } from "class-variance-authority";

export const tableStyles = cva(
    "w-full border-collapse text-sm",
    {
        variants: {
            theme: {
                dark: "bg-gray-900 text-white",
                light: "bg-white text-gray-900",
            },
        },
        defaultVariants: {
            theme: "dark",
        },
    }
);