var c=Object.defineProperty;var r=(o,t)=>c(o,"name",{value:t,configurable:!0});import{w as l,u as d}from"./index.e3023d04.js";import{R as g}from"./index.0a8dc5e0.js";import{H as p}from"./Header.97fbe372.js";import{a as n,j as e}from"./jsx-runtime.c3f2c764.js";import"./iframe.c58d942a.js";import"./instrumenter.0570e86b.js";import"./es.map.constructor.2887b139.js";import"./Button.7214cc8e.js";const a=r(()=>{const[o,t]=g.useState();return n("article",{children:[e(p,{user:o,onLogin:()=>t({name:"Jane Doe"}),onLogout:()=>t(void 0),onCreateAccount:()=>t({name:"Jane Doe"})}),n("section",{children:[e("h2",{children:"Pages in Storybook"}),n("p",{children:["We recommend building UIs with a"," ",e("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:e("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),e("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),n("ul",{children:[e("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),e("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),n("p",{children:["Get a guided tutorial on component-driven development at"," ",e("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",e("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),n("div",{className:"tip-wrapper",children:[e("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",e("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("g",{fill:"none",fillRule:"evenodd",children:e("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})},"Page");try{a.displayName="Page",a.__docgenInfo={description:"",displayName:"Page",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/stories/Page.tsx#Page"]={docgenInfo:a.__docgenInfo,name:"Page",path:"src/stories/Page.tsx#Page"})}catch{}const P={title:"Example/Page",component:a,parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
`,locationsMap:{"logged-out":{startLoc:{col:46,line:15},endLoc:{col:74,line:15},startBody:{col:46,line:15},endBody:{col:74,line:15}},"logged-in":{startLoc:{col:46,line:15},endLoc:{col:74,line:15},startBody:{col:46,line:15},endBody:{col:74,line:15}}}},layout:"fullscreen"}},i=r(o=>e(a,{...o}),"Template"),S=i.bind({}),m=i.bind({});m.play=async({canvasElement:o})=>{const s=await l(o).getByRole("button",{name:/Log in/i});await d.click(s)};const L=["LoggedOut","LoggedIn"];export{m as LoggedIn,S as LoggedOut,L as __namedExportsOrder,P as default};
//# sourceMappingURL=Page.stories.f69f5646.js.map
