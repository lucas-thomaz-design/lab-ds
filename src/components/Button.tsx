import {Slot} from '@radix-ui/react-slot'
import {clsx} from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  
    children: ReactNode;
    asChild?: boolean;
}

export function Button({  children, asChild, className, ...props }: ButtonProps){
    const Component = asChild ? Slot : 'button';
    
    return( 
        <Component 
            className={clsx(
                'py-3 px-4 rounded-md bg-sky-500 font-semibold text-slate-900 w-full hover:bg-sky-400 transition-colors focus:ring-2 ring-slate-200',
                className,

        )}
        {...props}

        >
            {children}
        </Component>
    )
}