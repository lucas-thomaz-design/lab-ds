
import { SignIn } from './signin'
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import {rest} from 'msw'


export default {
    title: 'Pages/Sign in',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw:{
            handlers:[
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login realizado!'
                        
                    }))
                } )
            ],
        },
    },

} as Meta

export const Default: StoryObj = {

    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)


        userEvent.type(canvas.getByPlaceholderText('Seu e-mail'), 'santiago.lucas90@gmail.com.br')
        userEvent.type(canvas.getByPlaceholderText('********'), '12345678')
        
        userEvent.click(canvas.getByRole('button'))
        await waitFor(() => {
            //expect(canvas.getByText('Login realizado!')).toBeInTheDocument()

            expect(await findByText('Login realizado!')).toBeInTheDocument();

        })
       /* await waitFor(() => {
            expect(canvas.getByText((content, element) => {
                const hasText = (node) => node.textContent === 'Login realizado!';
                const node = element ? element : null;
                return hasText(node);
            })).toBeInTheDocument();
        });*/
    }
}
