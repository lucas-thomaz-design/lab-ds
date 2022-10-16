import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../logoReact";
import axios, { Axios } from 'axios';
import { EnvelopeSimple, LockSimple } from 'phosphor-react'
import { FormEvent, useState } from "react";



export function SignIn(){

    const [isUserSignedIn, setIsUserSignedIn] = useState(false)


    async function handleSignIn(event: FormEvent){
        event.preventDefault();    
        await axios.post('/sessions', {
          email: 'santiago.lucas90@gmail.com',
          password: '12345678'
        })

        setIsUserSignedIn(true)
    }  




return (


    <div className='w-screen h-screen bg-slate-900 flex flex-col items-center justify-center text-slate-50'>
      
      <header className='flex flex-col items-center'>
        <Logo/> 
        <Heading size='lg' className='mt-4'>Fazer login</Heading>
        <Text size='lg' className='text-slate-500 mt-1'>Faça login e começe a usar</Text>
      </header>

      <form onSubmit={handleSignIn} className='gap-4 mt-10 w-full max-w-sm flex flex-col items-stretch'>
        {isUserSignedIn && <Text size="sm" className="text-slate-500">Login realizado!</Text>}
        
        <label htmlFor='email' className='flex flex-col gap-1'>
          <Text size='sm' className='font-semibold text-slate-200'>Digite seu e-mail </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='Seu e-mail'/>
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-1'>
          <Text size='sm' className='font-semibold text-slate-200'>Sua senha </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <LockSimple />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='********'/>
          </TextInput.Root>
        </label>

        <label htmlFor='remember-me' className='flex items-center gap-2'>
          <Checkbox id='remember-me'/>
          <Text size='sm' className='text-slate-500 hover:text-slate-400'> Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>

      </form>

      <footer className='flex flex-col items-center gap-2 mt-8'>
        <Text asChild size='sm'>
          <a href='' className='text-slate-500 underline hover:text-slate-400'>Esqueceu sua senha</a>
        </Text>

        <Text asChild size='sm'>
          <a href='' className='text-slate-500 underline hover:text-slate-400'>Não tenho conta. Criar agora</a>
        </Text>

      </footer>


     
    </div> 
)

}