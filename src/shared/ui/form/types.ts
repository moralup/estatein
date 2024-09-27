import type { FC, ReactNode, SVGProps } from 'react';

export interface FormI {
    /** Icon before input. */
    readonly Icon?: FC<SVGProps<SVGSVGElement>>;
    /** Additional styles */
    readonly className?: string;
    /** Text or Tag next to form */
    readonly label?: ReactNode;
    /** Value of form */
    readonly value?: string;
}
