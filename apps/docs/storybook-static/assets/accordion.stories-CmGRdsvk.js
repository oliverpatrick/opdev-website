import{c as e,i as t}from"./preload-helper-D2yxXLVK.js";import{i as n,r,t as i}from"./iframe-C8g1Qi3l.js";var a,o,s,c=t((()=>{a=r(),o=e(n()),s=({items:e,allowMultiple:t=!1})=>{let[n,r]=(0,o.useState)(new Set),i=e=>{let i=new Set(n);i.has(e)?i.delete(e):(t||i.clear(),i.add(e)),r(i)};return(0,a.jsx)(`div`,{className:`w-full space-y-2`,children:e.map(e=>(0,a.jsxs)(`div`,{className:`border border-secondary rounded-b-lg overflow-hidden`,children:[(0,a.jsxs)(`button`,{onClick:()=>i(e.id),className:`w-full px-4 py-3 text-left bg-primary hover:bg-primary/50 transition-colors duration-200 flex justify-between items-center`,children:[(0,a.jsx)(`span`,{className:`font-medium text-secondary`,children:e.title}),(0,a.jsx)(`svg`,{className:`w-5 h-5 text-accent-secondary transition-transform duration-200 ${n.has(e.id)?`rotate-180`:``}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,a.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M19 9l-7 7-7-7`})})]}),n.has(e.id)&&(0,a.jsx)(`div`,{className:`px-4 py-3 bg-white border-t border-primary`,children:(0,a.jsx)(`p`,{className:`text-secondary`,children:e.content})})]},e.id))})},s.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  title: string;
  content: string | React.ReactNode;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`content`,value:{name:`union`,raw:`string | React.ReactNode`,elements:[{name:`string`},{name:`ReactReactNode`,raw:`React.ReactNode`}],required:!0}}]}}],raw:`AccordionItem[]`},description:``},allowMultiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),l,u,d,f;t((()=>{c(),i(),l={title:`UI/Accordion`,component:s,argTypes:{allowMultiple:{control:`boolean`}}},u={args:{items:[{id:`1`,title:`What is this project?`,content:`A turborepo monorepo with shared UI components.`},{id:`2`,title:`How do I get started?`,content:`Run pnpm install and then pnpm dev to start development.`},{id:`3`,title:`Can I contribute?`,content:`Yes! Check the contributing guide for more details.`}],allowMultiple:!1}},d={args:{items:[{id:`1`,title:`Section One`,content:`Content for section one.`},{id:`2`,title:`Section Two`,content:`Content for section two.`},{id:`3`,title:`Section Three`,content:`Content for section three.`}],allowMultiple:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      title: "What is this project?",
      content: "A turborepo monorepo with shared UI components."
    }, {
      id: "2",
      title: "How do I get started?",
      content: "Run pnpm install and then pnpm dev to start development."
    }, {
      id: "3",
      title: "Can I contribute?",
      content: "Yes! Check the contributing guide for more details."
    }],
    allowMultiple: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      title: "Section One",
      content: "Content for section one."
    }, {
      id: "2",
      title: "Section Two",
      content: "Content for section two."
    }, {
      id: "3",
      title: "Section Three",
      content: "Content for section three."
    }],
    allowMultiple: true
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`MultipleOpen`]}))();export{u as Default,d as MultipleOpen,f as __namedExportsOrder,l as default};