import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textVariants = cva('', {
    variants: {
        size: {
            sm: 'text-sm',
            xs: 'text-xs',
            base: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
            '3xl': 'text-3xl',
        },
        tColor: {
            black: 'text-black',
            darkWhite: 'text-neutral-300 text-white',
        },
        weight: {
            normal: 'font-normal',
            semibold: 'font-semibold',
            bold: 'font-bold',
            medium: 'font-medium',
        },
    },
    defaultVariants: {
        size: 'base',
        tColor: 'darkWhite',
        weight: 'normal',
    },
});

import type { ElementType, ComponentPropsWithRef } from 'react';

type TextOwnProps = VariantProps<typeof textVariants> & {
    as?: ElementType;
    text?: string | HTMLElement | React.ReactElement<typeof Text> | React.ReactNode;
    children?: React.ReactNode;
};

type TextProps<T extends ElementType = 'p'> = TextOwnProps &
    Omit<ComponentPropsWithRef<T>, keyof TextOwnProps>;

const Text = React.forwardRef<HTMLElement, TextProps>(
    ({ as: Comp = 'p', text, size, children, tColor, weight, className, ...props }, ref) => {
        return (
            <Comp
                ref={ref}
                className={cn(textVariants({ size, tColor, weight }), className)}
                {...props}
            >
                {text ?? children}
            </Comp>
        );
    }
);

Text.displayName = 'Text';

export { Text };
