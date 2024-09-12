import type { FC, SVGProps } from 'react';

export interface CompanyValueI {
    Icon: FC<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}
