import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge'


//combine className without writing lots of class name in a single line
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}