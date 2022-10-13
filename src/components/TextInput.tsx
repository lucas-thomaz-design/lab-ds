import {Slot} from '@radix-ui/react-slot'
import {clsx} from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';


export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return(
        <div className='h-12 flex items-center gap-3 w-full py-4 px-3 rounded-md bg-slate-700 focus-within:ring-2 ring-sky-400 '>
        {props.children}
        </div>
    )
}

export interface TextInputIconProps{
children: ReactNode;

}
function TextInputIcon(props: TextInputIconProps) {
    return(
        <Slot className='w-6 h-6 text-slate-500'>
        {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInputIcon'


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function TextInputInput(props: TextInputInputProps){
    
    return( 
        
            <input 
                className="bg-transparent flex-1  text-slate-200 text-xs placeholder:text-slate-500 outline-none"
            {...props}
            />


        
    )
}

export const TextInput ={
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}