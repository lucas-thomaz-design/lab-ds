import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'




export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  

}

export function Checkbox(props: CheckboxProps){
    
    return( 
        <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-slate-700 rounded transition-colors hover:bg-slate-500' {...props}>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-sky-500' />

            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}