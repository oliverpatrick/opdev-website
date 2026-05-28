import{c as e,i as t}from"./preload-helper-D2yxXLVK.js";import{i as n,r,t as i}from"./iframe-C8g1Qi3l.js";import{r as a,t as o}from"./cn-DScxRBlD.js";var s,c,l,u=t((()=>{s=r(),c=e(n()),a(),l=({tabs:e,defaultTab:t,onChange:n,className:r,trackBg:i=`bg-gray-200`,indicatorBg:a=`bg-white`,activeTextColor:l=`text-gray-900`,inactiveTextColor:u=`text-gray-500 hover:text-gray-700`})=>{let d=e[0]?.subItems?.[0]?.id??e[0]?.id??``,[f,p]=(0,c.useState)(t??d),m=(0,c.useRef)(null),h=(0,c.useRef)(new Map),[g,_]=(0,c.useState)({left:0,width:0}),v=(0,c.useCallback)(()=>{let t=m.current,n=h.current.get(f);if(!t||!n)return;let r=e.find(e=>e.id===f||e.subItems?.some(e=>e.id===f));if(r?.subItems?.some(e=>e.id===f)&&r?.subItems){let e=r.subItems.map(e=>h.current.get(e.id)).filter(Boolean);if(e.length===0)return;let n=t.getBoundingClientRect(),i=e[0].getBoundingClientRect(),a=e[e.length-1].getBoundingClientRect(),o=i.left-n.left,s=a.right-i.left;_({left:o-2,width:s+4})}else{let e=t.getBoundingClientRect(),r=n.getBoundingClientRect();_({left:r.left-e.left,width:r.width})}},[f,e]);(0,c.useEffect)(()=>{v()},[v]);let y=e=>{p(e),n?.(e)},b=e=>t=>{t?h.current.set(e,t):h.current.delete(e)};return(0,s.jsx)(`div`,{className:o(`inline-flex`,r),children:(0,s.jsxs)(`div`,{ref:m,className:o(`relative inline-flex items-center rounded-full p-1`,i),children:[(0,s.jsx)(`div`,{className:o(`absolute top-1 bottom-1 rounded-full shadow-sm transition-all duration-300 ease-in-out`,a),style:{left:g.left,width:g.width}}),e.map(e=>e.subItems&&e.subItems.length>0?e.subItems.some(e=>e.id===f)?(0,s.jsx)(`div`,{className:`relative flex items-center`,children:e.subItems.map(e=>(0,s.jsx)(`button`,{ref:b(e.id),type:`button`,role:`tab`,"aria-selected":f===e.id,onClick:()=>y(e.id),className:o(`relative z-10 cursor-pointer rounded-full px-2 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-300`,f===e.id?l:u),children:e.label},e.id))},e.id):(0,s.jsx)(`button`,{ref:b(e.id),type:`button`,role:`tab`,"aria-selected":!1,onClick:()=>y(e.subItems[0].id),className:o(`relative z-10 cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-300`,u),children:e.label},e.id):(0,s.jsx)(`button`,{ref:b(e.id),type:`button`,role:`tab`,"aria-selected":f===e.id,onClick:()=>y(e.id),className:o(`relative z-10 cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-300`,f===e.id?l:u),children:e.label},e.id))]})})},l.__docgenInfo={description:``,methods:[],displayName:`PillTabNav`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  label: string;
  subItems?: { id: string; label: string }[];
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`subItems`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; label: string }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`{ id: string; label: string }[]`,required:!1}}]}}],raw:`TabItem[]`},description:``},defaultTab:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(tabId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`tabId`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``},trackBg:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"bg-gray-200"`,computed:!1}},indicatorBg:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"bg-white"`,computed:!1}},activeTextColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"text-gray-900"`,computed:!1}},inactiveTextColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"text-gray-500 hover:text-gray-700"`,computed:!1}}}}})),d,f,p,m,h,g,_,v,y;t((()=>{u(),i(),d={title:`UI/PillTabNav`,component:l},f={args:{tabs:[{id:`me`,label:`Me`},{id:`career`,label:`Career`,subItems:[{id:`work`,label:`Work`},{id:`play`,label:`Play`}]}],defaultTab:`me`}},p={args:{tabs:[{id:`overview`,label:`Overview`},{id:`details`,label:`Details`},{id:`settings`,label:`Settings`}],defaultTab:`overview`}},m={args:{tabs:[{id:`home`,label:`Home`},{id:`career`,label:`Career`,subItems:[{id:`work`,label:`Work`},{id:`play`,label:`Play`}]},{id:`about`,label:`About`},{id:`media`,label:`Media`,subItems:[{id:`photos`,label:`Photos`},{id:`videos`,label:`Videos`}]}],defaultTab:`home`}},h={args:{tabs:[{id:`home`,label:`Home`},{id:`about`,label:`About`},{id:`projects`,label:`Projects`},{id:`blog`,label:`Blog`},{id:`contact`,label:`Contact`}],defaultTab:`home`}},g={args:{tabs:[{id:`me`,label:`Me`},{id:`career`,label:`Career`,subItems:[{id:`work`,label:`Work`},{id:`play`,label:`Play`}]}],defaultTab:`me`,trackBg:`bg-black`,indicatorBg:`bg-gray-800`,activeTextColor:`text-white`,inactiveTextColor:`text-gray-400 hover:text-gray-300`}},_={args:{tabs:[{id:`me`,label:`Me`},{id:`career`,label:`Career`,subItems:[{id:`work`,label:`Work`},{id:`play`,label:`Play`}]}],defaultTab:`me`,trackBg:`bg-blue-100`,indicatorBg:`bg-blue-500`,activeTextColor:`text-white`,inactiveTextColor:`text-blue-400 hover:text-blue-600`}},v={args:{tabs:[{id:`me`,label:`Me`},{id:`career`,label:`Career`,subItems:[{id:`work`,label:`Work`},{id:`play`,label:`Play`}]}],defaultTab:`me`,trackBg:`bg-green-100`,indicatorBg:`bg-green-500`,activeTextColor:`text-white`,inactiveTextColor:`text-green-400 hover:text-green-600`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "me",
      label: "Me"
    }, {
      id: "career",
      label: "Career",
      subItems: [{
        id: "work",
        label: "Work"
      }, {
        id: "play",
        label: "Play"
      }]
    }],
    defaultTab: "me"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "overview",
      label: "Overview"
    }, {
      id: "details",
      label: "Details"
    }, {
      id: "settings",
      label: "Settings"
    }],
    defaultTab: "overview"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "home",
      label: "Home"
    }, {
      id: "career",
      label: "Career",
      subItems: [{
        id: "work",
        label: "Work"
      }, {
        id: "play",
        label: "Play"
      }]
    }, {
      id: "about",
      label: "About"
    }, {
      id: "media",
      label: "Media",
      subItems: [{
        id: "photos",
        label: "Photos"
      }, {
        id: "videos",
        label: "Videos"
      }]
    }],
    defaultTab: "home"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "home",
      label: "Home"
    }, {
      id: "about",
      label: "About"
    }, {
      id: "projects",
      label: "Projects"
    }, {
      id: "blog",
      label: "Blog"
    }, {
      id: "contact",
      label: "Contact"
    }],
    defaultTab: "home"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "me",
      label: "Me"
    }, {
      id: "career",
      label: "Career",
      subItems: [{
        id: "work",
        label: "Work"
      }, {
        id: "play",
        label: "Play"
      }]
    }],
    defaultTab: "me",
    trackBg: "bg-black",
    indicatorBg: "bg-gray-800",
    activeTextColor: "text-white",
    inactiveTextColor: "text-gray-400 hover:text-gray-300"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "me",
      label: "Me"
    }, {
      id: "career",
      label: "Career",
      subItems: [{
        id: "work",
        label: "Work"
      }, {
        id: "play",
        label: "Play"
      }]
    }],
    defaultTab: "me",
    trackBg: "bg-blue-100",
    indicatorBg: "bg-blue-500",
    activeTextColor: "text-white",
    inactiveTextColor: "text-blue-400 hover:text-blue-600"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "me",
      label: "Me"
    }, {
      id: "career",
      label: "Career",
      subItems: [{
        id: "work",
        label: "Work"
      }, {
        id: "play",
        label: "Play"
      }]
    }],
    defaultTab: "me",
    trackBg: "bg-green-100",
    indicatorBg: "bg-green-500",
    activeTextColor: "text-white",
    inactiveTextColor: "text-green-400 hover:text-green-600"
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`ThreeTabs`,`WithMultipleSubOptions`,`ManyTabs`,`Dark`,`Blue`,`Green`]}))();export{_ as Blue,g as Dark,f as Default,v as Green,h as ManyTabs,p as ThreeTabs,m as WithMultipleSubOptions,y as __namedExportsOrder,d as default};