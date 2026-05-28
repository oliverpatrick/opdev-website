import{c as e,i as t}from"./preload-helper-D2yxXLVK.js";import{i as n,r,t as i}from"./iframe-C8g1Qi3l.js";import{n as a,t as o}from"./clsx-BJSzLsb3.js";import{c as s,l as c,o as l,r as u,t as d}from"./icons-M49ieJAC.js";var f,p,m,h,g=t((()=>{f=r(),p=e(n()),a(),c(),m={info:(0,f.jsx)(u,{className:`h-5 w-5`,"aria-hidden":`true`}),warning:(0,f.jsx)(s,{className:`h-5 w-5`,"aria-hidden":`true`}),error:(0,f.jsx)(d,{className:`h-5 w-5`,"aria-hidden":`true`}),success:(0,f.jsx)(l,{className:`h-5 w-5`,"aria-hidden":`true`})},h=({variant:e=`warning`,position:t=`default`,title:n,children:r,className:i})=>{let a=m[e],[s,c]=(0,p.useState)(!0),l=()=>{c(!1)};return s?(0,f.jsxs)(`div`,{className:o(`border-l-4 p-4`,{"bg-blue-100 border-blue-500 text-blue-700":e===`info`,"bg-yellow-100 border-yellow-500 text-yellow-700":e===`warning`,"bg-red-100 border-red-500 text-red-700":e===`error`,"bg-green-100 border-green-500 text-green-700":e===`success`,"my-6 relative w-full max-w-3xl":t===`default`,"fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl mx-auto":t===`top`,"fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl mx-auto":t===`bottom`},i),children:[l&&(0,f.jsx)(`button`,{onClick:l,className:o(`absolute top-2 right-2 p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2`,{"text-blue-600 focus:ring-blue-500":e===`info`,"text-yellow-600 focus:ring-yellow-500":e===`warning`,"text-red-600 focus:ring-red-500":e===`error`,"text-green-600 focus:ring-green-500":e===`success`}),"aria-label":`Close alert`,children:(0,f.jsx)(`svg`,{className:`h-4 w-4`,viewBox:`0 0 20 20`,fill:`currentColor`,children:(0,f.jsx)(`path`,{fillRule:`evenodd`,d:`M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z`,clipRule:`evenodd`})})}),(0,f.jsxs)(`div`,{className:`flex`,children:[(0,f.jsx)(`div`,{className:`shrink-0`,children:(0,f.jsx)(`div`,{className:o({"text-blue-500":e===`info`,"text-yellow-500":e===`warning`,"text-red-500":e===`error`,"text-green-500":e===`success`}),children:a})}),(0,f.jsxs)(`div`,{className:`ml-3`,children:[n&&(0,f.jsx)(`p`,{className:`text-sm font-medium`,children:n}),(0,f.jsx)(`div`,{className:o(`text-sm`,{"text-blue-600":e===`info`,"text-yellow-600":e===`warning`,"text-red-600":e===`error`,"text-green-600":e===`success`,"mt-1":!!n}),children:r})]})]})]}):null},h.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"info" | "warning" | "error" | "success"`,elements:[{name:`literal`,value:`"info"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"error"`},{name:`literal`,value:`"success"`}]},description:``,defaultValue:{value:`"warning"`,computed:!1}},position:{required:!1,tsType:{name:`union`,raw:`"default" | "top" | "bottom"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),_,v,y,b,x,S;t((()=>{g(),i(),_={title:`UI/Alert`,component:h,argTypes:{variant:{control:`select`,options:[`info`,`warning`,`error`,`success`]},position:{control:`select`,options:[`default`,`top`,`bottom`]},title:{control:`text`},children:{control:`text`}}},v={args:{variant:`info`,title:`Information`,children:`This is an informational alert message.`,position:`default`}},y={args:{variant:`warning`,title:`Warning`,children:`This is a warning alert message.`,position:`default`}},b={args:{variant:`error`,title:`Error`,children:`Something went wrong. Please try again.`,position:`default`}},x={args:{variant:`success`,title:`Success`,children:`Operation completed successfully!`,position:`default`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Information",
    children: "This is an informational alert message.",
    position: "default"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning",
    children: "This is a warning alert message.",
    position: "default"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Error",
    children: "Something went wrong. Please try again.",
    position: "default"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    children: "Operation completed successfully!",
    position: "default"
  }
}`,...x.parameters?.docs?.source}}},S=[`Info`,`Warning`,`Error`,`Success`]}))();export{b as Error,v as Info,x as Success,y as Warning,S as __namedExportsOrder,_ as default};