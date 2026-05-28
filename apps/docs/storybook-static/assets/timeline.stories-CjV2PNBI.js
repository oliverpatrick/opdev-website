import{c as e,i as t}from"./preload-helper-D2yxXLVK.js";import{i as n,r,t as i}from"./iframe-C8g1Qi3l.js";import{r as a,t as o}from"./cn-DScxRBlD.js";var s,c,l,u=t((()=>{s=r(),a(),c=e(n()),l=({events:e,className:t,variant:n=`default`,showConnector:r=!0})=>{let i=e=>{switch(e){case`completed`:return`bg-green-500 border-green-500 text-white`;case`current`:return`bg-accent border-accent text-white animate-pulse`;case`upcoming`:return`bg-gray-200 border-gray-300 text-gray-500`;default:return`bg-accent border-accent text-white`}},a=n===`compact`;return(0,s.jsx)(`div`,{className:o(`relative`,r&&`border-l border-gray-200 ml-2 sm:border-l-2 sm:ml-6`,t),children:e.map((t,n)=>(0,s.jsxs)(`div`,{className:o(`relative`,a?`mb-3`:`mb-4 sm:mb-8`,n===e.length-1?`mb-0`:``),children:[r&&(0,s.jsx)(`div`,{className:o(`absolute -left-3 top-0 rounded-full flex items-center justify-center border sm:border-2`,a?`w-3 h-3`:`w-4 h-4 sm:w-6 sm:h-6`,i(t.status)),children:t.icon?(0,s.jsx)(`span`,{className:o(a?`text-[10px]`:`text-xs sm:text-sm`),children:t.icon}):(0,s.jsx)(`div`,{className:o(`rounded-full bg-current`,a?`w-1 h-1`:`w-1.5 h-1.5 sm:w-2 sm:h-2`)})}),(0,s.jsx)(`div`,{className:o(r?`ml-2 sm:ml-6`:`ml-0`),children:(0,s.jsxs)(`div`,{className:`flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between`,children:[(0,s.jsxs)(`div`,{className:`flex-1`,children:[(0,s.jsx)(`h3`,{className:o(`font-semibold text-gray-900`,a?`text-xs`:`text-sm sm:text-base`),children:t.title}),t.description&&(c.isValidElement(t.description)?(0,s.jsx)(`div`,{className:`mt-0.5`,children:t.description}):(0,s.jsx)(`p`,{className:o(`text-gray-600 mt-0.5`,a?`text-[11px]`:`text-xs sm:text-sm`),children:t.description}))]}),(0,s.jsx)(`time`,{className:o(`text-primary/80 font-medium sm:ml-4 flex-shrink-0 mt-0.5 sm:mt-0`,a?`text-[10px]`:`text-xs sm:text-sm`),children:t.date})]})})]},t.id??n))})},l.__docgenInfo={description:`A timeline component that displays a series of events in chronological order.

@param events - Array of timeline events to display
@param className - Additional CSS classes to apply to the timeline container
@param variant - Visual variant of the timeline, either "default" or "compact"
@param showConnector - Whether to show the connecting line and status indicators

@example
\`\`\`tsx
const events = [
  {
    id: "1",
    title: "Project Started",
    description: "Initial planning phase",
    date: "Jan 2024",
    status: "completed",
    icon: "🚀"
  },
  {
    id: "2",
    title: "Development",
    description: "Building the application",
    date: "Feb 2024",
    status: "current"
  }
];

<Timeline
  events={events}
  variant="default"
  showConnector={true}
/>
\`\`\``,methods:[],displayName:`Timeline`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id?: string | number;
  date: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  status?: "completed" | "current" | "upcoming";
}`,signature:{properties:[{key:`id`,value:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}],required:!1}},{key:`date`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`union`,raw:`string | React.ReactNode`,elements:[{name:`string`},{name:`ReactReactNode`,raw:`React.ReactNode`}],required:!0}},{key:`description`,value:{name:`union`,raw:`string | React.ReactNode`,elements:[{name:`string`},{name:`ReactReactNode`,raw:`React.ReactNode`}],required:!1}},{key:`icon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}},{key:`status`,value:{name:`union`,raw:`"completed" | "current" | "upcoming"`,elements:[{name:`literal`,value:`"completed"`},{name:`literal`,value:`"current"`},{name:`literal`,value:`"upcoming"`}],required:!1}}]}}],raw:`TimelineEvent[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "compact"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"compact"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},showConnector:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}}})),d,f,p,m,h;t((()=>{u(),i(),d={title:`UI/Timeline`,component:l,argTypes:{variant:{control:`select`,options:[`default`,`compact`]},showConnector:{control:`boolean`}}},f={args:{events:[{id:`1`,date:`Jan 2024`,title:`Project Started`,description:`Initial planning and setup phase.`,status:`completed`},{id:`2`,date:`Mar 2024`,title:`Development`,description:`Building core features and components.`,status:`completed`},{id:`3`,date:`Jun 2024`,title:`Beta Release`,description:`First public beta available for testing.`,status:`current`},{id:`4`,date:`Sep 2024`,title:`Production Launch`,description:`Full production release planned.`,status:`upcoming`}],variant:`default`,showConnector:!0}},p={args:{...f.args,variant:`compact`}},m={args:{...f.args,showConnector:!1}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    events: [{
      id: "1",
      date: "Jan 2024",
      title: "Project Started",
      description: "Initial planning and setup phase.",
      status: "completed"
    }, {
      id: "2",
      date: "Mar 2024",
      title: "Development",
      description: "Building core features and components.",
      status: "completed"
    }, {
      id: "3",
      date: "Jun 2024",
      title: "Beta Release",
      description: "First public beta available for testing.",
      status: "current"
    }, {
      id: "4",
      date: "Sep 2024",
      title: "Production Launch",
      description: "Full production release planned.",
      status: "upcoming"
    }],
    variant: "default",
    showConnector: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "compact"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showConnector: false
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Compact`,`NoConnector`]}))();export{p as Compact,f as Default,m as NoConnector,h as __namedExportsOrder,d as default};